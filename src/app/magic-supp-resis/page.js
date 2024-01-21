"use client";
import { useRef, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import Result from "./results/page";
import Form from "./Form/page";

export default function MagicCalculator() {
  const inputField = useRef();
  const inputFieldFactor1 = useRef();
  const inputFieldFactor2 = useRef();
  const [disable, setDisable] = useState(true);
  const [res, setRes] = useState([]);

  function CalculHandler() {
    const input1 = inputField.current.value;
    const input2 = inputFieldFactor1.current.value;
    if (input1 === "" || input2 === 0) {
      alert("Fill all inputs!!");
    } else {
      setDisable(() => false);
      setRes([
        {
          id: Math.random() + 0.00005,
          line1: Number(inputField.current.value),
          line2: Math.pow(Math.sqrt(Number(input1)) + Number(input2), 2),
        },
        ...res,
      ]);
      console.log(res);
    }
  }
  function NewLine() {
    const firstLine = res[res.length - 1].line2;
    // const firstLine = res[0].line2;
    const nextLine = Math.pow(
      Math.sqrt(firstLine) + Number(inputFieldFactor2.current.value),
      2
    );
    setRes([
      ...res,
      {
        id: Math.random() + 0.00005,
        line1: nextLine,
        line2: Math.pow(
          Math.sqrt(nextLine) + Number(inputFieldFactor1.current.value),
          2
        ),
      },
    ]);
    console.log(res);
  }
  function RemoveAll() {
    setRes([]);
    setDisable(() => true);
  }
  function CopieText(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="md:px-8 px-2">
      <div className="h-screen flex items-center justify-center">
        <div className="bg-neutral-200 grid grid-cols-5 w-full gap-4 p-4 rounded-md">
          <div className="grid content-center place-content-center md:col-span-2 col-span-full">
            <Form
              disable={disable}
              inputField={inputField}
              CalculHandler={CalculHandler}
              inputFieldFactor1={inputFieldFactor1}
              inputFieldFactor2={inputFieldFactor2}
            />
          </div>
          <section className="md:col-span-3 h-[60vh] bg-neutral-100 text-neutral-800 md:p-4 p-2 rounded-md overflow-hidden overflow-y-scroll shadow-sm relative col-span-full">
            <div>
              <button
                className="btn btn-sm btn-info text-neutral-100 shadow-sm"
                onClick={NewLine}
                disabled={disable}
              >
                Add Support <FaPlus />
              </button>
              <button
                className="btn btn-sm btn-error text-white float-right shadow-sm"
                onClick={RemoveAll}
              >
                Remove All <FaTrash />
              </button>
            </div>
            {res.length === 0 ? (
              <div className="text-2xl font-medium grid content-center place-content-center text-neutral-400 opacity-45 select-none absolute top-0 left-0 bottom-0 right-0">
                Empty!
              </div>
            ) : (
              <div className="mb-4 px-1">
                {res.map((l) => (
                  <Result key={l.id} result={l} CopieText={CopieText} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

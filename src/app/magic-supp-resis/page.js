"use client";
import { useRef, useState } from "react";
import { RiClipboardLine } from "react-icons/ri";
import { FaPlus, FaTrash } from "react-icons/fa6";

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
        ...res,
        {
          id: Math.random() + 0.00005,
          line1: inputField.current.value,
          line2: Math.pow(Math.sqrt(Number(input1)) + Number(input2), 2),
        },
      ]);
    }
  }
  function NewLine() {
    const lastLine = res[res.length - 1].line2;
    const nextLine = Math.pow(
      Math.sqrt(lastLine) + Number(inputFieldFactor2.current.value),
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
  }
  function RemoveAll() {
    setRes([]);
    setDisable(() => true);
  }
  function CopieText(text) {
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="w-full md:px-8 px-2">
      <div className="grid grid-cols-4 md:gap-8 gap-4 h-screen content-center place-items-center">
        <section className="md:col-span-1 col-span-full flex justify-center flex-wrap gap-2 h-fit w-full">
          <input
            min={0}
            type="number"
            className="input input-bordered w-full shadow-sm"
            required
            placeholder="Enter line number.."
            ref={inputField}
          />
          <input
            min={0}
            type="number"
            required
            placeholder="First factor.."
            className="input input-bordered md:w-44 w-36 shadow-sm"
            ref={inputFieldFactor1}
          />
          <input
            min={0}
            required
            type="number"
            placeholder="Second factor.."
            className="input input-bordered md:w-44 w-36 shadow-sm"
            ref={inputFieldFactor2}
          />
          <button
            onClick={CalculHandler}
            disabled={!disable}
            className="btn w-full bg-neutral text-white shadow-sm"
          >
            Go
          </button>
        </section>
        <section className="md:col-span-3 col-span-full h-[50vh] bg-neutral-100 md:w-4/5 w-full text-neutral-800 md:p-4 p-2 rounded-md relative overflow-hidden overflow-y-scroll shadow-sm">
          {res.length === 0 ? (
            <div className="text-center my-10 text-2xl font-medium text-neutral-400 select-none">
              Empty!
            </div>
          ) : (
            <div className="mb-4 px-1">
              {res.map((l) => (
                <div className="border-b py-4" key={l.id}>
                  <p className="cursor-pointer">
                    <b className="text-orange-600">Line 1: </b>
                    <span onClick={() => CopieText(l.line1)}>
                      {l.line1} <RiClipboardLine className="inline" size={18} />
                    </span>
                  </p>
                  <p className="cursor-pointer">
                    <b className="text-orange-600">Line 2: </b>
                    <span onClick={() => CopieText(l.line2)}>
                      {l.line2} <RiClipboardLine className="inline" size={18} />
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="backdrop-blur-sm bg-white/10 rounded-md sticky bottom-0 left-2 right-2">
            <button
              className="btn btn-sm btn-primary shadow-sm"
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
        </section>
      </div>
    </div>
  );
}

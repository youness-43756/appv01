"use client";
import { useRef, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { RiClipboardLine } from "react-icons/ri";

export default function MagicCalculator() {
  const [msg, setMsg] = useState("Copie!");

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
      setRes((prev) => [
        {
          id: Math.random() + 0.00005,
          line1: Number(inputField.current.value),
          line2: Math.pow(Math.sqrt(Number(input1)) + Number(input2), 2),
        },
        ...prev,
      ]);
    }
  }
  function NewLine() {
    // const firstLine = res[res.length - 1].line2;
    const firstLine = res[0].line2;
    const nextLine = Math.pow(
      Math.sqrt(firstLine) + Number(inputFieldFactor2.current.value),
      2
    );
    setRes((prev) => [
      {
        id: Math.random() + 0.00005,
        line1: nextLine,
        line2: Math.pow(
          Math.sqrt(nextLine) + Number(inputFieldFactor1.current.value),
          2
        ),
      },
      ...prev,
    ]);
  }
  function RemoveAll() {
    setRes([]);
    setDisable(() => true);
  }
  function CopieText(text) {
    navigator.clipboard.writeText(text);
    setMsg("Copied!");
    setTimeout(() => {
      setMsg("Copie!");
    }, 1200);
  }

  return (
    <div className="md:px-8 px-2">
      <div className="h-screen flex items-center justify-center">
        <div className="bg-neutral-200 grid grid-cols-5 w-full gap-4 p-4 rounded-md">
          <div className="grid content-center place-content-center md:col-span-2 col-span-full">
            <div className="flex justify-center items-center flex-wrap gap-2 py-4 h-[35vh]">
              <input
                min={0}
                type="number"
                className="input md:input-md input-sm input-bordered w-full shadow-sm"
                required
                placeholder="Enter line number.."
                ref={inputField}
              />
              <input
                min={0}
                type="number"
                required
                placeholder="First factor.."
                className="input md:input-md input-sm input-bordered md:w-44 w-36 shadow-sm"
                ref={inputFieldFactor1}
              />
              <input
                min={0}
                required
                type="number"
                placeholder="Second factor.."
                className="input md:input-md input-sm input-bordered md:w-44 w-36 shadow-sm"
                ref={inputFieldFactor2}
              />
              <button
                type="submit"
                onClick={CalculHandler}
                disabled={!disable}
                className="btn w-full btn-outline text-lg shadow-sm md:btn-md btn-sm"
              >
                Go
              </button>
            </div>
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
                  <div className="border-b py-4" key={l.id}>
                    <div className="flex items-center gap-2">
                      <div className="text-orange-600 font-semibold">
                        Line 1:{" "}
                      </div>
                      <div className="flex items-center gap-0 w-fit">
                        <p>{l.line1}</p>
                        <div className="tooltip" data-tip={msg}>
                          <button
                            className="btn btn-square btn-xs btn-ghost"
                            onClick={() => CopieText(l.line1)}
                          >
                            <RiClipboardLine size={18} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="text-orange-600 font-semibold">
                        Line 2:{" "}
                      </div>
                      <div className="flex items-center gap-0 w-fit">
                        <p>{l.line2}</p>
                        <div className="tooltip" data-tip={msg}>
                          <button
                            className="btn btn-square btn-xs btn-ghost"
                            onClick={() => CopieText(l.line2)}
                          >
                            <RiClipboardLine size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

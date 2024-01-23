"use client";
import { RiClipboardLine } from "react-icons/ri";
import { useRef, useState } from "react";
import Add_new_support from "./AddButton/page";
import Input_Field from "./inputField/page";
import Remove_All from "./Button/page";
import Clipboard_button from "./ClipboardButton/page";

export default function MagicCalculator() {
  const [msg, setMsg] = useState("Copie!");
  const [disable, setDisable] = useState(true);
  const inputField = useRef();
  const inputFieldFactor1 = useRef();
  const inputFieldFactor2 = useRef();
  const [res, setRes] = useState([]);
  function RemoveAll() {
    setRes([]);
    setDisable(() => true);
  }
  function CopieText(text) {
    navigator.clipboard.writeText(text);
    setMsg("Copied!");
    setTimeout(() => {
      setMsg("Copie!");
    }, 750);
  }
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

  return (
    <div className="md:px-8 sm:px-4 px-3">
      <div className="flex md:flex-row flex-col md:gap-6 gap-4 md:py-8 py-6">
        <section className="md:max-w-sm w-full flex flex-col gap-4">
          <Input_Field
            inputType="Number"
            inputRef={inputField}
            inputPlaceHolder="Enter line number"
            inputClassName="input input-md input-bordered w-full shadow-sm"
          />
          <div className="flex gap-2 w-full">
            <Input_Field
              inputType="Number"
              inputRef={inputFieldFactor1}
              inputPlaceHolder="First factor"
              inputClassName="input input-md input-bordered w-full shadow-sm"
            />
            <Input_Field
              inputType="Number"
              inputRef={inputFieldFactor2}
              inputPlaceHolder="Second factor"
              inputClassName="input input-md input-bordered w-full shadow-sm"
            />
          </div>
          <button
            type="submit"
            onClick={CalculHandler}
            disabled={!disable}
            className="btn w-full btn-neutral text-lg shadow-sm btn-md"
          >
            Go
          </button>
        </section>
        <section className="bg-neutral-100 max-h-72 flex-1 overflow-y-scroll shadow-md md:py-4 md:px-4 px-2 py-3 rounded-lg scroll-smooth">
          <div>
            <Add_new_support NewLine={NewLine} disable={disable} />
            <Remove_All RemoveAll={RemoveAll} />
          </div>
          {res.length === 0 ? (
            <div className="py-6 text-center md:text-lg text-base font-medium opacity-35 text-neutral-800 select-none">
              Empty!
            </div>
          ) : (
            <div className="px-3 sm:px-4 md:px-6">
              {res.map((l) => (
                <div className="border-b border-gray-300 py-5" key={l.id}>
                  <div className="flex items-center gap-2">
                    <div className="text-orange-600 font-semibold">Line 1:</div>
                    <div className="flex items-center gap-1 w-fit">
                      <p>{l.line1}</p>
                      <Clipboard_button
                        msg={msg}
                        text={l.line1}
                        CopieText={CopieText}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-orange-600 font-semibold">Line 2:</div>
                    <div className="flex items-center gap-1 w-fit">
                      <p>{l.line2}</p>
                      <Clipboard_button
                        msg={msg}
                        text={l.line2}
                        CopieText={CopieText}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

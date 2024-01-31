"use client";
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
  const [supportNumber, setSupportNumber] = useState(1);
  function RemoveAll() {
    setRes([]);
    setDisable(() => true);
    setSupportNumber(1);
  }
  function CopieText(text) {
    navigator.clipboard.writeText(text);
    setMsg("Copied!");
    setTimeout(() => {
      setMsg("Copie!");
    }, 750);
  }
  function CalculHandler() {
    const input1 = Number(inputField.current.value);
    const factor1 = Number(inputFieldFactor1.current.value);

    if (input1 === "" || factor1 === 0) {
      return alert("Fill all inputs!!");
    }
    setDisable(() => false);
    setSupportNumber((prev) => prev + 1);
    if (input1 > 0) {
      setRes((prev) => [
        {
          id: Math.random() + 0.00005,
          line1: input1,
          line2: Math.pow(Math.sqrt(Math.abs(input1)) + factor1, 2),
          supNbr: supportNumber,
        },
        ...prev,
      ]);
    } else {
      const factor2 = Number(inputFieldFactor2.current.value);
      const newInput = Math.pow(Math.sqrt(Math.abs(input1)) - factor2, 2);
      setRes((prev) => [
        {
          id: Math.random() + 0.00005,
          line1: newInput,
          line2: Math.pow(Math.sqrt(Math.abs(newInput)) - factor1, 2),
          supNbr: supportNumber,
        },
        ...prev,
      ]);
    }
  }
  function NewSupport() {
    setSupportNumber((prev) => prev + 1);
    const factor1 = Number(inputFieldFactor1.current.value);
    const factor2 = Number(inputFieldFactor2.current.value);
    const firstLine = res[0].line2;
    if (inputField.current.value > 0) {
      const nextLine = Math.pow(Math.sqrt(Math.abs(firstLine)) + factor2, 2);
      setRes((prev) => [
        {
          id: Math.random() + 0.00005,
          line1: nextLine,
          line2: Math.pow(Math.sqrt(Math.abs(nextLine)) + factor1, 2),
          supNbr: supportNumber,
        },
        ...prev,
      ]);
    } else {
      const nextLine = Math.pow(Math.sqrt(Math.abs(firstLine)) - factor2, 2);
      setRes((prev) => [
        {
          id: Math.random() + 0.00005,
          line1: nextLine,
          line2: Math.pow(Math.sqrt(Math.abs(nextLine)) - factor1, 2),
          supNbr: supportNumber,
        },
        ...prev,
      ]);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:py-8 py-6 h-fit overflow-hidden">
      <section className="flex flex-col gap-3 max-w-md w-full">
        <span className="label-text -mb-2">Enter Line Number: </span>
        <Input_Field
          inputType="Number"
          inputRef={inputField}
          inputPlaceHolder="Enter line number"
          inputClassName="input input-md input-bordered w-full shadow-sm"
        />
        <div className="flex md:gap-2 gap-1 w-full">
          <div>
            <span className="label-text -mb-2">First Factor: </span>
            <Input_Field
              inputType="Number"
              inputRef={inputFieldFactor1}
              inputPlaceHolder="First factor"
              inputClassName="input input-md input-bordered w-full shadow-sm"
            />
          </div>
          <div>
            <span className="label-text -mb-2">Second Factor: </span>
            <Input_Field
              inputType="Number"
              inputRef={inputFieldFactor2}
              inputPlaceHolder="Second factor"
              inputClassName="input input-md input-bordered w-full shadow-sm"
            />
          </div>
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
      <section className="flex-1 md:gap-4 gap-2 md:px-8 sm:px-4 px-2">
        <div className="">
          <Add_new_support NewSupport={NewSupport} disable={disable} />
          <Remove_All RemoveAll={RemoveAll} />
        </div>

        <div className="px-3 sm:px-4 md:px-6 max-h-48 py-1">
          {res.length === 0 ? (
            <div className="text-center md:text-lg text-base font-medium opacity-25 text-neutral-800 select-none mt-9">
              Empty!
            </div>
          ) : (
            res.map((line) => (
              <div className="border-b border-gray-300 py-2" key={line.id}>
                <div className="flex gap-3 md:gap-4 items-center">
                  <p className="text-2xl text-orange-600 font-medium">
                    {line.supNbr}
                  </p>
                  <div>
                    <div className="flex items-center gap-1 w-fit">
                      <p>{line.line1}</p>
                      <Clipboard_button
                        msg={msg}
                        text={line.line1}
                        CopieText={CopieText}
                      />
                    </div>
                    <div className="flex items-center gap-1 w-fit">
                      <p>{line.line2}</p>
                      <Clipboard_button
                        msg={msg}
                        text={line.line2}
                        CopieText={CopieText}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

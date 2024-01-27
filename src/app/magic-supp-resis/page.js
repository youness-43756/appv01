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
    const input1 = inputField.current.value;
    const input2 = inputFieldFactor1.current.value;

    if (input1 === "" || input2 === 0) {
      alert("Fill all inputs!!");
    } else {
      setSupportNumber((prev) => prev + 1);

      setDisable(() => false);
      setRes((prev) => [
        {
          id: Math.random() + 0.00005,
          line1: Number(inputField.current.value),
          line2: Math.pow(Math.sqrt(Number(input1)) + Number(input2), 2),
          supNbr: supportNumber,
        },
        ...prev,
      ]);
    }
  }
  function NewSupport() {
    setSupportNumber((prev) => prev + 1);
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
        supNbr: supportNumber,
      },
      ...prev,
    ]);
  }

  return (
    <div className="md:px-8 sm:px-4 px-3">
      <div className="flex md:flex-row flex-col md:gap-6 gap-4 md:py-8 py-4 md:h-auto h-screen">
        <section className="md:max-w-sm w-full flex flex-col md:gap-4 gap-2">
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
        <section className="bg-neutral-100 flex-1 shadow-md md:py-4 md:px-4 px-2 py-3 md:max-h-96 overflow-hidden rounded-lg">
          <div className="px-4">
            <Add_new_support NewSupport={NewSupport} disable={disable} />
            <Remove_All RemoveAll={RemoveAll} />
          </div>

          <div className="px-3 sm:px-4 md:px-6 scroll-smooth h-full">
            {res.length === 0 ? (
              <div className="text-center md:text-lg text-base font-medium opacity-25 text-neutral-800 select-none ">
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
    </div>
  );
}

"use client";
import { useState } from "react";
import { RiClipboardLine } from "react-icons/ri";

export default function Result({ result, CopieText }) {
  const [msg, setMsg] = useState("Copie!");
  function copieMessage(line) {
    setMsg("Copied!");
    setTimeout(() => {
      setMsg("Copie!");
    }, 1200);
    CopieText(line);
  }
  return (
    <div className="border-b py-4">
      <div className="flex items-center gap-2">
        <div className="text-orange-600 font-semibold">Line 1: </div>
        <div className="flex items-center gap-0 w-fit">
          <p>{result.line1}</p>
          <div className="tooltip" data-tip={msg}>
            <button
              className="btn btn-square btn-xs btn-ghost"
              onClick={() => copieMessage(result.line1)}
            >
              <RiClipboardLine size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="text-orange-600 font-semibold">Line 2: </div>
        <div className="flex items-center gap-0 w-fit">
          <p>{result.line2}</p>
          <div className="tooltip" data-tip={msg}>
            <button
              className="btn btn-square btn-xs btn-ghost"
              onClick={() => copieMessage(result.line2)}
            >
              <RiClipboardLine size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

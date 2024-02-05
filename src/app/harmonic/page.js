"use client";
import { useRef, useState } from "react";
import { harmonicData } from "./harmonicData";
export default function Harmonic() {
  const B_valueField = useRef();
  const C_valueField = useRef();
  const [harmonicPattern, setHarmonicPattern] = useState([]);
  const [patterNotFound, setPatterNotFound] = useState("Empty");
  function SearchPattern() {
    const B_userInput = Number(B_valueField.current.value);
    const C_userInput = Number(C_valueField.current.value);

    let pattern = harmonicData.filter((p) => {
      if (
        p.B_corrention.start <= B_userInput &&
        p.B_corrention.end >= B_userInput &&
        p.C_corrention.start <= C_userInput &&
        p.C_corrention.end >= C_userInput
      ) {
        return p;
      }
    });
    console.log(pattern);
    if (pattern.length === 0) {
      setPatterNotFound(() => "Pattern not found!");
      setHarmonicPattern([]);
    } else {
      setHarmonicPattern(pattern);
    }
  }
  return (
    <div>
      <div className="text-center py-3 md:py-5">
        <h1 className="text-2xl font-medium">Harmonic</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:py-4 py-2">
        <section className="flex flex-col gap-3 md:gap-5 max-w-md w-full">
          <div>
            <span className="label-text -mb-2">Enter B correction: </span>
            <input
              type="number"
              required
              min={0}
              ref={B_valueField}
              placeholder="Type B value"
              className="input input-md input-bordered w-full shadow-sm"
            />
          </div>
          <div>
            <span className="label-text -mb-2">Enter C correction: </span>
            <input
              required
              type="number"
              min={0}
              ref={C_valueField}
              placeholder="Type C value"
              className="input input-md input-bordered w-full shadow-sm"
            />
          </div>
          <button
            onClick={SearchPattern}
            className="btn w-full btn-neutral text-lg shadow-sm btn-md"
          >
            Go
          </button>
        </section>
        <section className="flex-1 grid md:grid-cols-2 grid-cols-1 place-content-center md:gap-4 gap-2 md:px-8 sm:px-4 px-2">
          {harmonicPattern.length <= 0 ? (
            <div className="md:py-4 py-14 col-span-full text-center opacity-25 font-medium md:text-xl text-lg">
              {patterNotFound}
            </div>
          ) : (
            harmonicPattern.map((p, id) => (
              <div
                key={id}
                className="md:p-4 p-2 border rounded-md shadow-md flex items-center justify-center flex-col"
              >
                <p className="text-2xl font-medium underline mb-1">
                  {" "}
                  {p.title}{" "}
                </p>
                <div className="">
                  <p className="font-medium text-orange-600">- PRZ zone: </p>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Fibo</th>
                          <th>Draw</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{p.PRZ_zone.fibonacci}</td>
                          <td>{p.PRZ_zone.draw}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* //! B correction */}

                  <div className="font-medium mt-2">
                    <p className="text-orange-600">- B correction: </p>
                    <p className="ml-4">
                      {p.B_corrention.start} - {p.B_corrention.end}
                    </p>
                  </div>
                  {/* //! C correction */}

                  <div className="font-medium mt-2">
                    <p className="text-orange-600">- C correction: </p>
                    <p className="ml-4">
                      {p.C_corrention.start} - {p.C_corrention.end}
                    </p>
                  </div>
                  {/* //! D correction */}
                  <div className="font-medium mt-2">
                    <p className="text-orange-600">- D correction: </p>
                    <ol className="ml-4">
                      {p.D_corrention.map((corr, id) => (
                        <li key={id}>{corr}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

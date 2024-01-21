export default function Form({
  inputFieldFactor2,
  CalculHandler,
  disable,
  inputField,
  inputFieldFactor1,
}) {
  return (
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
        onClick={CalculHandler}
        disabled={!disable}
        className="btn w-full btn-outline text-lg shadow-sm md:btn-md btn-sm"
      >
        Go
      </button>
    </div>
  );
}

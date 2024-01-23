import { FaPlus } from "react-icons/fa6";

export default function Add_new_support({ NewLine, disable }) {
  return (
    <button
      className="btn btn-sm btn-info text-neutral-100 shadow-sm"
      onClick={NewLine}
      disabled={disable}
    >
      <span>Add Support</span>

      <FaPlus />
    </button>
  );
}

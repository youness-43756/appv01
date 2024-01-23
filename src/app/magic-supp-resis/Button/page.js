import { FaTrash } from "react-icons/fa6";

export default function Remove_All({ RemoveAll }) {
  return (
    <button
      className="btn btn-sm btn-error text-white float-right shadow-sm"
      onClick={RemoveAll}
    >
      Remove All <FaTrash />
    </button>
  );
}

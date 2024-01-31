"use client";

import { FaPlus } from "react-icons/fa6";

export default function Add_new_support({ NewSupport, disable }) {
  return (
    <button
      className="btn btn-sm btn-info text-neutral-100 shadow-sm"
      onClick={NewSupport}
      disabled={disable}
    >
      <span>Add Support</span>

      <FaPlus />
    </button>
  );
}

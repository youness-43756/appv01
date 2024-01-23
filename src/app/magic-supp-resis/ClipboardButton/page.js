import { RiClipboardLine } from "react-icons/ri";

export default function Clipboard_button({ msg, text, CopieText }) {
  return (
    <div className="tooltip" data-tip={msg}>
      <button
        className="btn btn-square btn-xs btn-ghost"
        onClick={() => CopieText(text)}
      >
        <RiClipboardLine size={20} />
      </button>
    </div>
  );
}

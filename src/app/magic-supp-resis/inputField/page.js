export default function Input_Field({
  inputRef,
  inputType,
  inputClassName,
  inputPlaceHolder,
}) {
  return (
    <input
      min={0}
      required
      ref={inputRef}
      type={inputType}
      placeholder={inputPlaceHolder}
      className={inputClassName}
    />
  );
}

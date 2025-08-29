export type InputWithHelperProps = {
  label: string;
  helper?: string;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
};

export default function InputWithHelper({
  label,
  helper = "",
  placeholder,
  value,
  onChange,
}: InputWithHelperProps) {
  return (
    <div className=" flex flex-col gap-2 z-10000 w-full">
      <div className="text-neutral-100 font-normal text-base px-4">{label}</div>
      <div
        className="py-3 px-4 rounded-full min-w-3xs w-full
    border border-neutral-300 bg-neutral-700 placeholder-neutral-200 text-neutral-100 font-normal
    active:border-primary-500"
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className="appearance-none  outline-none  p-0 m-0 shadow-none focus:ring-0
        text-neutral-100 font-light w-full bg-transparent "
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="px-4 text-neutral-200 text-sm font-light">{helper}</div>
    </div>
  );
}

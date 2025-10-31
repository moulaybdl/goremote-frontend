
type InputField1Props = {
  className?: string;
}

export default function InputField1({ className = "min-w-96"}: InputField1Props) {
  return (
    <input
      type="text"
      className={`m-0 p-0 outline-none  shadow-none appearance-none box-border px-6
    h-14  w-full  rounded-[10px] bg-neutral-700 border-neutral-400 text-neutral-200 border font-lexend-normal
     focus:border-2 ${className}`}
      placeholder="Enter your email here"
    ></input>
  );
}

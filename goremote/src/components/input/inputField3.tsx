export default function InputField3() {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-lexend-medium text-sm text-secondary">Label</span>
      <input
        type="text"
        className="m-0 p-0 outline-none shadow-none appearance-none box-border px-6
      h-11 min-w-56 w-full rounded-md border border-subtle font-lexend-medium text-secondary 
      focus:border-glow focus:border"
        placeholder="Enter your text here"
      />
      <span className="font-lexend-normal text-sm text-secondary">
        Helper text
      </span>
    </div>
  );
}

import RadioCircle from "./radioCircle";

type radioQuestionProps = {
  option: string;
  isRTL: boolean;
};

export default function RadioQuestion({ option, isRTL }: radioQuestionProps) {
  return (
    <div
      className="px-9 py-5 flex items-center gap-3 bg-neutral-600 w-full max-w-3xl hover:border-l-2 rounded-2xl
       hover:border-[#9D4EDD]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* <CheckBox isChecked={false} /> */}
      <RadioCircle checked={false} />
      <span className="font-normal text-base text-neutral-100">{option}</span>
    </div>
  );
}

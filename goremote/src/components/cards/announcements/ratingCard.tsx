import LearnMoreButton from "@/components/buttons/LearnMoreButton";
import { Star } from "lucide-react";

export default function RatingCard() {
  return (
    <div className="w-96 h-fit flex flex-col gap-4 rounded-3xl bg-surface-dark border border-[var(--color-link)} p-6">
      <div className="flex flex-col gap-2">
        <span className="text-font-medium text-base text-white">
          Expected Delivery time:
        </span>
        <span className="text-font-medium text-base text-secondary">24H</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-font-medium text-base text-white">
          Average response time:
        </span>
        <span className="text-font-medium text-base text-secondary">12H</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-font-medium text-base text-white">
          Average rating:
        </span>
        <div className="flex flex-row gap-2">
          <span className="text-font-medium text-base text-secondary">4.3</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_520_1959)">
              <path
                d="M19.9479 7.67246C19.8169 7.26748 19.4577 6.97984 19.0328 6.94154L13.2602 6.41739L10.9776 1.07469C10.8093 0.683143 10.426 0.429688 10.0001 0.429688C9.57422 0.429688 9.19091 0.683143 9.0226 1.07561L6.73998 6.41739L0.966514 6.94154C0.542309 6.98076 0.184023 7.26748 0.0523365 7.67246C-0.0793503 8.07744 0.0422654 8.52163 0.363166 8.80164L4.72653 12.6283L3.43988 18.2961C3.34573 18.7128 3.50747 19.1435 3.85325 19.3935C4.0391 19.5278 4.25655 19.5961 4.47582 19.5961C4.66488 19.5961 4.85242 19.5452 5.02073 19.4445L10.0001 16.4685L14.9776 19.4445C15.3419 19.6636 15.801 19.6436 16.146 19.3935C16.492 19.1428 16.6536 18.7119 16.5594 18.2961L15.2728 12.6283L19.6361 8.8024C19.957 8.52163 20.0796 8.0782 19.9479 7.67246Z"
                fill="#FFC107"
              />
            </g>
            <defs>
              <clipPath id="clip0_520_1959">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <LearnMoreButton title={"Contact now"} />
      </div>
    </div>
  );
}

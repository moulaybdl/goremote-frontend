export default function Navbar() {
  return (
    <div className="flex justify-end p-4">
      <div className="px-7 self-end flex gap-4">
        {/* notification */}
        <div
          className="w-10 h-10 aspect-square flex justify-center items-center text-neutral-200 rounded-[6px] bg-neutral-600 border border-neutral-400
        hover:bg-[#212529] cursor-pointer
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.3368 13.8889H16.2257L15.133 12.7962C14.8366 12.4998 14.6701 12.0979 14.6701 11.6788V9.22223C14.6701 7.19033 13.3715 5.46174 11.559 4.8211V4.55556C11.559 3.69645 10.8626 3 10.0035 3C9.14436 3 8.44792 3.69645 8.44792 4.55556V4.8211C6.6354 5.46174 5.33681 7.19033 5.33681 9.22223V11.6788C5.33681 12.0979 5.17032 12.4998 4.87398 12.7962L3.78125 13.8889H7.67014M12.3368 13.8889V14.6667C12.3368 15.9553 11.2921 17 10.0035 17C8.71481 17 7.67014 15.9553 7.67014 14.6667V13.8889M12.3368 13.8889H7.67014"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* messages */}
        <div
          className="w-10 h-10 aspect-square flex justify-center items-center rounded-[6px] bg-neutral-600 border text-neutral-200 border-neutral-400
        hover:bg-[#212529]  cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.875 7.09253C17.6117 7.32957 18.125 8.03267 18.125 8.84018V12.4115C18.125 13.3587 17.4188 14.1619 16.4748 14.2389C16.1923 14.262 15.9091 14.2821 15.625 14.2994V16.875L13.125 14.375C11.9969 14.375 10.8797 14.329 9.77519 14.2388C9.5266 14.2186 9.2945 14.1479 9.08745 14.0375M16.875 7.09253C16.7488 7.05193 16.6161 7.025 16.4783 7.01356C15.3727 6.9218 14.2543 6.875 13.125 6.875C11.9957 6.875 10.8773 6.9218 9.77174 7.01356C8.82916 7.09179 8.125 7.89436 8.125 8.84018V12.4114C8.125 13.1092 8.50822 13.7288 9.08745 14.0375M16.875 7.09253V5.53109C16.875 4.17991 15.9152 3.00887 14.5753 2.83492C12.8732 2.61396 11.1375 2.5 9.37524 2.5C7.61278 2.5 5.87694 2.61399 4.1747 2.83499C2.83477 3.00895 1.875 4.17998 1.875 5.53115V10.7189C1.875 12.07 2.83478 13.2411 4.1747 13.415C4.65551 13.4774 5.13899 13.5313 5.625 13.5765V17.5L9.08745 14.0375"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* profile card */}
        <div
          className="min-w-36 px-2 pr-5 h-10 w-full rounded-[6px] bg-neutral-600 border border-neutral-400
        flex flex-row items-center gap-2
        "
        >
          {/* avatar */}
          <div className="w-7 h-7 aspect-square rounded-full bg-neutral-300"></div>
          {/* name */}
          <div className="flex flex-col">
            <div className="font-normal text-neutral-100 text-xs">
              Moulay Bouabdelli
            </div>
            <div className="font-light text-neutral-200 text-xs">
              Freelancer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

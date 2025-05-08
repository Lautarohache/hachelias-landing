import Image from "next/image";
import React from "react";
import Link from "next/link";


interface CardProps {
  key?: string;
  img: string; // Cambiado de img a srcImg
  title: string;
  hrefCta: string; // Cambiado de hrefCTA a hrefCta
}

export const Card: React.FC<CardProps> = ({ img, title, hrefCta }) => {
  return (
    <Link href={hrefCta} className=" hover:z-40">
    <article className="flex flex-col z-index5 border  border-[#B4B4B4]  bg-white h-full  w-full card cursor-pointer">
      <Image
        className="w-auto h-auto"
        height={300}
        width={300}
        alt={title}
        src={img}
      />
      <div className="flex  w-full px-3 py-3 gap-4 justify-between">
        <div className="w-3/4">
          <h4 className=" text-[#F49920] font-outfit   text-xs font-black uppercase tracking-[4.42px]">
            {title}
          </h4>

        </div>

        <div className="w-1/4">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.86161 9.38845C6.96129 9.48812 7.08864 9.53506 7.215 9.53506C7.34136 9.53506 7.46871 9.48812 7.56839 9.38845L10.6034 6.35345C10.7972 6.15963 10.7972 5.84049 10.6034 5.64667L7.56839 2.61167C7.37457 2.41785 7.05542 2.41785 6.86161 2.61167C6.66779 2.80549 6.66779 3.12463 6.86161 3.31845L9.54322 6.00006L6.86161 8.68167C6.66779 8.87549 6.66779 9.19463 6.86161 9.38845Z"
                  fill="#F49920"
                  stroke="#F49920"
                  strokeWidth="0.25"
                />
                <path
                  d="M1.75 6.5H10.165C10.439 6.5 10.665 6.27404 10.665 6C10.665 5.72596 10.439 5.5 10.165 5.5H1.75C1.47596 5.5 1.25 5.72596 1.25 6C1.25 6.27404 1.47596 6.5 1.75 6.5Z"
                  fill="#F49920"
                  stroke="#F49920"
                  strokeWidth="0.25"
                />
              </svg>
        </div>
      </div>
    </article>
    </Link>
  );
};

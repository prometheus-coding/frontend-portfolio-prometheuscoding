import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string;
  sectionHeight?: string;
  flexCol?: string; // punto e virgola baby
}

const Section = ({ children, bgColor, sectionHeight, flexCol }: Props) => {
  return (
    <div
      className={`w-full flex justify-center ${flexCol} ${bgColor} ${sectionHeight}`}
    >
      {children}
    </div>
  );
};

export default Section;

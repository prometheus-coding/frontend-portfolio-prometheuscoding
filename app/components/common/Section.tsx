import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string;
  sectionHeight?: string;
  flexCol?: string;
  backgroundImage?: string; // Percorso dell'immagine di sfondo
}

const Section = ({
  children,
  bgColor,
  sectionHeight,
  flexCol,
  backgroundImage,
}: Props) => {
  return (
    <div
      className={`w-full flex justify-center items-center ${flexCol} ${bgColor} ${sectionHeight}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Section;

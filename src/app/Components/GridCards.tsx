import React from "react";
import { Evento } from "../constants/constants";
import HoverArticle from "./HoverArticle";
import Wrapper from "./Wrapper/Wrapper";

interface GridCardsProps {
  eventos: Evento[];
}

const GridCards: React.FC<GridCardsProps> = ({eventos}) => {
 
  return (
    <section className="flex items-start w-full mb-10">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-4 w-full">
          {eventos.map((item) => (
            <div className="flex-grow " key={item.id}>
              <HoverArticle imageSrc={item.imageSrc} text={item.text} videoSrc={item.videoSrc} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default GridCards;

import React from "react";
import Image from "next/image";
import Title from "./Title";
const Clients = () => {
  return (
    <section className="bg-gray-100 text-white pt-8 pb-4 w-full overflow-hidden h-96">
      <div className="flex justify-center my-10 px-4">
        <Title h3Text="Confían en" spanText=" nosotros" inline={true} />
      </div>
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src="/brands/Love.png" width={200} height={150} alt="Love" />
          </li>
          <li>
            <Image
              src="/brands/SMC.png"
              width={200}
              height={150}
              alt="Love"
            />
          </li>
          <li>
            <Image src="/brands/Tregar.png" width={200} height={150} alt="Love" />
          </li>
          <li>
            <Image
              src="/brands/Move.png"
              width={200}
              height={150}
              alt="Love"
            />
          </li>
          <li>
            <Image
              src="/brands/telefe.png"
              width={200}
              height={150}
              alt="Love"
            />
          </li>
          <li>
            <Image src="/brands/Polaris.png" width={200} height={150} alt="Love" />
          </li>
          <li> <Image
              src="/brands/Movie.png"
              width={200}
              height={150}
              alt="Love"
            /></li>
          <li>
          <Image src="/brands/Picado.png" width={200} height={150} alt="Love" />
          </li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image src="/brands/Love.png" width={200} height={150} alt="Love" />
          </li>
          <li>
            <Image
              src="/brands/Markova.png"
              width={200}
              height={150}
              alt="Love"
            />
          </li>
          <li>
            <Image src="/brands/patagonia.png" width={200} height={150} alt="Love" />
          </li>
          <li>
            <Image
              src="/brands/four.png"
              width={200}
              height={150}
              alt="Love"
            />
          </li>
          <li>
            <Image
              src="/brands/Chango.png"
              width={200}
              height={150}
              alt="Love"
            />
          </li>
          <li>
            <Image src="/brands/Dexter.png" width={200} height={150} alt="Love" />
          </li>
          <li> <Image
              src="/brands/KALA.png"
              width={200}
              height={150}
              alt="Love"
            /></li>
          <li>
          <Image src="/brands/Skorpios.png" width={200} height={150} alt="Love" />
          </li>
        </ul>
      
      </div>
    </section>
  );
};

export default Clients;

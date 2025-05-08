import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import Logo from "./Icons/Logo";
import Link from "next/link";


const Footer = () => {
  return (
    //lg:px-20 lg:py-20 sm:py-6 sm:px-7 py-5 px-20
    <footer >
      <div className="bg-black  px-8 lg:px-20 lg:py-20 sm:py-6  pt-20 py-5   sm:px-7   ">
          <div className=" flex flex-col lg:flex-row  flex-wrap items-start   justify-between ">
            <div className="pb-20">
              <Logo width={108} height={151} />
            </div>

            <div className="flex flex-col gap-4">
              <Link className="lg:px-8 text-white font-outfit text-2xl font-medium leading-normal" href="#">
                ¿Qué hacemos?
              </Link>
              <Link className="lg:px-8 text-white font-outfit text-2xl font-medium leading-normal" href="#">
                ¿Quiénes somos?
              </Link>
              <Link className="lg:px-8 text-white font-outfit text-2xl font-medium leading-normal" href="#">
                Contactanos
              </Link>
            </div>

            <div className="flex py-8 gap-10">
              <Instagram />
              <Linkedin />
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;

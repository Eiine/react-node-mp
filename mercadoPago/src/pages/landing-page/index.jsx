import { Link } from "react-router-dom";
import headerSmall from "../../assets/hero-section.png";
import brand from "../../assets/brand.svg";

import { Card } from "../../components/landing/Card";
import { cardsData } from "./cardsData";

const LandingPage = () => {
  return (
    <div className="container mx-auto min-w-[340px] max-w-[1440px]">
      <header className="max-auto">
        <nav className="flex justify-between px-3 items-center py-1">
          <img src={brand} alt="brand" />
          <Link
            to={"/login"}
            className="font-semibold  text-sm rounded bg-[#AACCFF] text-[#10224D] p-2"
          >
            Ingresá
          </Link>
        </nav>
        <img src={headerSmall} alt="img" className="w-full" />
        <h1>
          <p className="text-[#6F0B19] font-bold text-[28px] px-4 text-center leading-[34.14px]	mt-2">
            DE AHORA EN ADELANTE, HACÉS MÁS CON TU DINERO
          </p>
        </h1>
      </header>
      <section className="mx-auto px-4">
        <div className="mb-3 mt-3 flex justify-center">
          <Link
            className="rounded-lg py-2 bg-[#10224D] text-white w-full inline-block text-lg text-center font-medium max-w-[400px] "
            to={"/register"}
          >
            ¡Únete Ahora!
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-2">
          {cardsData.map(({ img, text, title }, i) => (
            <Card key={i} img={img} title={title} text={text} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

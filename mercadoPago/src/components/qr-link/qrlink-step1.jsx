import { useState } from "react";

const QrLinkStep1 = ({ onNext, setDataForm }) => {
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);

  const handleChange = (e) => {
    setDataForm(e.target.value);
    if (e.target.value > 0) {
      setBotonDeshabilitado("");
    }
  };
  return (
    <section className="mt-6">
      <form className="flex flex-col items-center">
        <div className="h-[184px] w-[328px] bg-white rounded-[10px] shadow-cardShadow mb-4 pb-8 flex flex-col items-center justify-between">
          <div className="h-[72px] w-full rounded-t-[10px] border-b-[1px] flex items-center justify-center">
            <p className="font-semibold text-lg leading-[22px]">
              ¿Cuánto querés ingresar?
            </p>
          </div>
          <div className="">
            <input
              className="font-semibold text-[40px] text-center w-[300px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="$0"
              onChange={handleChange}
              type="number"
            />
          </div>
        </div>
        <button
          onClick={onNext}
          disabled={botonDeshabilitado}
          type="button"
          className="bg-[#10224D] rounded-[10px] h-[48px] w-[328px] text-white font-semibold text-base leading-5 disabled:bg-[#DAD9E3] disabled:text-[#97969C] "
        >
          Continuar
        </button>
      </form>
    </section>
  );
};

export default QrLinkStep1;

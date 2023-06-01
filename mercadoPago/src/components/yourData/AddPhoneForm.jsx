import { useContext, useState } from "react";
import { format } from "../../helpers/formatPhoneFunctions";
import { DataContext } from "../../context/DataContext";

// eslint-disable-next-line react/prop-types
export const AddPhoneModal = ({ error, handleModal }) => {
  const { phone } = useContext(DataContext);

  const [phoneNum, setphoneNum] = useState(phone || "");

  return (
    <>
      <label className=" text-xs font-medium" htmlFor="number">
        Teléfono
      </label>
      <input
        type="text"
        className="  appearance-textfield  p-2 my-4 mt-2 border-[#63c5e9] border rounded-lg w-full "
        name="phone"
        id="number"
        value={phoneNum}
        minLength="13"
        maxLength="16"
        onChange={(e) => setphoneNum(format(e.target.value))}
      />
      <p className=" text-xs">Código de area + N°. Ejemplo: 011 2345-678</p>

      <div className="text-[#9f3c3c] h-[16px] mb-2 text-sm translate-y-[-5px]">
        {error}
      </div>
      <div className="flex">
        <button
          type="submit"
          className="font-semibold w-[50%] bg-[#10224D] text-white p-2 rounded-lg"
        >
          Guardar
        </button>

        <button
          type="submit"
          onClick={() => handleModal(false)}
          className=" font-semibold w-[50%] text-[#10224D] p-2 rounded-lg"
        >
          Cancelar
        </button>
      </div>
    </>
  );
};

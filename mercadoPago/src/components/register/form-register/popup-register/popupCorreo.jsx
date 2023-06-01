import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const popupCorreo = ({ handleClose }) => {
  return (
    <div className="w-[328px] bg-[#FFC3B7] absolute text-[#6F0B19] flex flex-col justify-center items-center pt-2 pb-6 rounded-[10px] shadow-cardShadow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <div className="h-[56px] w-[280px] flex items-center justify-between border-b-2 border-[#6F0B19]">
      <p className=" font-semibold text-lg leading-[22px]">
        Correro electronico
      </p>
      <div
        onClick={handleClose}
        className="w-10 h-10 rounded-[10px] bg-[#6F0B19] flex justify-center items-center"
      >
        <AiOutlineClose className="w-8 h-8 text-[#FFC3B7]" />
      </div>
    </div>
    <ul className="w-[280px] list-disc pl-6">
      <li>
      Por favor, ingresa una dirección de correo electrónico válida.
      </li>
      <li>
      Asegúrate de que el correo electrónico esté en el formato correcto (por ejemplo, ejemplo@ejemplo.com).
      </li>
      <li>
      Verifica que la dirección de correo electrónico esté escrita correctamente.
      </li>
    
    </ul>
  </div>
  )
}

export default popupCorreo
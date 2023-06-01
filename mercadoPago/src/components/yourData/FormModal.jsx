/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchUser } from "../../../services/patchUser";
import { updateData } from "../../features/auth/authSlice";
import { renameInputs } from "../../helpers/renameInputs";
import { PasswordInputs } from "./PasswordInputs";
import { transformPhoneNumber } from "../../helpers/formatPhoneFunctions";
import { AddPhoneModal } from "./AddPhoneForm";
import { DataContext } from "../../context/DataContext";
import { baseUrl } from "../../../axios/axiosInstance";

// eslint-disable-next-line react/prop-types
export const FormModal = ({ placeholder, type, handleModal }) => {
  const { user } = useSelector((state) => state.auth);

  const { handleLoading } = useContext(DataContext);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const noPassType = type !== "Contraseña";

  const { token, update } = user;

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = "";
    if (noPassType) {
      const { value } = e.target[0];
      data = value;

      if (value.trim().length <= 2) {
        return setError("Pocos caracteres");
      } else {
        setError(false);
      }
    } else {
      const [actual, nueva, confirmar] = e.target;
      nueva.value !== confirmar.value
        ? setError("Las contraseñas deben ser iguales")
        : setError(false);
      data = nueva.value;
      if (error === false) {
        //abrimos loading
        handleLoading(true);

        return patchUser(
          update._id,
          {
            actualPass: actual.value,
            newPass: data,
          },
          token.token,
          "updatepass"
        )
          .then(({ data }) => {
            dispatch(updateData(data.user));
            handleModal(false);
          })
          .catch((err) =>
            setError("ERROR. Verifica que el password actual sea correcto.")
          )
          .finally((res) => handleLoading(false));
      }
    }

    if (error === false) {
      //Renombramos los nombres para que figuren como en el back
      let name = renameInputs(type);

      // Le quitamos el formateo al número para que sea leído por el back
      if (name == "phone") data = transformPhoneNumber(data);
      const values = {
        [name]: data,
      };

      //cerramos form
      handleModal(false);
      //abrimos loading
      handleLoading(true);

      patchUser(update._id, values, token.token)
        .then(({ data }) => {
          dispatch(updateData(data.user));
        })
        .catch((err) => console.log(err))
        .finally((res) => handleLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {noPassType && type !== "phone" && type !== "Agregar teléfono" ? (
        <input
          type={type !== "Correo electrónico" ? "text" : "email"}
          className="p-2 my-4 border-[#63c5e9] border rounded-lg w-full "
          placeholder={placeholder}
        />
      ) : (
        !noPassType && <PasswordInputs />
      )}

      {type == "Agregar teléfono" && (
        <AddPhoneModal error={error} handleModal={handleModal} />
      )}

      {type != "Agregar teléfono" && (
        <>
          <div className="text-[#9f3c3c] h-min h-[16px] mb-2 text-sm translate-y-[-5px]">
            {error}
          </div>
          <button
            type="submit"
            className="font-semibold w-full bg-[#10224D] text-white p-2 rounded-lg"
          >
            Confirmar cambios
          </button>
        </>
      )}
    </form>
  );
};

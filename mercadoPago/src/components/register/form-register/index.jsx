import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { useState } from "react";
import useLogin from "../../../hooks/useLogin";

const FormRegister = ({ handleClick }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    // fullname: "",
    dni: "",
    // phone: "",
    // address: "",
  });

  const { error, isLoading, postData } = useLogin({
    onSuccess: (data) => {
      navigate("/login");
    },
    onError: (error) => {
      console.log(error);
      console.log("Error en el servidor");
    },
  });

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataForm.password !== confirmPassword) {
      console.log("Los password son diferente");
    }
    postData("/auth/user/register", dataForm);
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-2 "
      onSubmit={handleSubmit}
    >
      <div className="w-[328px] h-[328px] bg-white rounded-[10px] shadow-cardShadow flex p-8 pl-4">
        <div className="">
          <AiOutlineInfoCircle
            onClick={handleClick}
            className="w-6 h-6 mt-12     text-[#6F0B19]"
          />
          <AiOutlineInfoCircle
            onClick={handleClick}
            className="w-6 h-6 mt-8    text-[#6F0B19]"
          />
          <AiOutlineInfoCircle
            onClick={handleClick}
            className="w-6 h-6 mt-8    text-[#6F0B19]"
          />
          <AiOutlineInfoCircle
            onClick={handleClick}
            className="w-6 h-6 mt-8    text-[#6F0B19]"
          />
        </div>
        <div className="flex flex-col mt-2 ">
          <div className="">
            <div className="group ">
              <label
                className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                className="font-medium text-base leading-[16px] placeholder:text-black h-[48px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
                type="text"
                onChange={handleChange}
                placeholder="Correo electrónico"
                name="email"
              />
            </div>
          </div>

          <div className="group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="dni"
            >
              DNI
            </label>
            <input
              id="dni"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type="text"
              onChange={handleChange}
              placeholder="DNI"
              name="dni"
            />
          </div>
          <div className="relative group">
            <label
              className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black group-hover:border-[#39528D] placeholder:focus-visible:invisible"
              type={showPassword2 ? "text" : "password"}
              onChange={handleChange}
              placeholder="contraseña"
              name="password"
            />
            {showPassword2 ? (
              <AiOutlineEye
                onClick={toggleShowPassword2}
                className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={toggleShowPassword2}
                className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
              />
            )}
          </div>
          <div className="relative flex group">
            <div>
              <label
                className="font-semibold text-xs leading-[15px] pl-2 invisible group-hover:visible group-hover:text-[#39528D]"
                htmlFor="repassword"
              >
                Confirmar contraseña
              </label>
              <input
                id="repassword"
                className="font-medium text-base leading-[16px] placeholder:text-black h-[32px] w-[272px] pl-2 focus:outline-none border-b-2 border-black block group-hover:border-[#39528D] placeholder:focus-visible:invisible"
                type={showPassword ? "text" : "password"}
                placeholder="confirmar contraseña"
                onChange={handleConfirmPasswordChange}
                name="repassword"
              />
              {showPassword ? (
                <AiOutlineEye
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={toggleShowPassword}
                  className="absolute w-8 h-8 bottom-2 right-2 group-hover:text-[#39528D]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-lg font-semibold leading-[22px] text-white w-[328px] h-[48px] bg-[#10224D] rounded-[10px]"
      >
        Registrate
      </button>
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm font-semibold leading-[17px]">
          ¿ya tenes cuenta?
        </p>
        <Link to="/login">
          <p className="text-[#6F0B19] text-sm leading-[17px] font-semibold">
            ACCEDER
          </p>
        </Link>
      </div>
    </form>
  );
};

export default FormRegister;

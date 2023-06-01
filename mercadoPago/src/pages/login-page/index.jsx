import TopbarLogin from "../../components/login/topbar-login";
import FormLogin from "../../components/login/form-login";
import { useState } from "react";
import PopupLogin from "../../components/login/popup-login";
import TitleLogin from "../../components/login/Title-login";
import { login } from "../../features/auth/authSlice";
import useLogin from "../../hooks/useLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const {
    error: loginError,
    isLoading,
    postData,
  } = useLogin({
    onSuccess: (data) => {
      dispatch(login(data));
      navigate("/home");
    },
    onError: (_error) => {
      setError("Email o Contraseña Incorrecta...");
    },
  });
  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogin = (data) => {
    postData("/auth/user/login", data);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="bg-[#ECEBF6] w-full h-screen flex flex-col items-center">
          <TopbarLogin />
          <div className="relative">
            {isOpen && <PopupLogin handleClose={handleClose} />}
            <TitleLogin />
            {!isLoading && (
              <FormLogin
                handleClick={handleClick}
                onLogin={handleLogin}
                isLoading={isLoading}
                error={error}
              />
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default LoginPage;

import Item from "../../components/ItemProfile/Item";
import Header from "../../components/header/Header";

import Dato from "../../assets/svg/Dato.svg";
import Seguridad from "../../assets/svg/Seguridad.svg";
import Tarjeta from "../../assets/svg/Tarjeta.svg";
import Direction from "../../assets/svg/Directions.svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import copy from "../../utils/copy";
import Layout from "../../components/layout";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [isView, setIsView] = useState(false);

  //Datos que usaré de user
  const alias = user.userLogin.alias;
  const cvu = user.userLogin.cvu;
  const email = user.userLogin.email;

  return (
    <>
      {/* <Header dato={'Tus Datos'} show={'flex'}/> */}
      <Layout>
        <div className="h-28 flex items-center gap-4 bg-colorButton shadow-insetShadow pl-4 pr-[23px]">
          <div>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="64" height="64" rx="32" fill="white" />
              <path
                d="M24.26 38.75C25.52 37.87 26.77 37.195 28.01 36.725C29.25 36.255 30.58 36.02 32 36.02C33.42 36.02 34.755 36.255 36.005 36.725C37.255 37.195 38.51 37.87 39.77 38.75C40.65 37.67 41.275 36.58 41.645 35.48C42.015 34.38 42.2 33.22 42.2 32C42.2 29.1 41.225 26.675 39.275 24.725C37.325 22.775 34.9 21.8 32 21.8C29.1 21.8 26.675 22.775 24.725 24.725C22.775 26.675 21.8 29.1 21.8 32C21.8 33.22 21.99 34.38 22.37 35.48C22.75 36.58 23.38 37.67 24.26 38.75ZM31.9944 32.9C30.8381 32.9 29.865 32.5031 29.075 31.7094C28.285 30.9157 27.89 29.9407 27.89 28.7844C27.89 27.6281 28.2869 26.655 29.0806 25.865C29.8743 25.075 30.8493 24.68 32.0056 24.68C33.1619 24.68 34.135 25.0769 34.925 25.8706C35.715 26.6643 36.11 27.6393 36.11 28.7956C36.11 29.9519 35.7131 30.925 34.9194 31.715C34.1257 32.505 33.1507 32.9 31.9944 32.9ZM32.014 44C30.3647 44 28.81 43.685 27.35 43.055C25.89 42.425 24.615 41.565 23.525 40.475C22.435 39.385 21.575 38.1123 20.945 36.657C20.315 35.2017 20 33.6467 20 31.992C20 30.3373 20.315 28.785 20.945 27.335C21.575 25.885 22.435 24.615 23.525 23.525C24.615 22.435 25.8877 21.575 27.343 20.945C28.7983 20.315 30.3533 20 32.008 20C33.6627 20 35.215 20.315 36.665 20.945C38.115 21.575 39.385 22.435 40.475 23.525C41.565 24.615 42.425 25.8853 43.055 27.336C43.685 28.7866 44 30.3366 44 31.986C44 33.6353 43.685 35.19 43.055 36.65C42.425 38.11 41.565 39.385 40.475 40.475C39.385 41.565 38.1147 42.425 36.664 43.055C35.2134 43.685 33.6634 44 32.014 44ZM32 42.2C33.1 42.2 34.175 42.04 35.225 41.72C36.275 41.4 37.31 40.84 38.33 40.04C37.31 39.32 36.27 38.77 35.21 38.39C34.15 38.01 33.08 37.82 32 37.82C30.92 37.82 29.85 38.01 28.79 38.39C27.73 38.77 26.69 39.32 25.67 40.04C26.69 40.84 27.725 41.4 28.775 41.72C29.825 42.04 30.9 42.2 32 42.2ZM32 31.1C32.68 31.1 33.235 30.885 33.665 30.455C34.095 30.025 34.31 29.47 34.31 28.79C34.31 28.11 34.095 27.555 33.665 27.125C33.235 26.695 32.68 26.48 32 26.48C31.32 26.48 30.765 26.695 30.335 27.125C29.905 27.555 29.69 28.11 29.69 28.79C29.69 29.47 29.905 30.025 30.335 30.455C30.765 30.885 31.32 31.1 32 31.1Z"
                fill="#39528D"
              />
              <rect
                x="5"
                y="5"
                width="54"
                height="54"
                rx="27"
                stroke="#10224D"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="text-white ">
            <h2 className="font-semibold text-lg leading-[21.94px]">{alias}</h2>
            <span className="font-medium text-sm leading-[17.07px]">
              {email}
            </span>
          </div>
        </div>

        <div
          className={`${
            isView ? "rounded-[10px]" : "rounded-t-[10px]"
          } bg-[#AACCFF] h-10 flex items-center justify-between pl-4 pr-6 mt-6 ml-4 mr-4 cursor-pointer`}
          onClick={() => setIsView(!isView)}
        >
          <p className="text-base font-semibold">CVU y Alias</p>
          {isView ? (
            <svg
              className="mr-[22.43px]"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.247355 11.7527C0.0885389 11.5703 0.00619254 11.3586 0.000316349 11.1174C-0.00557749 10.8762 0.0767689 10.6704 0.247355 10.4998L4.72952 6.01763L0.2297 1.51784C0.070884 1.35903 -0.00557749 1.15021 0.000316349 0.891392C0.00619254 0.632592 0.0885389 0.423785 0.247355 0.264969C0.429694 0.0826302 0.63851 -0.00560101 0.873805 0.000275188C1.10908 0.00615138 1.31201 0.0943826 1.4826 0.264969L6.61765 5.40002C6.71176 5.49413 6.77794 5.59118 6.81617 5.69119C6.8544 5.79119 6.87351 5.9 6.87351 6.01763C6.87351 6.13528 6.8544 6.2441 6.81617 6.3441C6.77794 6.44409 6.71176 6.54114 6.61765 6.63527L1.50023 11.7527C1.32966 11.9233 1.12379 12.0056 0.882619 11.9997C0.641448 11.9938 0.429694 11.9115 0.247355 11.7527Z"
                fill="#10224D"
              />
            </svg>
          ) : (
            <svg
              className="mr-[22.43px]"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00009 0.049994C6.13342 0.049994 6.25842 0.070827 6.37509 0.112494C6.49176 0.15416 6.60009 0.224993 6.70009 0.324994L11.3251 4.94999C11.5084 5.13333 11.5959 5.36249 11.5876 5.63749C11.5793 5.91249 11.4834 6.14166 11.3001 6.32499C11.1168 6.50833 10.8834 6.59999 10.6001 6.59999C10.3168 6.59999 10.0834 6.50833 9.90009 6.32499L6.00009 2.42499L2.07509 6.34999C1.89176 6.53333 1.66259 6.62083 1.38759 6.61249C1.11259 6.60416 0.883425 6.50833 0.700091 6.32499C0.516758 6.14166 0.425092 5.90833 0.425092 5.62499C0.425092 5.34166 0.516758 5.10833 0.700091 4.92499L5.30009 0.324994C5.40009 0.224993 5.50842 0.15416 5.62509 0.112494C5.74176 0.070827 5.86676 0.049994 6.00009 0.049994Z"
                fill="#10224D"
              />
            </svg>
          )}
        </div>
        <div
          style={{ display: `${isView ? "none" : "flex"}` }}
          className="flex-col bg-[#AACCFF] h-[120px] ml-4 mr-4 rounded-b-[10px] pl-4 pr-6"
        >
          <div>
            <h2 className="font-semibold text-sm text-colorButton leading-[17.07px] mt-4">
              CVU
            </h2>
            <div className="flex">
              <p className="pr-2 font-semibold leading-[19.5px]">{cvu}</p>
              <button
                className="p-0 bg-transparent border-none"
                onClick={() => copy(cvu)}
              >
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V5C0 4.71667 0.0958333 4.47917 0.2875 4.2875C0.479167 4.09583 0.716667 4 1 4C1.28333 4 1.52083 4.09583 1.7125 4.2875C1.90417 4.47917 2 4.71667 2 5V18H12C12.2833 18 12.5208 18.0958 12.7125 18.2875C12.9042 18.4792 13 18.7167 13 19C13 19.2833 12.9042 19.5208 12.7125 19.7125C12.5208 19.9042 12.2833 20 12 20H2ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H15C15.55 0 16.0208 0.195833 16.4125 0.5875C16.8042 0.979167 17 1.45 17 2V14C17 14.55 16.8042 15.0208 16.4125 15.4125C16.0208 15.8042 15.55 16 15 16H6ZM6 14H15V2H6V14Z"
                    fill="#10224D"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-3">
            <h2 className="font-semibold text-sm text-colorButton leading-[17.07px]">
              Alias
            </h2>
            <div className="flex">
              <p className="pr-2 font-semibold leading-[19.5px]">{alias}</p>
              <button
                className="p-0 bg-transparent border-none"
                onClick={() => copy(alias)}
              >
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V5C0 4.71667 0.0958333 4.47917 0.2875 4.2875C0.479167 4.09583 0.716667 4 1 4C1.28333 4 1.52083 4.09583 1.7125 4.2875C1.90417 4.47917 2 4.71667 2 5V18H12C12.2833 18 12.5208 18.0958 12.7125 18.2875C12.9042 18.4792 13 18.7167 13 19C13 19.2833 12.9042 19.5208 12.7125 19.7125C12.5208 19.9042 12.2833 20 12 20H2ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H15C15.55 0 16.0208 0.195833 16.4125 0.5875C16.8042 0.979167 17 1.45 17 2V14C17 14.55 16.8042 15.0208 16.4125 15.4125C16.0208 15.8042 15.55 16 15 16H6ZM6 14H15V2H6V14Z"
                    fill="#10224D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <Item
            icon={Dato}
            title={"Tus Datos"}
            description={"Datos Validados"}
          />
          <Item
            icon={Seguridad}
            title={"Seguridad"}
            description={"Tenés Configuraciones Pendientes."}
          />
          <Item
            icon={Tarjeta}
            title={"Tarjetas"}
            description={"Tarjetas guardadas en tu cuenta."}
          />
          <Item
            icon={Direction}
            title={"Direcciones"}
            description={"Direcciones guardadas en tu cuenta."}
          />
        </div>
      </Layout>
    </>
  );
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";

const Transfer = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4 justify-center bg-[#ECEBF6] py-[16px] px-4">
          <div className="rounded-lg bg-white shadow-cardShadow  mb-[20px] h-[152px]">
            <h2 className="font-semibold text-lg ml-4  pt-4 mb-6 ">
              Elegí a qué cuenta transferir
            </h2>
            <hr className=" m-auto border-[#33333366]  " />
            <Link to="/transfer/addaccount">
              <div className="flex items-center p-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9953 35.6667C23.6004 35.6667 23.271 35.5336 23.0071 35.2674C22.7432 35.0012 22.6113 34.6713 22.6113 34.2778V25.3889H13.7224C13.3289 25.3889 12.999 25.2553 12.7328 24.9882C12.4666 24.721 12.3335 24.39 12.3335 23.9951C12.3335 23.6002 12.4666 23.2709 12.7328 23.007C12.999 22.7431 13.3289 22.6111 13.7224 22.6111H22.6113V13.7222C22.6113 13.3287 22.7449 12.9989 23.012 12.7326C23.2791 12.4664 23.6101 12.3333 24.005 12.3333C24.3999 12.3333 24.7293 12.4664 24.9932 12.7326C25.2571 12.9989 25.389 13.3287 25.389 13.7222V22.6111H34.278C34.6715 22.6111 35.0013 22.7447 35.2675 23.0118C35.5337 23.279 35.6668 23.61 35.6668 24.0049C35.6668 24.3998 35.5337 24.7292 35.2675 24.9931C35.0013 25.2569 34.6715 25.3889 34.278 25.3889H25.389V34.2778C25.389 34.6713 25.2555 35.0012 24.9883 35.2674C24.7212 35.5336 24.3902 35.6667 23.9953 35.6667Z"
                    fill="#39528D"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#333333"
                    stroke-opacity="0.1"
                  />
                </svg>
                <div className="flex w-full justify-between">
                  <div className="font-medium text-[12px] ml-4  ">
                    <h2 className="">Nueva cuenta</h2>
                    <span className="text-[#33333366]">
                      con CBU, CVU o alias
                    </span>
                  </div>
                </div>
                <svg
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.49471 23.5053C0.177078 23.1407 0.0123851 22.7171 0.000632698 22.2348C-0.011155 21.7525 0.153538 21.3408 0.49471 20.9996L9.45903 12.0353L0.4594 3.03569C0.141768 2.71805 -0.011155 2.30042 0.000632698 1.78278C0.0123851 1.26518 0.177078 0.84757 0.49471 0.529937C0.859387 0.16526 1.27702 -0.011202 1.74761 0.000550377C2.21816 0.0123028 2.62403 0.188765 2.9652 0.529937L13.2353 10.8C13.4235 10.9883 13.5559 11.1824 13.6323 11.3824C13.7088 11.5824 13.747 11.8 13.747 12.0353C13.747 12.2706 13.7088 12.4882 13.6323 12.6882C13.5559 12.8882 13.4235 13.0823 13.2353 13.2705L3.00046 23.5053C2.65932 23.8465 2.24758 24.0112 1.76524 23.9994C1.2829 23.9877 0.859387 23.823 0.49471 23.5053Z"
                    fill="#333333"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex-col  shadow-cardShadow ">
            <div className="bg-white w-full rounded-lg h-[304px] ">
              <h2 className="font-semibold text-lg ml-4  pt-4 mb-6 ">
                Cuentas recientes
              </h2>
              <hr className=" m-auto border-[#33333366]  " />
              <div className="flex justify-center mt-[56px]">
                <svg
                  width="116"
                  height="120"
                  viewBox="0 0 116 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="116"
                    height="120"
                    rx="10"
                    fill="#AACCFF"
                    fill-opacity="0.2"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="114"
                    height="118"
                    rx="9"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <rect
                    x="7"
                    y="10"
                    width="102"
                    height="30"
                    rx="10"
                    fill="white"
                  />
                  <rect
                    x="8"
                    y="11"
                    width="100"
                    height="28"
                    rx="9"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <circle
                    cx="22"
                    cy="23"
                    r="6"
                    fill="#696969"
                    fill-opacity="0.2"
                  />
                  <line
                    x1="36"
                    y1="19"
                    x2="84"
                    y2="19"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="4"
                  />
                  <line
                    x1="36"
                    y1="28"
                    x2="57"
                    y2="28"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <rect
                    x="7"
                    y="48"
                    width="98"
                    height="28"
                    rx="10"
                    fill="white"
                  />
                  <rect
                    x="8"
                    y="49"
                    width="96"
                    height="26"
                    rx="9"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <circle
                    cx="23"
                    cy="61"
                    r="6"
                    fill="#696969"
                    fill-opacity="0.2"
                  />
                  <line
                    x1="37"
                    y1="57"
                    x2="85"
                    y2="57"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="4"
                  />
                  <line
                    x1="37"
                    y1="66"
                    x2="58"
                    y2="66"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <rect
                    x="7"
                    y="84"
                    width="92"
                    height="26"
                    rx="10"
                    fill="white"
                  />
                  <rect
                    x="8"
                    y="85"
                    width="90"
                    height="24"
                    rx="9"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                  <circle
                    cx="22"
                    cy="96"
                    r="6"
                    fill="#696969"
                    fill-opacity="0.2"
                  />
                  <line
                    x1="35"
                    y1="93"
                    x2="83"
                    y2="93"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="4"
                  />
                  <line
                    x1="35"
                    y1="102"
                    x2="56"
                    y2="102"
                    stroke="#696969"
                    stroke-opacity="0.2"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <p className=" p-6 px-8 text-[16px] text-center font-medium leading-4 ">
                Aca verás las cuentas a las que hayas transferido dinero.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Transfer;

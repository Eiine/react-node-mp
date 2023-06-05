import { useState } from "react";
import Layout from "../../../components/layout";
import { useNavigate } from "react-router-dom";

export const AddAccount = () => {
  const [val, setval] = useState("");
  const navigate = useNavigate();

  const isNumeric = (n) => !isNaN(n);

  const handleClick = () => {
    if (val.length > 0) {
      let typeVal = isNumeric(val) ? "cvu" : "alias";

      navigate("/transfer/check", {
        state: {
          data: {
            type: typeVal,
            value: val,
          },
        },
      });
    }
  };

  return (
    <>
      <Layout>
        <div>
          <div className="flex flex-col gap-4 justify-center bg-[#ECEBF6] h-[208px] py-[16px] mt-4 px-4">
            <div className="rounded-lg bg-white shadow-cardShadow  mb-[20px] ">
              <h2 className="font-semibold text-lg ml-4  pt-4 mb-6 ">
                Agrega una cuenta
              </h2>
              <hr className=" m-auto border-[#33333366]  " />
              <div className="flex  pt-4">
                <div className="flex w-full justify-between">
                  <div className="font-medium text-[12px] ml-4  ">
                    <h2 className="">Ingresá el CBU, CVU o alias</h2>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <input
                  type="text"
                  placeholder="Ingresá el CBU, CVU o alias"
                  className="p-2 my-4   border-[#33333366] border rounded-lg w-full "
                  onChange={(e) => setval(e.target.value)}
                  value={val}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              type="submit"
              className=" disabled:bg-[#DAD9E3] disabled:text-[#97969C] w-[328px] font-semibold  bg-[#10224D] text-white p-2 rounded-lg"
            >
              Continuar
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

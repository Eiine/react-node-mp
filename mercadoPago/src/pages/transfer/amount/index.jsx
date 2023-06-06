import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { formatPrice } from "../../../helpers/formatPrice";
import Layout from "../../../components/layout";

export const Amount = () => {
  const { user } = useSelector((state) => state.auth);
  const { state } = useLocation();

  const balance = user?.update?.balance || 0;

  const [inputAmount, setinputAmount] = useState("");

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputAmount > 0 && inputAmount <= balance) {
      const data = state;
      data.amount = inputAmount;

      navigate("/transfer/preview", {
        state: data,
      });
    }
  };
  const condition = inputAmount > 0 && inputAmount <= balance;

  useEffect(() => {
    let width = Number(inputAmount.length) + "ch";
    inputRef.current.style.width = width;
  }, [inputAmount]);

  return (
    <Layout>
      <section className="flex min-w-[340px] flex-col items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="p-4 w-full h-full flex flex-col max-w-[400px]"
        >
          <div className="bg-white py-5 px-4 text-center font-semibold rounded-[10px]">
            <h1 className="pb-5  text-lg">¿Cuanto querés transferir?</h1>
            <hr />
            <div className="w-full flex justify-center items-center">
              <span
                className={`${
                  condition ? "text-black " : "text-[#33333366] "
                } text-2xl`}
              >
                $
              </span>
              <input
                ref={inputRef}
                type="text"
                name="amount"
                placeholder="0"
                inputMode="decimal"
                onChange={(e) => {
                  const { value } = e.target;
                  const valFormat = value.replace(/\D/g, "");

                  setinputAmount(valFormat);
                }}
                value={inputAmount}
                className=" inline-block text-[40px] min-w-[1ch] outline-none"
              />
            </div>
            <p className=" font-medium text-[#33333366]">
              {formatPrice(balance)} disponibles
            </p>
          </div>
          <button
            type="submit"
            className={`${
              condition
                ? "bg-[#10224D] text-white "
                : "bg-[#3333331A] text-[#33333366]"
            } p-2  mt-3 rounded-[10px]`}
            disabled={inputAmount > 0 && inputAmount <= balance ? false : true}
          >
            Continuar
          </button>
        </form>
      </section>
    </Layout>
  );
};

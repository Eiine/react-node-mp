import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineClockCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { formatPrice } from "../../../helpers/formatPrice";
import { baseUrl } from "../../../../axios/axiosInstance";
import { updateAmount } from "../../../features/auth/authSlice";
import Layout from "../../../components/layout";

export const Preview = () => {
  const { user } = useSelector((state) => state.auth);

  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const { state } = useLocation();
  const navigate = useNavigate();

  const { amount, fullname, cvu, alias } = state;

  const handleSubmit = () => {
    setloading(true);
    baseUrl
      .post(
        "/auth/activity/transfer",
        {
          UserAccountId: user.update._id,
          amount: Number(amount),
          description: "Varios",
          type: "pay",
          cvu: cvu,
          alias: alias,
          payment: "string",
        },
        {
          headers: {
            Authorization: user.token.token,
          },
        }
      )
      .then(({ data }) => {
        dispatch(updateAmount({ operation: "resta", value: amount }));
        navigate("/transfer/confirm", {
          state: { value: amount, receptor: fullname },
        });
        /* FALTA DIRECCIONAR A LA VISTA DE CONFIRMACION */
      })
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  };

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center gap-2">
        <div className="w-[328px] h-[368px] shadow-cardShadow rounded-[10px] mt-6">
          <div className="h-[72px] w-full rounded-t-[10px] border-b-[1px] flex items-center justify-center bg-white">
            <p className="font-semibold text-lg leading-[22px]">
              Revisá si está todo bien
            </p>
          </div>
          <div className="py-4 border-b-[1px] pl-8 bg-white gap-2 flex flex-col justify-center">
            <p className="text-[#ADADAD] font-medium text-xs leading-[15px]">
              Vas a transferir
            </p>
            <p className="font-bold text-[28px] ">{formatPrice(amount)}</p>
          </div>
          <div className="py-4 border-b-[1px] pl-8 bg-white gap-2 flex flex-col justify-center">
            <p className="text-[#ADADAD] font-medium text-xs leading-[15px]">
              Para
            </p>
            <p className="font-bold text-[16px] ">{fullname}</p>
            <p className=" font-semibold">WalletPay</p>
            <p className=" text-xs font-medium">
              <span className="text-[#ADADAD]">CVU:</span> {cvu}
            </p>
          </div>
          <div className="h-[88px] bg-[#EBEBEB] flex justify-center items-center gap-[14px] rounded-b-[10px]">
            <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <AiOutlineClockCircle className="w-6 h-6 text-[#39528D]" />
              <span className="h-[10px] w-[10px] bg-[#39528D] rounded-full absolute bottom-0 right-0"></span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-base font-medium leading-5">
                Se transfiere al instante.
              </p>
              <p className="text-base font-medium leading-5">
                Revisala, no es cancelable.
              </p>
            </div>
            <AiOutlineInfoCircle className="w-6 h-6 text-gray-500" />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="bg-[#10224D] rounded-[10px] h-[48px] w-[328px] text-white font-semibold text-base leading-5 mt-4"
        >
          Transferir
        </button>
        <button
          onClick={() => navigate("/transfer")}
          type="button"
          className="bg-[#AACCFF] text-[#10224D] rounded-[10px] h-[48px] w-[328px] font-semibold text-base leading-5 "
        >
          Cancelar transferencia
        </button>
        <ThreeDots
          height="60"
          width="80"
          radius="9"
          color="#39528D"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={loading}
        />
      </section>
    </Layout>
  );
};

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../../axios/axiosInstance";
import { errorAlert } from "./modalError";
import { LoadingModal } from "../../../components/LoadingModal";
import Layout from "../../../components/layout";

export const TransferCheck = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;

  const [loading, setloading] = useState(true);
  const [dataUser, setDataUser] = useState(null);

  const { cvu, dni, fullname } = dataUser ? dataUser : {};

  useEffect(() => {
    if (Object.values(data).length > 1) {
      const { value, type } = data;

      baseUrl
        .get(`/auth/user/check?${type}=${value}`)
        .then(({ data }) => setDataUser(data))
        .catch((err) => {
          console.log(err);
          errorAlert();
          setTimeout(() => {
            navigate("/transfer", { replace: true });
          }, 2500);
        })
        .finally(() => setloading(false));
    }
  }, [data]);

  return (
    <Layout>
      <section className="flex flex-col items-center p-3 h-screen min-w-[320px]">
        {!loading ? (
          <>
            {fullname && (
              <>
                <article className="flex flex-col bg-white pt-5 pb-3 px-4 mt-1 text-sm font-medium text-[#33333366] rounded-lg max-w-[350px]">
                  <h1 className=" text-lg font-semibold text-black pb-2">
                    ¿Esta es la cuenta a la que querés transferir?
                  </h1>
                  <hr />
                  <div className="flex py-3 flex-col gap-2">
                    <h2 className=" text-black text-base">{fullname}</h2>
                    <p>DNI: {dni}</p>
                  </div>
                  <hr />
                  <div className="flex py-3 flex-col gap-2">
                    <p>WALLETPAY</p>
                    <p className="">CVU: {cvu}</p>
                    <p>Cuenta digital</p>
                  </div>
                </article>
                <div className="flex flex-col text-center font-semibold w-full mt-4 gap-1 max-w-[350px]">
                  <Link
                    className="text-white p-2 bg-[#10224D] w-full rounded-lg"
                    to="/transfer/amount"
                    state={dataUser}
                  >
                    Sí, continuar
                  </Link>
                  <Link
                    className="text-[#10224D] bg-[#AACCFF] p-2 rounded-lg"
                    to={-1}
                  >
                    No, volver
                  </Link>
                </div>
              </>
            )}
          </>
        ) : (
          <LoadingModal />
        )}
      </section>
    </Layout>
  );
};

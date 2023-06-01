/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import optionsIcon from "../../assets/bullets.svg";
import arrow from "../../assets/arrow.svg";

import { Options } from "../../components/money/Options";
import { Link } from "react-router-dom";
import { activitiesMock } from "./mockActivity";
import { ActivityCard } from "../../components/money/ActivityCard";
import { NoActivities } from "../../components/money/NoActivities";
import { useSelector } from "react-redux";
import Layout from "../../components/layout";

const YourMoney = () => {
  // eslint-disable-next-line no-unused-vars
  const [money, setMoney] = useState(0);
  const [activities, setActivities] = useState([]);
  const [modalOption, setModalOption] = useState(false);

  //Dejo Provisorio para mostrar al tl
  const { user } = useSelector((state) => state.auth);
  const monto = user?.userLogin.balance;

  const handlerOptions = () => {
    setModalOption(!modalOption);
  };

  useEffect(() => {
    /* COMENTAR O DESCOMENTAR PARA VER O NO ACTIVIDADES */
    setActivities(activitiesMock);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto min-w-[340px] max-w-[1440px] px-4 py-1">
        <div className="flex flex-col p-3 pb-2 my-3 text-sm rounded-lg shadow-md bg-slate-50 ps-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="font-medium">Dinero disponible</h2>
              <p className="my-1 font-semibold">
                $<span className="ml-1"> {monto}</span>
              </p>
            </div>
            <div className="relative">
              <button type="button" onClick={handlerOptions}>
                <img src={optionsIcon} alt="options" />
              </button>
              {modalOption && <Options />}
            </div>
          </div>
          <hr />
          <div>
            <h3 className="mt-2 font-semibold">Movimientos de tu dinero</h3>
            <div className="flex flex-col text-xs font-medium">
              {activities.length > 0 ? (
                activities.map((activity, i) => {
                  return <ActivityCard key={i} {...activity} />;
                })
              ) : (
                <NoActivities />
              )}
            </div>
            <div className="text-base text-[#39528D] font-semibold mt-2">
              <Link
                to={"/activities"}
                className="flex items-center justify-between"
              >
                Ver toda tu actividad
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default YourMoney;

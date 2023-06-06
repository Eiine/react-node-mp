import Empty from "../../components/activities/Empty";
import Lista from "../../components/activities/Lista";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
//import example from './Example'
//import Item from "../../components/activity/Item"
import { useSelector } from "react-redux";
import Layout from "../../components/layout";
import Loader from "../../components/loader";

//Vista cuando da error el back en ver las actividades
const Error = () => {
  return (
    <div className="flex-col gap-8 items-center justify-center content-center mt-[66px]">
      <svg
        className="m-auto"
        width="145"
        height="121"
        viewBox="0 0 145 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9421 40.6551C34.4379 15.6558 44.9426 51.6559 99.4426 13.6558C113.423 3.90814 160.443 38.6548 130.442 79.6551C108.138 110.137 28.938 126.156 9.43719 85.6558C3.80975 73.9685 4.72108 53.7613 14.9421 40.6551Z"
          fill="#ffaab8"
        />
        <path
          d="M28.5 69V31C28.5 28.6667 29.9 24 35.5 24C41.1 24 42.5 28.6667 42.5 31V61C42.5 64.2 44.8333 65 46 65H57V27C57 21.3333 61.3 10 74.5 10C87.7 10 91.3333 21.3333 91.5 27V84.5H99C101 84.5 101.5 82.1667 101.5 81V60C101.5 58 102.9 54 108.5 54C114.1 54 115.5 58 115.5 60V87C115.5 94.2 109.89 96 107.085 96H91.5V120H56.5V76.5H37C30.2 76.5 28.5 71.5 28.5 69Z"
          fill="white"
          stroke="#696969"
        />
        <path d="M41 120H116M36 120H30" stroke="#696969" />
        <path
          d="M137.675 8.6439L137.579 9.15019L138.088 9.23045C141.717 9.80273 144.5 12.9752 144.5 16.8095C144.5 21.0509 141.096 24.4808 136.908 24.4808H113.092C108.904 24.4808 105.5 21.0509 105.5 16.8095C105.5 12.5681 108.904 9.13816 113.092 9.13816H113.093H113.586L113.593 8.64586C113.651 4.90635 116.67 1.9008 120.376 1.9008C122.034 1.9008 123.553 2.50175 124.733 3.50133L125.151 3.85634L125.466 3.40625C126.695 1.64606 128.722 0.5 131.011 0.5C134.753 0.5 137.795 3.56415 137.795 7.35418C137.795 7.79546 137.754 8.22651 137.675 8.6439Z"
          fill="white"
          stroke="#696969"
        />
        <path
          d="M16.0918 16.2756L15.9963 16.7819L16.5053 16.8622C18.1982 17.1292 19.5 18.6108 19.5 20.4048C19.5 22.3897 17.9077 23.9904 15.9538 23.9904H4.04624C2.09225 23.9904 0.5 22.3897 0.5 20.4048C0.5 18.4198 2.09225 16.8191 4.04624 16.8191H4.0467H4.53905L4.54664 16.3268C4.57338 14.5911 5.97396 13.2004 7.68789 13.2004C8.45556 13.2004 9.15832 13.4783 9.70466 13.9414L10.1235 14.2964L10.4379 13.8463C11.0082 13.0297 11.9466 12.5 13.0057 12.5C14.7363 12.5 16.1474 13.9179 16.1474 15.6771C16.1474 15.8821 16.1283 16.0821 16.0918 16.2756Z"
          fill="white"
          stroke="#696969"
        />
      </svg>
      <h2 className="font-semibold text-2xl text-colorButton leading-[29.26px] ml-4 mr-4 p-2 text-center pt-8">
        ¡Upps! Lo sentimos, ha ocurrido un error
      </h2>
      <p className="text-base font-medium leading-[19.5px] text-center pt-4 pl-[15px] pr-[17px]">
        Cargue nuevamente la página, si el error persiste contactanos por favor
      </p>
      <div className="flex justify-center mt-3">
        <a
          className="bg-blue-300 p-2 rounded-sm font-medium"
          href="mailto:lisa13suarez@gmail.com"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};

const Activity = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [error, setError] = useState("e");
  const [isLoading, setIsLoading] = useState(true);
  //const { activities } = data
  //const token = user.token.token
  //console.log(user, token)
  //https://api-wallet.onrender.com/auth/activity/activities/6476b55528cb97aaebb79bd0/2
  // let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDZiZWI5N2E5YmNjN2FjZmJhNWFjNmEiLCJpYXQiOjE2ODUzMjk0MjksImV4cCI6MTc3MTcyOTQyOX0.4tdGCwWTiDaCegrZHmVYq1e9MpTVJdlHJNLlFcPAqoY"

  let token2 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc2YjU1YzI4Y2I5N2FhZWJiNzliZDMiLCJpYXQiOjE2ODU1NjQwNDMsImV4cCI6MTc3MTk2NDA0M30.fMWtq__N1sSKJlqJWdfp2TCi_j7evok6be2CGPDaWp8";
  //let id = '6476b55528cb97aaebb79bd0' //'6477bb3b054a03b034bb5652' '6476b55528cb97aaebb79bd0'
  // let destinity = data[0].destinyAccountId.alias

  //console.log(activities)

  const token = user.token.token;
  const id = user.update._id;
  console.log("token:", token);
  console.log("id: ", id);
  console.log(`/auth/activity/activities/${id}`);

  useEffect(() => {
    setIsLoading(true);
    const instance = axios.create({
      baseURL: "https://api-wallet.onrender.com",
      headers: { Authorization: token },
    });

    instance
      .get(`/auth/activity/activities/${id}`) //.UserAccountId
      .then((response) => {
        console.log(response.data.activities);
        setIsLoading(false);
        setData(response.data.activities);
      })
      .catch((e) => {
        console.log("ERROR: ", e.response.data.error);
        setIsLoading(false);
        setError(e.response.data.error);
      })
      .finally(() => {});
  }, []);

  const fechaSlice = (f) => {
    //2023-05-31T06:48:51.876Z
    return f.slice(0, 10);
  };

  const hourSlice = (h) => {
    return h.slice(11, -8);
  };

  const getDays = (d, m, a) => {
    let nuevo = a + "-" + m + "-" + d;
    return nuevo;
  };

  const aux = () => {
    let now = new Date();
    return now;
  };

  console.log("Año", aux().getFullYear());
  console.log("mes", aux().getMonth());
  console.log("dia", aux().getDate());

  let fechaDeHoy,
    fechaDB,
    decir = "Hoy";

  const obtenerDetalle = (fecha) => {
    console.log("Fecha BD: ", fecha);

    let sacar = fechaSlice(fecha);
    //console.log("SACAR: ", sacar.split('-'))
    let sacar2 = sacar.split("-");

    let ano = sacar2[0];
    let mes = sacar2[1];
    let dia = sacar2[2];

    console.log("Fecha 1: ", getDays(dia, mes, ano));
    //! Data Base
    fechaDB = getDays(dia, mes, ano);
    //console.log("AUX -> ", aux().toLocaleDateString('en-US'))
    let diaDeHoy = aux().toLocaleDateString("en-ES");
    //console.log("SACAR DIA HOY: ", diaDeHoy.split('/'))
    let separateHoy = diaDeHoy.split("/");

    let ano2 = separateHoy[2];
    let mes2 = separateHoy[1].length > 1 ? separateHoy[1] : 0 + separateHoy[1];
    let dia2 = separateHoy[0].length > 1 ? separateHoy[0] : 0 + separateHoy[0];

    if (dia < dia2) decir = "Anteriores";

    //console.log("Boleano: ", separateHoy[1].length)
    console.log("Fecha 2 ->", getDays(dia2, mes2, ano2));
    //!
    fechaDeHoy = getDays(dia2, mes2, ano2);
  };

  return (
    <>
      <Layout />
      {isLoading ? (
        <Loader />
      ) : error.length > 1 ? (
        <Error />
      ) : data.length === 0 ? (
        <Empty />
      ) : (
        data.map((item, index) => (
          <div className="pl-4 pr-4" key={index}>
            {
              /* getDays('2023','05','02') === '2023-06-04' ?
                                    <p className='text-[#39528D] font-semibold'>Hoy</p> :*/
              obtenerDetalle(item.updatedAt)
            }

            <div className="mt-4 border-[#39528D] border-b-2 mb-2">
              {
                /* getDays('2023','05','02') === '2023-06-04' ?
                                    <p className='text-[#39528D] font-semibold'>Hoy</p> :*/
                fechaDB === fechaDeHoy ? (
                  <p className="text-[#39528D] font-semibold">{decir}</p>
                ) : (
                  <p className="text-[#39528D] font-semibold">{fechaDB}</p>
                )
              }
              {/* <p className='text-[#39528D] font-semibold'>{fechaSlice(item.updatedAt)}</p>*/}
            </div>
            {/*
                                    decir === 'Anteriores' ? (
                                        <Lista  destinity={item.destinyAccountId.alias} monto={item.amount} id={item._id} hour={hourSlice(item.updatedAt)} />
                                    ) : 0
                                    */}
            <Lista
              destinity={item.destinyAccountId.alias}
              monto={item.amount}
              id={item._id}
              hour={hourSlice(item.updatedAt)}
            />
          </div>
        ))
      )}
    </>
  );
};

export default Activity;

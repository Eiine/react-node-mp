import { useState } from "react";
import AddMoneyStep1 from "../../components/add-money/add-money-step1";
import Layout from "../../components/layout";
import AddMoneyStep2 from "../../components/add-money/add-money-step2";
import AddMoneyStep3 from "../../components/add-money/add-money-step3";
import AddMoneyStep4 from "../../components/add-money/add-money-step4";
import moment from "moment";

const AddMoney = () => {
  const [pantallaActual, setPantallaActual] = useState(1);
  const currentDateTime = moment().format("DD [de] MMMM YYYY - HH:mm[hs.]");
  const [dataForm, setDataForm] = useState({
    cardNumber: 0,
    cvv: 0,
    balance: 0,
    bank: "",
    operationNumber: "",
  });

  const handleNext = () => {
    if (pantallaActual < 4) {
      setPantallaActual(pantallaActual + 1);
    }
  };
  return (
    <Layout>
      {pantallaActual === 1 && (
        <AddMoneyStep1
          onNext={handleNext}
          setDataForm={setDataForm}
          dataForm={dataForm}
        />
      )}
      {pantallaActual === 2 && (
        <AddMoneyStep2 onNext={handleNext} setDataForm={setDataForm} />
      )}
      {pantallaActual === 3 && (
        <AddMoneyStep3
          onNext={handleNext}
          setDataForm={setDataForm}
          dataForm={dataForm}
        />
      )}
      {pantallaActual === 4 && (
        <AddMoneyStep4 currentDateTime={currentDateTime} dataForm={dataForm} />
      )}
    </Layout>
  );
};

export default AddMoney;

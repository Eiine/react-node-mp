import moment from "moment";
import Layout from "../../components/layout";
import { useState } from "react";
import PayPerLinkStep1 from "../../components/payperlink-steps/payperlink-step1";
import { useParams } from "react-router-dom";
import useQr from "../../hooks/useQr";
import PayPerLinkStep2 from "../../components/payperlink-steps/payperlink-step2";
import PayPerLinkStep3 from "../../components/payperlink-steps/payperlink-step3";

const PayPerLink = () => {
  const [pantallaActual, setPantallaActual] = useState(1);
  const [dataLink, setDataLink] = useState(useParams());
  const [dataTranfer, setDataTranfer] = useState("");
  const currentDateTime = moment().format("DD [de] MMMM YYYY - HH:mm[hs.]");
  const { data, isLoading, error } = useQr(`/auth/user/${dataLink?.id}`);
  const handleNext = () => {
    if (pantallaActual < 3) {
      setPantallaActual(pantallaActual + 1);
    }
  };

  return (
    <Layout>
      {pantallaActual === 1 && (
        <PayPerLinkStep1
          dataLink={dataLink}
          Loading={isLoading}
          data={data}
          onNext={handleNext}
          setDataTranfer={setDataTranfer}
        />
      )}
      {pantallaActual === 2 && (
        <PayPerLinkStep2
          onNext={handleNext}
          currentDateTime={currentDateTime}
          dataLink={dataLink}
          data={data}
        />
      )}
      {pantallaActual === 3 && (
        <PayPerLinkStep3
          data={data}
          dataLink={dataLink}
          dataTranfer={dataTranfer}
          currentDateTime={currentDateTime}
        />
      )}
    </Layout>
  );
};

export default PayPerLink;

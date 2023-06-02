import { useState } from "react";
import Layout from "../../components/layout";
import QrLinkStep1 from "../../components/qr-link/qrlink-step1";
import QrLinkStep2 from "../../components/qr-link/qrlink-step2";

const QrLink = () => {
  const [pantallaActual, setPantallaActual] = useState(1);
  const [dataForm, setDataForm] = useState("");

  const handleNext = () => {
    if (pantallaActual < 2) {
      setPantallaActual(pantallaActual + 1);
    }
  };
  return (
    <Layout>
      {pantallaActual === 1 && (
        <QrLinkStep1 onNext={handleNext} setDataForm={setDataForm} />
      )}
      {pantallaActual === 2 && (
        <QrLinkStep2 onNext={handleNext} dataForm={dataForm} />
      )}
    </Layout>
  );
};

export default QrLink;

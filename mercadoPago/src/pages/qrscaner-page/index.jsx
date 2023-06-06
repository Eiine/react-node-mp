import { useState } from "react";
import OptionsQrStep1 from "../../components/optionsqr/optionsqr-step1";
import OptionsQrStep2 from "../../components/optionsqr/optionsqr-step2";
import Layout from "../../components/layout";
import OptionsQrStep3 from "../../components/optionsqr/optionsqr-step3";
import OptionsQrStep4 from "../../components/optionsqr/optionsqr-step4";
import moment from "moment";

const QrScanner = () => {
  const [pantallaActual, setPantallaActual] = useState(1);
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState(null);
  const [dataTranfer, setDataTranfer] = useState(null);

  const currentDateTime = moment().format("DD [de] MMMM YYYY - HH:mm[hs.]");
  const handleNext = () => {
    if (pantallaActual < 4) {
      setPantallaActual(pantallaActual + 1);
    }
    // if (pantallaActual === 2) {
    //   const { alias } = scannedData.user;
    //   postData("/auth/activity/transfer", {
    //     UserAccountId: _id,
    //     amount: Number(scannedData.mount),
    //     description: "Tranferencia por Qr",
    //     alias: alias,
    //   });
    // }
  };
  console.log(error);
  console.log(scannedData);
  return (
    <Layout>
      <section>
        {pantallaActual === 1 && (
          <OptionsQrStep1 onNext={handleNext} setScannedData={setScannedData} />
        )}
        {pantallaActual === 2 && (
          <OptionsQrStep2
            onNext={handleNext}
            scannedData={scannedData}
            setDataTranfer={setDataTranfer}
          />
        )}
        {pantallaActual === 3 && (
          <OptionsQrStep3
            onNext={handleNext}
            scannedData={scannedData}
            currentDateTime={currentDateTime}
          />
        )}
        {pantallaActual === 4 && (
          <OptionsQrStep4
            scannedData={scannedData}
            currentDateTime={currentDateTime}
            dataTranfer={dataTranfer}
          />
        )}
      </section>
    </Layout>
  );
};

export default QrScanner;

import { useState } from "react";
import OptionsQrStep1 from "../../components/optionsqr/optionsqr-step1";
import OptionsQrStep2 from "../../components/optionsqr/optionsqr-step2";
import Layout from "../../components/layout";
import OptionsQrStep3 from "../../components/optionsqr/optionsqr-step3";

const QrScanner = () => {
  const [pantallaActual, setPantallaActual] = useState(1);
  const [scannedData, setScannedData] = useState(null);

  const handleNext = () => {
    if (pantallaActual < 3) {
      setPantallaActual(pantallaActual + 1);
    }
  };
  return (
    <Layout>
      <section>
        {pantallaActual === 1 && (
          <OptionsQrStep1 onNext={handleNext} setScannedData={setScannedData} />
        )}
        {pantallaActual === 2 && (
          <OptionsQrStep2 onNext={handleNext} scannedData={scannedData} />
        )}
        {pantallaActual === 3 && <OptionsQrStep3 scannedData={scannedData} />}
      </section>
    </Layout>
  );
};

export default QrScanner;

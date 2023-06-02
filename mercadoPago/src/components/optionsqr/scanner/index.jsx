import React, { useRef, useEffect, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const Scanner = ({ setScannedData, onNext }) => {
  const videoRef = useRef(null);
  //   const [cameraActive, setCameraActive] = useState(true);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        if (videoInputDevices.length > 0) {
          codeReader
            .decodeFromVideoDevice(
              videoInputDevices[0].deviceId,
              videoRef.current,
              (result) => {
                if (result !== null) {
                  const dataParsed = JSON.parse(result.text);
                  setScannedData(dataParsed);
                  codeReader.reset();
                  onNext();
                  //   setCameraActive(false);
                }
              }
            )
            .catch((error) => {
              console.error(error);
            });
        } else {
          console.error("No video input devices found.");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // return () => {
    //   codeReader.reset();
    // };
  }, []);
  return (
    <div>
      {/* {cameraActive && ( */}
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        playsInline
        style={{ maxWidth: "100%" }}
      />
      {/* )} */}
    </div>
  );
};

export default Scanner;

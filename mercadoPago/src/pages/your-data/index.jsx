import { useSelector } from "react-redux";
import { AccountData } from "../../components/yourData/AccountData";
import { PersonalDataForm } from "../../components/yourData/PersonalDataForm";
import { sliceEmail } from "../../helpers/sliceEmail";
import { useState } from "react";
import { Modal } from "../../components/yourData/Modal";
import { DataContext } from "../../context/DataContext";
import { format } from "../../helpers/formatPhoneFunctions";
import { ThreeDots } from "react-loader-spinner";

const YourData = () => {
  const { update } = useSelector((state) => state.auth.user);

  const { alias, email, fullname, dni, phone } = update;

  const [loading, setloading] = useState(false);

  const data = [
    { Usuario: fullname || sliceEmail(email) },
    { "Correo electrónico": email },
    { Alias: alias },
  ];
  const [modal, setModal] = useState(false);
  /* modal = ["correo", "ejemplo@ejemplo.com" ] */
  const handleModal = (val) => {
    setModal(val || false);
  };
  const handleLoading = (val) => setloading(val);

  return (
    <section className="min-w-[340px] px-4 py-5 flex flex-col items-center">
      <article className="bg-white px-3 py-4 rounded-md shadow-md w-full max-w-[600px]">
        <AccountData data={data} modal={modal} handleModal={handleModal} />
      </article>
      <DataContext.Provider
        value={{ phone: format(String(phone)), loading, handleLoading }}
      >
        <article className="bg-white px-3 py-4 rounded-md shadow-md mt-5 w-full max-w-[600px]">
          <PersonalDataForm dni={dni} modal={modal} handleModal={handleModal} />
        </article>
        {modal && (
          <Modal type={modal[0]} modal={modal} handleModal={handleModal} />
        )}
        {loading ? (
          <div className=" top-0 left-0 absolute  w-screen h-screen flex justify-center items-center">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#39528D"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : null}
      </DataContext.Provider>
    </section>
  );
};

export default YourData;

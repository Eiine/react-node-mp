import IconClose from "../../assets/IconClose.svg";
import { FormModal } from "./FormModal";

// eslint-disable-next-line react/prop-types
export const Modal = ({ modal, handleModal, type }) => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-[#00000057] flex justify-center items-center p-3 min-w-[340px]">
      <article className=" bg-white p-3 w-full rounded-lg max-w-[500px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[#39528D] font-semibold capitalize">
            {modal[0]}
          </h3>
          <button type="button" onClick={() => handleModal(false)}>
            <img src={IconClose} alt="icon close" />
          </button>
        </div>
        <FormModal
          type={type}
          placeholder={modal[1]}
          handleModal={handleModal}
        />
      </article>
    </div>
  );
};

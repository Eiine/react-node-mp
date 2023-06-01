import { ButtonEdit } from "./ButtonEdit";

// eslint-disable-next-line react/prop-types
export const File = ({ handleModal, value, name }) => {
  return (
    <article className=" h-[80px] flex justify-between">
      <div className=" flex flex-col justify-center w-[90%]">
        <h3 className="capitalize text-[#39528D] font-semibold">{name}</h3>
        <div className=" flex justify-between items-center">
          <p className=" w-[90%] font-medium overflow-x-hidden">{value} </p>
        </div>
      </div>
      <ButtonEdit data={[name, value]} handleModal={handleModal} />
    </article>
  );
};

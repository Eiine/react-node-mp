import EmptyCardBack from "../empty-card-back";

const CardInputStep4 = ({ dataForm, setDataForm }) => {
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="my-[56px]">
        <EmptyCardBack dataForm={dataForm} />
      </div>
      <div className="flex flex-col">
        <label
          className="font-semibold text-xs leading-[15px] text-[#39528D] pl-2"
          htmlFor="cvv"
        >
          Número de tarjeta
        </label>
        <input
          onChange={handleChange}
          name="cvv"
          className="w-[272px] h-[30px] focus:outline-none border-b-2 border-[#39528D] bg-[#ECEBF6] font-medium text-base leading-[20px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          id="cvv"
          type="number"
        />
      </div>
    </>
  );
};

export default CardInputStep4;

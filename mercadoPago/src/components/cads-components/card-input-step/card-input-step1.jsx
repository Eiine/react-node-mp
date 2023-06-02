import EmptyCard from "../empty-card";
import americanexpress from "../../../assets/cards/americanexpress.svg";
import visa from "../../../assets/cards/visa.svg";
import mastercard from "../../../assets/cards/mastercard.svg";
import { useDispatch } from "react-redux";
import { addColor } from "../../../features/newCard/newCardSlice";

const CardInputStep1 = ({ dataForm, setDataForm }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
    const typeCard = dataForm.numbercard.charAt(0);
    if (typeCard == 3) {
      dispatch(
        addColor({
          color1: "#C7A653",
          color2: "#DABA66",
          color3: "#F4D88D",
          image: `${americanexpress}`,
        })
      );
    } else if (typeCard == 4) {
      dispatch(
        addColor({
          color1: "#902CEF",
          color2: "#9B41F0",
          color3: "#AC5FF4",
          image: `${visa}`,
        })
      );
    } else if (typeCard == 5) {
      dispatch(
        addColor({
          color1: "#13B9F0",
          color2: "#3FC3F0",
          color3: "#5FD0F5",
          image: `${mastercard}`,
        })
      );
    }
  };

  return (
    <>
      <div className="my-[56px]">
        <EmptyCard dataForm={dataForm} />
      </div>
      <div className="flex flex-col">
        <label
          className="font-semibold text-xs leading-[15px] text-[#39528D] pl-2"
          htmlFor="numbercard"
        >
          Número de tarjeta
        </label>
        <input
          name="numbercard"
          onChange={handleChange}
          className="w-[272px] h-[30px] focus:outline-none border-b-2 border-[#39528D] bg-[#ECEBF6] font-medium text-base leading-[20px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          id="numbercard"
          type="number"
        />
      </div>
    </>
  );
};

export default CardInputStep1;

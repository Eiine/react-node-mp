import americanexpress from "../../../assets/cards/americanexpress.svg";
import visa from "../../../assets/cards/visa.svg";
import mastercard from "../../../assets/cards/mastercard.svg";
import { useSelector } from "react-redux";
import AllCardsDebito from "./all-cards-debito";

const AllCards = () => {
  const { user } = useSelector((state) => state.auth);
  const { cards } = user?.update;

  return (
    <div className="flex flex-col justify-center items-center gap-[16px] mt-6 ">
      {cards?.map((el) => (
        <div key={el._id}>
          <AllCardsDebito
            number={el.user_number}
            image={visa}
            background1="linear-gradient(90deg, rgba(143,42,240,1) 33%, rgba(173,97,245,1) 66%)"
          />
        </div>
      ))}
      {/* <div onClick={onNext}>
        <CardDebito
          image={mastercard}
          background1="linear-gradient(90deg, rgba(14,181,237,1) 33%, rgba(94,210,248,1) 66%)"
        />
      </div>
      <div onClick={onNext}>
        <CardDebito
          image={americanexpress}
          background1="linear-gradient(90deg, rgba(197,164,82,1) 33%, rgba(246,219,145,1) 66%)"
        />
      </div> */}
    </div>
  );
};

export default AllCards;

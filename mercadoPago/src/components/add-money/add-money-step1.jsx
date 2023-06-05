import { useSelector } from "react-redux";
import AddAllCards from "./add-all-cards";
import AddNoneCards from "./add-none-cards";

const AddMoneyStep1 = ({ onNext, setDataForm }) => {
  const { user } = useSelector((state) => state.auth);
  const { cards } = user?.update;
  return (
    <>
      {cards.length > 0 ? (
        <AddAllCards setDataForm={setDataForm} onNext={onNext} />
      ) : (
        <AddNoneCards />
      )}
    </>
  );
};

export default AddMoneyStep1;

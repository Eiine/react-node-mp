import AddAllCards from "./add-all-cards";
import AddNoneCards from "./add-none-cards";

const AddMoneyStep1 = ({ onNext }) => {
  return (
    <>
      {/* <AddNoneCards /> */}
      <AddAllCards onNext={onNext} />
    </>
  );
};

export default AddMoneyStep1;

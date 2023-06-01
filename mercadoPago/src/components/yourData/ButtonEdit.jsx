import editIcon from "../../assets/edite.svg";

// eslint-disable-next-line react/prop-types
export const ButtonEdit = ({ data, handleModal }) => {
  return (
    <button type="button" className="flex items-center cursor-default">
      <img src={editIcon} alt="edit icon" onClick={() => handleModal(data)} />
    </button>
  );
};

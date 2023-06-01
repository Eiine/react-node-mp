import notesIcon from "../../assets/notes.svg";

export const NoActivities = () => {
  return (
    <div className="flex my-3 text-[#33333366]">
      <img src={notesIcon} alt="notesIcon" />
      <article className="ml-3">
        <h3 className="mb-1 font-semibold">
          No tenés movimientos de tu dinero
        </h3>
        <p>
          Aquí encontrarás las operaciones que impacten en tu dinero disponible.
        </p>
      </article>
    </div>
  );
};

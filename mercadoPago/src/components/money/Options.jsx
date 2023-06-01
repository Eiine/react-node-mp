import { Link } from "react-router-dom";

export const Options = () => {
  return (
    <div className="flex flex-col absolute min-w-max  right-0 bg-white rounded-lg shadow-md p-2 font-medium">
      <Link to={"/"} className="p-2">
        Ingresar dinero
      </Link>
      <Link className="p-2">Transferir dinero</Link>
      <hr />
      <Link className="p-2">Tu CVU</Link>
    </div>
  );
};

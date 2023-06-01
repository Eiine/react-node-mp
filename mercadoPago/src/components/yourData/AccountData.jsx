/* eslint-disable react/prop-types */
import { File } from "./File";

/* /auth/user/updatepass/id */

export const AccountData = ({ data, handleModal }) => {
  return (
    <>
      <h2 className="text-[#39528D] font-semibold mb-2">Datos de la cuenta</h2>

      <hr />
      <div className="flex flex-col ">
        {data.map((el, i) => {
          const name = Object.keys(el)[0];
          const value = Object.values(el)[0];
          return (
            <File handleModal={handleModal} name={name} value={value} key={i} />
          );
        })}
        <File
          handleModal={handleModal}
          name={"Contraseña"}
          value={"*************"}
        />
      </div>
    </>
  );
};

/* eslint-disable react/prop-types */

export const ActivityCard = ({ img, type, remitter, amount, time }) => {
  return (
    <>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center">
          <img src={img} alt="profile" />
          <p className="ml-2">
            {type}
            <br />
            <span className="text-[#33333366]">de {remitter}</span>
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#008744] font-semibold">
            $<span className="ml-1">{amount}</span>
          </p>
          <span className="text-[#33333366]">{time}</span>
        </div>
      </div>
      <hr />
    </>
  );
};

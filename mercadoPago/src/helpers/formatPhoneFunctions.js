export const transformPhoneNumber = (num) => {
  return num
    .split("")
    .filter((el) => el !== " " && el !== "-")
    .join("");
};

//Le
export const format = (n) => {
  /* 011 2345-6789 */

  if (n.length > 3) {
    const num = n.replace(/\D/g, "");
    let code = num.slice(0, 3);
    let number = num
      .slice(3)
      .replace(/([0-9]{4})/g, "$1-")
      .trim();
    if (number[number.length - 1] === "-") {
      number = number.slice(0, -1);
    }
    return code + " " + number;
  } else return n;
};

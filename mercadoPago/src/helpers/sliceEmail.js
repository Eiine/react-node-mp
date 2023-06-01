export const sliceEmail = (email = "") => {
  const indexAt = email.indexOf("@");
  return email.slice(0, indexAt);
};

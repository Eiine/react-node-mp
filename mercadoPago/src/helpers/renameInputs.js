export const renameInputs = (val = "") => {
  switch (val.toLowerCase()) {
    case "correo electrónico":
      return "email";
    case "contraseña":
      return "password";
    case "usuario":
      return "fullname";
    case "alias":
      return "alias";
    case "agregar teléfono":
      return "phone";
    default:
      return val;
  }
};

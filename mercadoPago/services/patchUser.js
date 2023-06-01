import { baseUrl } from "../axios/axiosInstance";

export const patchUser = async (id, data, token, route) => {
  const newRoute = route ? `${route}/` : "";
  // Si hay ruta se le agrega al path mas una barra sino un espacio vacío.
  return baseUrl
    .patch(`/auth/user/${newRoute}${id}`, data, {
      headers: {
        authorization: token,
      },
    })
    .then((data) => data)
    .catch((err) => err)
    .finally((res) => res);
};

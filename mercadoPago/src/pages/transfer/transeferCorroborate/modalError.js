import Swal from "sweetalert2";
export const errorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Ha ocurrido un error!",
    timer: 2000,
    showConfirmButton: false,
  });
};

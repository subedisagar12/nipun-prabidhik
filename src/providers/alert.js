import Swal from "sweetalert2";

const toasterConfig = {
  toast: true,
  position: "bottom-right",
  timer: 3000,
  showConfirmButton: false,
  timerProgressBar: true,
};
export const fireErrorToaster = (message) => {
  Swal.fire({
    // title: title || "Error!",
    text: message,
    icon: "error",
    ...toasterConfig,
  });
};

export const fireSuccessToaster = (message) => {
  Swal.fire({
    // title: title || "Success!",
    text: message,
    icon: "success",
    ...toasterConfig,
  });
};

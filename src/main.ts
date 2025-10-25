import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const alertContainer = document.querySelector(".alertcontainer") as HTMLElement;
const alertButton = document.getElementById(
  "live-alert-button"
) as HTMLButtonElement;

type AlertType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

const alert = (message: string, type: AlertType) => {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
    `<div>${message}</div>`,
    `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
    `</div>`,
  ].join("");

  alertContainer.append(wrapper);
};

alertButton.addEventListener("click", () => {
  alert("This is a live alert!", "info");
});

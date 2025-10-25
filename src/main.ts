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

const additionalInfoButton = document.getElementById(
  "additional-info-button"
) as HTMLButtonElement;

const additionalInfoAlertContainer = (type: AlertType, message: string) => {
  const container = document.querySelector(
    ".additional-info-alert"
  ) as HTMLElement;
  container.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
    `<h4 class="alert-heading">Alert with Additional Info</h4>`,
    `<p>${message}</p>`,
    `<hr>`,
    `<p class="mb-0">This alert provides more context and information.</p>`,
    `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
    `</div>`,
  ].join("");
};

additionalInfoButton.addEventListener("click", () => {
  additionalInfoAlertContainer(
    "warning",
    "This is an alert that includes additional information to help the user understand the context better."
  );
});

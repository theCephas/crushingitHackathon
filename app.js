// Your javascript goes here

document.addEventListener("DOMContentLoaded", () => {
  const notification = document.querySelector(".notification");
  const seen = document.querySelector(".check-icon");
  const alert = document.querySelector(".notify");
  const inputBox = document.querySelector(".inputBox");
  const collection = document.querySelector(".coll");
  const daviBtn = document.querySelector(".davii");
  const cancel = document.querySelector(".cancel");
  const plans = document.querySelector(".entry");
  let closedBtn = document.querySelector(".fa-chevron-down");
  let guidesDisplay = document.querySelector(".guides");
  const steps = document.querySelectorAll(".steps");
  const bgColor = document.querySelectorAll(".step");
  const reveals = document.querySelectorAll(".deets-reveal");
  const check = document.querySelectorAll(".bullets");
  let level = document.querySelector(".level");
  let count = 0;
  const progressBar = document.querySelector(".progress__fill");
  let progress = 0;

  check.forEach((mark) => {
    mark.addEventListener("click", () => {
      mark.classList.toggle("done");
      count = mark.classList.contains("done") ? count + 1 : count - 1;
      level.innerHTML = count;
      const completedWidth = (count / check.length) * 100;
      progressBar.style.width = `${completedWidth}%`;
    });
  });

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      reveals.forEach((reveals) => {
        reveals.classList.remove("active");
      });

      reveals[index].classList.toggle("active");
      bgColor.forEach((bgColor) => {
        bgColor.classList.remove("color");
      });
      bgColor[index].classList.toggle("color");
    });
  });
  closedBtn.addEventListener("click", () => {
    if (closedBtn.classList.contains("fa-chevron-down")) {
      closedBtn.classList.replace("fa-chevron-down", "fa-chevron-up");
      guidesDisplay.style.display = "block";
    } else {
      closedBtn.classList.replace("fa-chevron-up", "fa-chevron-down");
      guidesDisplay.style.display = "none";
    }
  });

  cancel.addEventListener("click", () => {
    plans.style.display =
      plans.style.display === "block" || plans.style.display === "none"
        ? "none"
        : "none";
  });

  daviBtn.addEventListener("click", () => {
    collection.style.display =
      collection.style.display === "none" || collection.style.display === ""
        ? "block"
        : "none";
    collection.style.zIndex === "-1";
    daviBtn.style.backgroundColor =
      daviBtn.style.backgroundColor === "#303030" ||
      daviBtn.style.backgroundColor === ""
        ? "#656266"
        : "";
    alert.style.display =
      alert.style.display === "block" || alert.style.display === "none"
        ? "none"
        : "none";
    notification.style.backgroundColor =
      notification.style.backgroundColor === "" ||
      notification.style.backgroundColor === ""
        ? ""
        : "";
  });

  seen.addEventListener("click", () => {
    seen.style.border =
      seen.style.border === "" || seen.style.border === ""
        ? "1px solid #005BD3"
        : "";
    seen.style.borderRadius = "8px";
  });

  notification.addEventListener("click", () => {
    alert.style.display =
      alert.style.display === "none" || alert.style.display === ""
        ? "block"
        : "none";
    collection.style.display =
      collection.style.display === "block" ||
      collection.style.display === "none"
        ? "none"
        : "none";
    notification.style.backgroundColor =
      notification.style.backgroundColor === "#303030" ||
      notification.style.backgroundColor === ""
        ? "#656266"
        : "";
  });

  inputBox.addEventListener("focus", () => {
    inputBox.style.border = "2px solid #fff";
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".inputBox")) {
      inputBox.style.border = "1px solid #616161";
    }
  });
});

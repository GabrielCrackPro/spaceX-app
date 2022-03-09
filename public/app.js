import functions from "./services/functions.js";

const companyInfoContainer = document.querySelector(".company-info");
const capsulesContainer = document.querySelector(".capsule-info");

window.onload = async () => {
  const url = window.location.href;
  if (url.endsWith("index.html")) {
    await functions.getCompanyInfo(companyInfoContainer);
  } else if (url.endsWith("capsules.html")) {
    await functions.getCapsules(capsulesContainer);
  }
};

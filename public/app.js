import functions from "./services/functions.js";

const companyInfoContainer = document.querySelector(".company-info");

window.onload = async () => {
  await functions.getCompanyInfo(companyInfoContainer);
};

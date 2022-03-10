import functions from "./services/functions.js";

const companyInfoContainer = document.querySelector(".company-info");
const capsulesContainer = document.querySelector(".capsule-info");
const crewContainer = document.querySelector(".crew-info");
const dragonsContainer = document.querySelector(".dragon-info");

window.onload = async () => {
  const url = window.location.href;
  if (url.endsWith("index.html")) {
    await functions.getCompanyInfo(companyInfoContainer);
  } else if (url.endsWith("capsules.html")) {
    await functions.getCapsules(capsulesContainer);
  } else if (url.endsWith("crew.html")) {
    await functions.getCrew(crewContainer);
  } else if (url.endsWith("dragons.html")) {
    await functions.getDragons(dragonsContainer);
  }
};

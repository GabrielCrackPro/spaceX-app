import links from "./api.js";
const functions = {
  getData: async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
  formatNumber: (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  },
  getCompanyInfo: async (element) => {
    const companyInfo = await functions.getData(links.companyInfo);
    console.log(companyInfo);
    element.innerHTML = `
  <table class="table table-hover">
  <thead>
    <tr class="table-primary text-center">
        <th>Company Info</th>
    </tr>
    </thead>
    <tbody>
    <tr class="table-secondary">
        <td>Name: ${companyInfo.name}</td>
    </tr>
    <tr class="table-secondary">
        <td>Founder: ${companyInfo.founder}</td>
    </tr>
    <tr class="table-secondary">
        <td>Founded: ${companyInfo.founded}</td>
    </tr>
    <tr class="table-secondary">
        <td>Employees: ${companyInfo.employees}</td>
    </tr>
    <tr class="table-secondary">
        <td>Vehicles: ${companyInfo.vehicles}</td>
    </tr>
    <tr class="table-secondary">
        <td>Launch Sites: ${companyInfo.launch_sites}</td>
    </tr>
    <tr class="table-secondary">
        <td>Test Sites: ${companyInfo.test_sites}</td>
    </tr>
    <tr class="table-secondary">
        <td>Headquarters: ${companyInfo.headquarters.address}, ${
      companyInfo.headquarters.state
    }</td>
    </tr>
    <tr class="table-secondary">
        <td>Valuation: $${functions.formatNumber(companyInfo.valuation)}</td>
    </tr>
    </tbody>
    <thead>
    <tr class="table-primary text-center">
        <th>Links</th>
    </tr>
    </thead>
    <tbody>
    <tr class="table-secondary">
        <td>Website: <a href="${companyInfo.links.website}">SpaceX</a></td>
    </tr>
    <tr class="table-secondary">
    <td>Twitter: <a href="${companyInfo.links.twitter}">@SpaceX</a></td>
    </tr>
    <tr class="table-secondary">
     <td>Elon Twitter: <a href="${
       companyInfo.links.elon_twitter
     }">@elonmusk</a></td>
    </tr>
  </table>
  `;
  },
};
export default functions;

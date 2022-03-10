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
  getCapsules: async (element) => {
    const capsulesInfo = await functions.getData(links.capsules);
    console.log(capsulesInfo);
    capsulesInfo.forEach((capsule) => {
      element.innerHTML += `
      <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-12">
          <div class="card-header bg-primary">
            <h5 class="card-title text-center text-white">#${capsule.serial}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Land Landings: ${capsule.land_landings}</p>
            <p class="card-text">Water Landings: ${capsule.water_landings}</p>
            <p class="card-text">Reused: ${capsule.reuse_count}</p>
            <p class="card-text">Status: ${capsule.status}</p>
            <p class="card-text">Type: ${capsule.type}</p>
            <p class="card-text">Last Update: ${capsule.last_update}</p>
            <p class="card-text">Launches ID: <a href="${links.launches}/${capsule.launches}">${capsule.launches}</a></p>
          </div>
        </div>
      </div>
    </div>
      `;
    });
  },
  getCrew: async (element) => {
    const crewInfo = await functions.getData(links.crew);
    console.log(crewInfo);
    crewInfo.forEach((crewMember) => {
      element.innerHTML += `
      <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-12">
          <div class="card-header bg-primary">
            <h5 class="card-title text-center text-white">${crewMember.name}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Agency: ${crewMember.agency}</p>
            <p class="card-text">Status: ${crewMember.status}</p>
            <p class="card-text">Launch ID: <a href="${links.launches}/${crewMember.launches}">${crewMember.launches}</a></p>
            <p class="card-text">Wikipedia: <a href="${crewMember.wikipedia}">${crewMember.name}</a></p>
          </div>
        </div>
      </div>
    </div>
      `;
    });
  },
  getDragons: async (element) => {
    const dragonsInfo = await functions.getData(links.dragons);
    console.log(dragonsInfo);
    dragonsInfo.forEach((dragon) => {
      element.innerHTML += `
      <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-12">
          <div class="card-header bg-primary">
            <h5 class="card-title text-center text-white">${dragon.name}</h5>
          </div>
          <div class="card-body">
            <p class="card-text"><span class="bg-primary text-white">Status: </span>${
              dragon.active ? "Active" : "Disabled"
            }</p>
            <p class="card-text"><span Capacity: class="bg-primary text-white">Capacity:</span> ${
              dragon.crew_capacity
            }</p>
            <p class="card-text"><span class="bg-primary text-white">Diameter: </span> ${
              dragon.diameter.meters
            }m</p>
            <p class="card-text"><span class="bg-primary text-white">Dry Mass: </span> ${
              dragon.dry_mass_kg
            } kg</p>
            <p class="card-text"><span class="bg-primary text-white">First Flight: </span>${
              dragon.first_flight
            }</p>
            <p class="card-text"><span class="bg-primary text-white">Orbit Duration: </span>${
              dragon.orbit_duration_yr
            } years</p>
            <p class="card-text bg-primary text-white p-2">Heat Shield:</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span class="bg-primary text-white">Material: </span>${
                dragon.heat_shield.material
              }</li>
              <li class="list-group-item"><span class="bg-primary text-white">Size: </span>${
                dragon.heat_shield.size_meters
              } m</li>
              <li class="list-group-item"><span class="bg-primary text-white">Temp: </span>${
                dragon.heat_shield.temp_degrees
              } °C</li>
            </ul>
            <p class="card-text bg-primary text-white p-2">First Flight Payload:</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span class="bg-primary text-white">Cargo: </span>${Object.keys(
                dragon.trunk.cargo
              )[0]
                .split("_")
                .join(" ")} - ${dragon.trunk.cargo.solar_array}</li>
                
              <li class="list-group-item"><span class="bg-primary text-white">Mass: </span>${
                dragon.launch_payload_mass.kg
              } kg</li>
              <li class="list-group-item"><span class="bg-primary text-white">Volume: </span>${
                dragon.launch_payload_vol.cubic_meters
              } m3</li>
              <li class="list-group-item"><span class="bg-primary text-white">Return Mass: </span>${
                dragon.return_payload_mass.kg
              } kg</li>
              <li class="list-group-item"><span class="bg-primary text-white">Return Volume: </span>${
                dragon.return_payload_vol.cubic_meters
              } m3</li>
            </ul>
            <p class="card-text"><span class="bg-primary text-white">Description: </span>${
              dragon.description
            }</p>
          </div>
        </div>
      </div>
    </div>
      `;
    });
  },
};
export default functions;

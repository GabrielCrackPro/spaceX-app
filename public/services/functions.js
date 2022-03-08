const functions = {
  getData: async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
  formatNumber: (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  },
};
export default functions;

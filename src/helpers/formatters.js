import numeral from "numeral";

export default {
  formatAmount(amount, symbol = "") {
    return symbol + numeral(amount).format("0,0");
  },
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "utc",
    });
  },
  formatDateYmd(date) {
    date = new Date(date);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  },
  toProperCase(value) {
    if (!value) return "";
    const firstLetter = value.charAt(0);
    const rest = value.slice(1);
    return firstLetter.toUpperCase() + rest;
  },
};

const months: Map<string, string> = new Map<string, string>([
  ["01", "January"],
  ["02", "February"],
  ["03", "March"],
  ["04", "April"],
  ["05", "May"],
  ["06", "June"],
  ["07", "July"],
  ["08", "August"],
  ["09", "September"],
  ["10", "October"],
  ["11", "November"],
  ["12", "December"],
]);

export const formatDate = (date: string): string => {
  if (!date) {
    return "";
  }
  if (!date.includes("-")) {
    return date;
  }
  let [year, month] = date.split("-");
  if (month.length === 1) {
    month = `0${month}`;
  }
  return `${months.get(month)?.slice(0, 3)} ${year}`;
};

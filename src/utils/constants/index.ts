const BASE_URL = "https://api.fastforex.io/fetch-multi";
const API_KEY = "f0cf6ad8fd-99e0750ce7-sc1w9z";

const DATA_SELECT = [
  { id: -1, label: "Все", checked: false },
  { id: 0, label: "Без пересадок", checked: false },
  { id: 1, label: "1 пересадка", checked: false },
  { id: 2, label: "2 пересадки", checked: false },
  { id: 3, label: "3 пересадки", checked: false },
];

export { BASE_URL, API_KEY, DATA_SELECT };

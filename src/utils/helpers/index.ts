import { TypeFly, TypeSelect } from "types";

const formatDate = (value: string) => {
  const [day, month, year] = value.split(".");
  const date = new Date(`20${year}, ${month}, ${day}`);

  const newMonth = date.toLocaleString("ru-RU", { month: "long" }).slice(0, 3);

  const newDay = date.toLocaleString("ru-RU", { weekday: "short" });
  const fixNameOfDay = newDay.charAt(0).toUpperCase() + newDay.slice(1);

  return `${day} ${newMonth} ${year}, ${fixNameOfDay}`;
};

const getStops = (value: number) => {
  if (value === 0) {
    return "БЕЗ ПЕРЕСАДОК";
  } else if (value === 1) {
    return `${value} ПЕРЕСАДКА`;
  } else if (value >= 2 && value <= 4) {
    return `${value} ПЕРЕСАДКИ`;
  } else if (value >= 5 && value <= 10) {
    return `${value} ПЕРЕСАДОК`;
  }
};

const getCurrency = (value: string) => {
  switch (value) {
    case "RUB":
      return " ₽";
    case "USD":
      return " $";
    case "EUR":
      return " €";
  }
};

const getPrice = (
  currency: string,
  price: number,
  rate: { USD: number; EUR: number } | null
) => {
  if (currency === "RUB") {
    return price;
  } else if (currency === "USD" && rate !== null) {
    return (price * rate.USD).toFixed(2);
  } else if (currency === "EUR" && rate !== null) {
    return (price * rate.EUR).toFixed(2);
  }
};

const sortItems = (arr: Array<TypeFly>) => {
  return arr.sort((a, b) => a.price - b.price);
};

const filterItems = (arr: Array<TypeFly>, select: Array<TypeSelect>) => {
  const checked = select.filter((item) => item.checked).map((item) => item.id);
  if (!checked.length) {
    return arr;
  } else {
    return arr.filter((item) => checked.includes(item.stops));
  }
};

export { sortItems, formatDate, getStops, getCurrency, getPrice, filterItems };

export type TypeFly = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

export type TypeItem = {
  view: TypeFly;
  rate: TypeGetRate;
  currency: string;
};

export type TypeItems = {
  currency: string;
  rate: TypeGetRate;
  items: Array<TypeFly>;
};

export type TypeBtnBuying = {
  hover: boolean;
  currency: string;
  price: number;
  rate: TypeGetRate;
  changeHover: (value: boolean) => void;
};

export type TypeGetRate = { USD: number; EUR: number } | null;

export type TypeMenu = {
  load: boolean;
  rate: TypeGetRate;
  currency: string;
  selectItems: TypeSelect[];
  setSelectItems: (value: TypeSelect[]) => void;
  setCurrency: (value: string) => void;
};

export type TypeStops = {
  selectItems: TypeSelect[];
  setSelectItems: (value: TypeSelect[]) => void;
};

export type TypeToggleButtons = {
  load: boolean;
  currency: string;
  setCurrency: (value: string) => void;
};

export type TypeSelect = { id: number; label: string; checked: boolean };

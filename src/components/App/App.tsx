import { useState, useEffect } from "react";
import { Items } from "../Items/Items";
import { Menu } from "../Menu/Menu";
import { tickets } from "../../data/tickets.json";
import { fetchRate } from "../../services/baseApi";
import { sortItems, filterItems } from "../../utils/helpers";
import { DATA_SELECT } from "../../utils/constants";
import { TypeGetRate, TypeSelect } from "types";
import styles from "./styles.module.scss";

function App() {
  const [rate, setRate] = useState<TypeGetRate>(null);
  const [currency, setCurrency] = useState<string>("RUB");
  const [load, setLoad] = useState<boolean>(true);
  const [selectItems, setSelectItems] = useState<TypeSelect[]>(DATA_SELECT);

  useEffect(() => {
    const fetchData = async () => {
      const rateData = await fetchRate();
      setRate(rateData);
      setLoad(false);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.container}>
      <Menu
        load={load}
        rate={rate}
        currency={currency}
        setCurrency={setCurrency}
        selectItems={selectItems}
        setSelectItems={setSelectItems}
      />
      <Items
        items={filterItems(sortItems(tickets), selectItems)}
        currency={currency}
        rate={rate}
      />
    </main>
  );
}

export { App };

import { memo } from "react";
import { Item } from "../../components/Item/Item";
import { TypeItems } from "types";
import styles from "./styles.module.scss";

const Items = memo(
  ({ items, currency, rate, setModal, setModalInfo }: TypeItems) => {
    return (
      <div className={styles.items}>
        {items.map((item, index) => (
          <Item
            key={index}
            view={item}
            currency={currency}
            rate={rate}
            setModal={setModal}
            setModalInfo={setModalInfo}
          />
        ))}
      </div>
    );
  }
);

export { Items };

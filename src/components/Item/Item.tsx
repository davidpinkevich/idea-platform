import { useState, memo } from "react";
import { Paper } from "@mui/material";
import { ButtonBuying } from "./ButtonBuying/ButtonBuying";
import { ItemInfo } from "./ItemInfo/ItemInfo";
import { TypeItem } from "types";
import styles from "./styles.module.scss";

const Item = memo(
  ({ view, currency, rate, setModal, setModalInfo }: TypeItem) => {
    const [hover, setHover] = useState<boolean>(false);
    const handlerButton = (value: boolean) => setHover(!value);

    return (
      <Paper elevation={hover ? 8 : 4}>
        <div className={styles.item}>
          <ButtonBuying
            hover={hover}
            changeHover={handlerButton}
            currency={currency}
            price={view.price}
            rate={rate}
            setModal={setModal}
            setModalInfo={setModalInfo}
          />
          <ItemInfo info={view} hover={hover} />
        </div>
      </Paper>
    );
  }
);

export { Item };

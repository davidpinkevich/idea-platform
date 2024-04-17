import { memo } from "react";
import { Button } from "@mui/material";
import airplane from "../../../assets/icons/airplane.svg";
import { getCurrency, getPrice } from "../../../utils/helpers";
import { TypeBtnBuying } from "types";
import styles from "./styles.module.scss";

const ButtonBuying = memo(
  ({ hover, changeHover, currency, price, rate }: TypeBtnBuying) => {
    return (
      <div className={styles.button_buying}>
        <div className={styles.buying_wrapper}>
          <h2>Random Airlanes</h2>
          <div className={styles.buying_img}>
            <img src={airplane} alt="airplane" />
          </div>
        </div>
        <Button
          onMouseOver={() => changeHover(hover)}
          onMouseOut={() => changeHover(hover)}
          color="warning"
          variant="contained"
        >
          Купить за {getPrice(currency, price, rate)}
          {getCurrency(currency)}
        </Button>
      </div>
    );
  }
);

export { ButtonBuying };

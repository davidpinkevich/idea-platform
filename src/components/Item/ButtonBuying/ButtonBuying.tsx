import { memo } from "react";
import { Button } from "@mui/material";
import airplane from "../../../assets/icons/airplane.svg";
import { getCurrency, getPrice } from "../../../utils/helpers";
import { TypeBtnBuying } from "types";
import styles from "./styles.module.scss";

const ButtonBuying = memo(
  ({
    hover,
    changeHover,
    currency,
    price,
    rate,
    setModal,
    setModalInfo,
  }: TypeBtnBuying) => {
    const newPrice = getPrice(currency, price, rate);
    const newCurrency = getCurrency(currency);
    const hadnlerClick = () => {
      setModal(true);
      setModalInfo(`${newPrice} ${newCurrency}`);
    };
    return (
      <div className={styles.button_buying}>
        <div className={styles.buying_wrapper}>
          <h2>Random Airlanes</h2>
          <div className={styles.buying_img}>
            <img src={airplane} alt="airplane" />
          </div>
        </div>
        <Button
          onClick={hadnlerClick}
          onMouseOver={() => changeHover(hover)}
          onMouseOut={() => changeHover(hover)}
          color="warning"
          variant="contained"
        >
          Купить за {newPrice}
          {newCurrency}
        </Button>
      </div>
    );
  }
);

export { ButtonBuying };

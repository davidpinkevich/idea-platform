import { Paper } from "@mui/material";
import { BeatLoader } from "react-spinners";
import { ToggleButtons } from "./ToggleButton/ToggleButton";
import { CheckboxStops } from "./CheckboxStops/CheckboxStops";
import { TypeMenu } from "types";
import styles from "./styles.module.scss";

const Menu = (props: TypeMenu) => {
  return (
    <div className={styles.menu}>
      <Paper>
        <div className={styles.menu_body}>
          <h2>Валюта</h2>
          <div className={styles.menu_rate}>
            {props.rate === null ? (
              <BeatLoader color="#4a9ff5" />
            ) : (
              <>
                <p>100 RUB: {(props.rate.USD * 100).toFixed(2)} USD</p>
                <p>100 RUB: {(props.rate.EUR * 100).toFixed(2)} EUR</p>
              </>
            )}
          </div>
          <ToggleButtons
            currency={props.currency}
            setCurrency={props.setCurrency}
            load={props.load}
          />
          <h2 className={styles.stops_header}>Количество пересадок</h2>
          <CheckboxStops
            selectItems={props.selectItems}
            setSelectItems={props.setSelectItems}
          />
        </div>
      </Paper>
    </div>
  );
};

export { Menu };

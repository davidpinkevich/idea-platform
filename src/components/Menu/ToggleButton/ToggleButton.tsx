import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { TypeToggleButtons } from "types";
import styles from "./styles.module.scss";

const ToggleButtons = ({ setCurrency, currency, load }: TypeToggleButtons) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setCurrency(newAlignment);
    }
  };
  return (
    <div className={styles.toggle_btns}>
      <ToggleButtonGroup
        color="primary"
        size="large"
        disabled={load}
        value={currency}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="RUB">RUB</ToggleButton>
        <ToggleButton value="USD">USD</ToggleButton>
        <ToggleButton value="EUR">EUR</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export { ToggleButtons };

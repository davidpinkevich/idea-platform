import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { TypeStops, TypeSelect } from "types";
import styles from "./styles.module.scss";

const CheckboxStops = ({ selectItems, setSelectItems }: TypeStops) => {
  const handlerCheckbox = (item: TypeSelect) => {
    const newArr = [...selectItems];
    if (item.id === -1) {
      const newSelects = newArr.map((elem) => ({
        ...elem,
        checked: !item.checked,
      }));
      setSelectItems(newSelects);
    } else {
      const newSelects = newArr.map((elem) => {
        if (elem.id === item.id) {
          return { ...elem, checked: !elem.checked };
        } else {
          return elem;
        }
      });
      setSelectItems(newSelects);
    }
  };
  const handlerButton = (item: TypeSelect) => {
    const newArr = [...selectItems];
    const newSelects = newArr.map((elem) => ({
      ...elem,
      checked: item.id === elem.id ? true : false,
    }));
    setSelectItems(newSelects);
  };
  return (
    <FormGroup>
      {selectItems.map((item) => {
        return (
          <div key={item.id} className={styles.select_item}>
            <FormControlLabel
              control={
                <Checkbox
                  size="large"
                  checked={item.checked}
                  onChange={() => handlerCheckbox(item)}
                />
              }
              label={item.label}
            />
            {item.id !== -1 && (
              <button
                onClick={() => handlerButton(item)}
                className={styles.btn}
              >
                ТОЛЬКО
              </button>
            )}
          </div>
        );
      })}
    </FormGroup>
  );
};

export { CheckboxStops };

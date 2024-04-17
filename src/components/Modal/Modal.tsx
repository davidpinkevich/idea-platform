import cross from "../../assets/icons/cross.svg";
import { TypeModal } from "types";
import styles from "./styles.module.scss";

const Modal = ({ info, setModal }: TypeModal) => {
  return (
    <div className={styles.moodal}>
      <button className={styles.moodal_btn} onClick={() => setModal(false)}>
        <img src={cross} alt="cross" />
      </button>
      <div className={styles.modal_info}>
        <h2>Поздравляем!</h2>
        <p>
          Вы приобрели билет за <span>{info}</span>!
        </p>
      </div>
    </div>
  );
};

export { Modal };

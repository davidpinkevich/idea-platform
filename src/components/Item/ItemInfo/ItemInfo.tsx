import { memo } from "react";
import classNames from "classnames";
import { formatDate, getStops } from "../../../utils/helpers";
import plane from "../../../assets/icons/fly.svg";
import { TypeFly } from "types";
import styles from "./styles.module.scss";

const ItemInfo = memo(({ info, hover }: { info: TypeFly; hover: boolean }) => {
  return (
    <div className={styles.item_info}>
      <div className={styles.info_start}>
        <h2>{info.departure_time}</h2>
        <p>
          {info.origin},{info.origin_name}
        </p>
        <span>{formatDate(info.departure_date)}</span>
      </div>
      <div className={styles.info_fly}>
        <h2>{getStops(info.stops)}</h2>
        <div
          className={
            hover
              ? classNames(styles.info_plane, styles.fly_animation)
              : styles.info_plane
          }
        >
          <img src={plane} alt="plane" />
        </div>
      </div>
      <div className={styles.info_end}>
        <h2>{info.arrival_time}</h2>
        <p>
          {info.destination_name},{info.destination}
        </p>
        <span>{formatDate(info.arrival_date)}</span>
      </div>
    </div>
  );
});

export { ItemInfo };

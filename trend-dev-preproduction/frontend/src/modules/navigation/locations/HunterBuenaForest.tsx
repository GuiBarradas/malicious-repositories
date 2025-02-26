import React, { FC } from "react";
import styles from "../Navigation.module.scss";
import localized from "helpers/localized";
import { useDispatch } from "react-redux";
import { fetchLocation } from "modules/locations/store/locationAC";
import { setGamePage } from "modules/game/store/GameSlice";

const HunterBuenaForest: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.items}>
      <div className={styles.location}>{localized.hunter}</div>
      <div
        onClick={() => {
          dispatch(fetchLocation({ location: "BuenaForest" }));
        }}
        className={styles.item}
      >
        {localized.buenaForest}
      </div>
      <div
        onClick={() => {
          dispatch(setGamePage("talk"));
        }}
        className={styles.item}
      >
        {localized.talk}
      </div>
    </div>
  );
};

export default HunterBuenaForest;

import React, { FC } from "react";
import styles from "../QuestPage.module.scss";
import Button from "kit/button/Button";
import localized from "helpers/localized";

const Quest5: FC = ({ setQuest }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.text}>{localized.quest5}</div>
        <div className={styles.button}>
          <Button
            secondary
            onClick={() => {
              setQuest(6);
            }}
          >
            {localized.next}
          </Button>
        </div>
      </div>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(/assets/quests/Quest5.png)` }}
      />
    </div>
  );
};

export default Quest5;

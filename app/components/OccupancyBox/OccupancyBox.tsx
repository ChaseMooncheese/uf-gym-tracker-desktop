"use client";

// import { CircularProgressbar } from "react-circular-progressbar";
import styles from "./OccupancyBox.module.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface OccupancyBoxProps {
  name: string;
  percentage: number;
}

export default function OccupancyBox(props: OccupancyBoxProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <CircularProgressbar
            value={props.percentage}
            text={`${Number(props.percentage).toFixed(0)}%`}
          ></CircularProgressbar>
        </div>
        <b style={{}}>{props.name}</b>
      </div>
    </>
  );
}

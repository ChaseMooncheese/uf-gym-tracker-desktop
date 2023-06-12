"use client";

import { Dispatch, use, useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import OccupancyBox from "../OccupancyBox";

const url =
  "https://us-central1-uf-gym-tracker.cloudfunctions.net/FetchGymData";

async function getData() {
  const res = await fetch(url, { next: { revalidate: 300 } }); //Original page will be cached for 5 minutes

  if (!res.ok) {
    console.log("error. data was" + res);
    return null;
  }
  const resData = await res.json();
  console.log(resData);
  return resData as any;
}

async function updateData(setData: Dispatch<any>) {
  const res = await fetch(url, { next: { revalidate: 30 } });

  if (!res.ok) {
    console.log("error. data was" + res);
  }
  const resData = await res.json();
  setData(resData);
}

export default function Dashboard() {
  let originalData = use(getData());
  const [data, setData] = useState(originalData);
  // const data = originalData;

  let trackers = null;

  if (data !== null) {
    trackers = Object.keys(data).map((locName) => {
      let percent = 0;

      if (locName in data) {
        percent = data[locName]["percent"];
      }
      return (
        <OccupancyBox
          key={locName}
          name={locName}
          percentage={percent}
        ></OccupancyBox>
      );
    });
  }

  return <>{trackers}</>;
}

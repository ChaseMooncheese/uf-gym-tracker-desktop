import styles from "./page.module.css";
import OccupancyBox from "./components/OccupancyBox/OccupancyBox";
import Dashboard from "./components/OccupancyBox/Dashboard/Dashboard";

function MainContainer() {
  return <div className={styles.container}></div>;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Live Gym Counts: </h1>
      <div className={styles.container}>
        <Dashboard></Dashboard>
      </div>
    </main>
  );
}

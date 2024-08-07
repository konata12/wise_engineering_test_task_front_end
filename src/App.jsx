import Header from "./components/common/Header";
import Records from "./components/records/Records";
import Total from "./components/total/Total";
import TrackerForm from "./components/tracker_form/TrackerForm";
import RecentActivity from "./components/recent_activity/RecentActivity";

import styles from './App.module.scss'

function App() {
  return (
    <div className="container">
      <Header></Header>
      <TrackerForm></TrackerForm>
      <div className={styles.activities_data}>
        <div className={styles.recent_activities}>
          <RecentActivity></RecentActivity>
          <RecentActivity></RecentActivity>
          <RecentActivity></RecentActivity>
          <RecentActivity></RecentActivity>
          <RecentActivity></RecentActivity>
        </div>
        <div className={styles.summarized_activities}>
          <Records></Records>
          <Total></Total>
        </div>
      </div>
    </div>
  );
}

export default App;

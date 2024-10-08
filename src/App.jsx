import Header from "./components/common/Header";
import Records from "./components/records/Records";
import Total from "./components/total/Total";
import TrackerForm from "./components/tracker_form/TrackerForm";
import RecentActivity from "./components/recent_activity/RecentActivity";
import { useDispatch, useSelector } from "react-redux";
import { getOutdoorActivities } from "./redux/outdoor_activity/outdoorActivity";
import { useEffect } from "react";

import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const { activities, formSubmissinTracker } = useSelector(state => state.outdoorActivity)

  useEffect(() => {
    dispatch(getOutdoorActivities())
  }, [dispatch, formSubmissinTracker])

  return (
    <div className="container">
      <Header />
      <TrackerForm formSubmissinTracker={formSubmissinTracker} />
      <div className={styles.activities_data}>
        <div className={styles.recent_activities}>
          {
            activities ? activities.map((activity, i) => <RecentActivity
              key={i}
              date={activity.date}
              activityType={activity.activityType}
              distance={activity.distance}
              time={activity.time}
              speed={activity.speed}
            />) :
              null
          }
        </div>
        <div className={styles.summarized_activities}>
          <Records />
          <Total />
        </div>
      </div>
    </div>
  );
}

export default App;

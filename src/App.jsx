import Header from "./components/common/Header";
import Records from "./components/records/Records";
import Total from "./components/total/Total";
import TrackerForm from "./components/tracker_form/TrackerForm";
import RecentActivity from "./components/recent_activity/RecentActivity";

import styles from './App.module.scss'

import { useDispatch, useSelector } from "react-redux";
import { getOutdoorActivities } from "./redux/outdoor_activity/outdoorActivity";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  const { activities } = useSelector(state => state.outdoorActivity)
  console.log(activities)

  useEffect(() => {
    dispatch(getOutdoorActivities())
  }, [dispatch])

  return (
    <div className="container">
      <Header></Header>
      <TrackerForm></TrackerForm>
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
          <Records></Records>
          <Total></Total>
        </div>
      </div>
    </div>
  );
}

export default App;

import Header from "./components/common/Header";
import Records from "./components/records/Records";
import Total from "./components/total/Total";
import TrackerForm from "./components/tracker_form/TrackerForm";

function App() {
  return (
    <>
      <Header></Header>
      <TrackerForm></TrackerForm>
      <div className="activities_data">
        <div className="recent_activities">
          
        </div>
        <div className="summarized_activities">
          <Records></Records>
          <Total></Total>
        </div>
      </div>
    </>
  );
}

export default App;

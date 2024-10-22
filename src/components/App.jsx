import Profile from "./Profile/Profile";
import userData from "../userData.json";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
    </>
  );
}

// Правильний експорт без виклику функції
export default App;

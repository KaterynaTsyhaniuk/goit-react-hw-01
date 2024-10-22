import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friendList from "../friendList.json";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
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
      <div>
        <FriendList friends={friendList} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}

// Правильний експорт без виклику функції
export default App;

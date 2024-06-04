import "./App.css";
import Job from "./components/Job";
import User from "./components/User";

function App() {
  // const age = 15;
  // if (age >= 18) {
  //   return <h1>over age</h1>;
  // } else {
  // }
  const users = [
    { name: "pedro", age: 21 },
    { name: "jake", age: 25 },
    { name: "Jessica", age: 32 },
  ];
  const names = ["pedro", "jake", "jessica", "mike", "dustin"];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;

import "./App.css";
import Job from "./components/Job";
function App() {
  const age = 15;
  if (age >= 18) {
    return <h1>over age</h1>;
  } else {
  }
  const users = [
    { name: "pedro", age: 21 },
    { name: "jake", age: 25 },
    { name: "Jessica", age: 32 },
  ];
  const names = ["pedro", "jake", "jessica", "mike", "dustin"];

  return (
    <div className="App">
      {/* <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
      */}
      {names.map((users, key) => {
        return (
          <h1 key={key}>
            {users.name} {users.age}
          </h1>
        );
      })}
    </div>
  );
}

export default App;

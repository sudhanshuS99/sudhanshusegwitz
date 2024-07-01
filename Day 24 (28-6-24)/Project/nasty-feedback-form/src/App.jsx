import Header from "./components/Header";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <h1 className="flex flex-col place-items-center text-3xl font-bold my-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        culpa facere illo officia?
      </h1>
      <div className="flex flex-col place-items-center">
        <FormOne />
      </div>
    </>
  );
};

export default App;

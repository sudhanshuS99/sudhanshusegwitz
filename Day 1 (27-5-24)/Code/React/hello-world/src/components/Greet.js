//using functional components
import React from "react";
// normal way
// function Greet(){
//     return <h1>Hello Segwitz</h1>
// }

//arrow function
// export const Greet = () => <h1>Hello Segwitz</h1> //named export
// const Greet = () => <h1>Hello Segwitz (functional component)</h1>;
// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}{" "}
//       </h1>
//       {props}
//     </div>
//   );
// };

//destructuring
// const Greet = {name, heroName} => { //first method
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}{" "}
//       </h1>
//       {props}
//     </div>
//   );
// };
const Greet = (props) => {
  //second method
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}{" "}
      </h1>
      {props}
    </div>
  );
};
export default Greet; // default export

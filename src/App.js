import "./App.css";
import React, { Component } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";

// const Person = React.memo(({ name, age }) => {
//   console.log("Person render");
//   return (
//     <p>
//       {name} / {age}
//     </p>
//   );
// });

// const App = () => {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       { id: 1, name: "Seunghun", age: 24 },
//       { id: 2, name: "Suhye", age: 29 },
//     ],
//   });
//   const toPersonCick = React.useCallback(() => {}, [])

//   const { text, persons } = state;

//   return (
//     <div>
//       <input type="text" value={text} onChange={change} />
//       <ul>
//         {persons.map((person) => {
//           return <Person {...person} key={person.id} onClick={toPersonCick} />;
//         })}
//       </ul>
//     </div>
//   );

//   function change(e) {
//     setState({
//       ...state,
//       text: e.target.value,
//     });
//   }
// };

// function App() {
//   const [visible, setVisible] = React.useState(false);

//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0, 0, 0, 0.5)",
//             }}
//             onClick={close}
//           >
//             Hello
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const myInputRef = React.useRef();
  const click = () => {
    console.log(myInputRef.current.value);
  };
  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;

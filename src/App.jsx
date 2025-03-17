import React, { useState } from "react";
import Counter from "./components/Hooks/useState";
import Timer from "./components/Hooks/useEffect";
import Component from "./components/Hooks/useReducer";
import ButtonUseContext from "./components/Hooks/useContext";
import ParentComponent from "./components/Hooks/usecallback";
import Parent from "./components/prop_drilling/Parent";
import ContextParent from "./components/contextApi/ContextParent";
import { UserProvider } from "./components/contextApi/UserContext";
import EnhancedGreet from "./components/HOC/Greet";
import Modal from "./components/ReactPortal/Modal";
// import AppRouter from "./components/router/page";
function App() {
  const [user] = useState({ name: "pallavi", age: 30 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="">
      {/* useState */}
      <Counter />
      {/* useEffect */}
      <Timer />

      <Component />
      <ButtonUseContext />
      <ParentComponent />
      {/* prop-drilling */}
      <Parent user={user} />
      {/* contextApi */}
      <UserProvider>
        <ContextParent />
      </UserProvider>
      {/* HOC */}
      <EnhancedGreet name="Pallavi" />
      {/* ReactPortal */}
      <h1>welcome to React Portal</h1>
      <button onClick={() => setIsModalOpen(true)}>open modal</button>

      <Modal isOpen={isModalOpen} >
        <h2>this is a Moadal</h2>
      <button onClick={() => setIsModalOpen(false)}>close modal</button>

      </Modal>
      {/* <button onClick={() => setIsModalOpen(true)}>open modal</button> */}
     {/* <AppRouter/> */}
    </div>
  );
}

export default App;



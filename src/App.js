import React, { Compnent } from 'react'
import logo from './logo.svg';
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import NameList from './components/NameList'



function App() {
  return (
    <div className="App">
     <NameList />
       
<FunctionClick />
<ClassClick />
<br></br>
{/* <UserGreeting />   */}
<br></br>

<ParentComponent />
<br></br>

        <Counter />
        <br></br>

        <Message />
     
    <Greet name="Brian" heroName="Groot">
        <p>This is children props</p>
        </Greet>
       <Greet name="Max" heroName="Loki">
        <button>Action</button>
    </Greet>
 
 
 <Greet name="Emilia" heroName="Mantis"/>
   
      <Welcome name="Brian" heroName="Groot"/>
      <Welcome name="Max" heroName="Loki"/>
      <Welcome name="Emilia" heroName="Mantis"/> 
 
      <Hello />  
       <Hello />
      <Hello />  
    </div>
  );
}

export default App;

import UserGreeting from "./UserGreeting"
import List from "./List";
import Button from "./Button";
function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  return (
    <>
    <UserGreeting isLoggedIn = {true} username ="Vamsi"/>
    <List items ={fruits} category="Fruits"></List>
    <Button/>
    </>
  );
}

export default App

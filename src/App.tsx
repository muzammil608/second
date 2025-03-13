import AddToDo from "./components/addtodo"
import Navbar from "./components/navbar"
import "./App.css"
import Todos from "./components/todos"



const App = () => {
  return (
   <main>
      <h1>TaskMaster</h1>
      <Navbar />
      <AddToDo />
      <Todos />
   </main>
  )
}

export default App
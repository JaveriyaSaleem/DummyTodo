
import axios from "axios";
import Todo from "./Components/Todo";
import { TodoProvider } from "./Context/context";

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;

import { useContext } from "react";
import AddTodo from "./AddTodo";
import { TodoContext } from "../Context/context";

function Todo() {
  // let todoDataofContext = useContext(TodoContext);
  // console.log(todoDataofContext.apidata)
  // const queryClient = useQueryClient();
  // let apiFetch = async () => {
  //   let response = await axios.get("https://dummyjson.com/todos");
  //   return response.data.todos;
  // };

  // const {
  //   data: todos = [],
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery({ queryKey: ["todos"], queryFn: apiFetch });
  // console.log(todos, isLoading, isError, error);
  const { todos, isLoading, isError, error } = useContext(TodoContext);
  return (
    <>
   
      <div className="p-4">
        {/* calling the data from context  */}
    {    console.log(todos)}
      <AddTodo />
{/* <button onClick={onClickData}>Add in Object</button> */}
      </div>
      <div className="flex flex-col gap-3 p-2">
        {isLoading ? (
          <h1>Loading</h1>
        ) : isError ? (
          <h1>Error</h1>
        ) : (
          todos.map((todo, i) => (
            <div className="flex flex-col border border-amber-300 p-2" key={i}>
              {" "}
              <h1>{todo.todo}</h1>
              {/* how to add more classes in conditional classes without repitations */}
              <h2
                className={`text-white w-44 rounded-4xl py-2 px-1 text-center ${
                  todo.completed ? "bg-green-600 " : "bg-red-600"
                }`}
              >
                status:{todo.completed ? "completed" : "not completed"}{" "}
              </h2>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Todo;

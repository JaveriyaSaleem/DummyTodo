import { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Fetch Todos
  const { data: todos = [], isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      let response = await axios.get("https://dummyjson.com/todos");
      return response.data.todos;
    },
  });
  let addTodoMutation;
  // Mutation for adding a new Todo
  try{
    addTodoMutation = useMutation({
    
      mutationFn: async (newTodo) => {
        let response = await axios.post("https://dummyjson.com/todos/add", newTodo, {
          headers: { "Content-Type": "application/json" },
        });
        return response.data;
      },
      onSuccess: (newTodo) => {
        queryClient.setQueryData(["todos"], (oldTodos) => [...oldTodos, newTodo]);
      },
    });
  }
  catch(e){
    console.log(e)
  }
  

  return (
    <TodoContext.Provider value={{ todos, isLoading, isError, error, addTodo: addTodoMutation.mutate }}>
      {children}
    </TodoContext.Provider>
  );
};

import { Select, Option } from "@material-tailwind/react";

import { TodoContext } from "../Context/context";
 
export function SelectInput() {
  let valueOfTodo = useContext(TodoContext)
  console.log("value of todo", valueOfTodo)
  const [value, setValue] = useState("completed");
  return (
    <div className="w-72">
      <Select label="Status" value={value} onChange={(val)=>setValue(val)}>
        <Option value="completed" >Completed</Option>
        <Option value="not completed" >Not Completed</Option>

      </Select>
      <h1>{value}</h1>
    </div>
  );
}
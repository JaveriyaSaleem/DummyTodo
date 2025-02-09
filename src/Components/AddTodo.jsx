import React, { useState, useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { TodoContext } from "../Context/context";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  

  const [open, setOpen] = useState(false);
  const [addDataInTodo, setAddDataInTodo] = useState({
    todo: "",
    completed: false,
    userId: 1
  });

  const handleOpen = () => setOpen(!open);

  const dataAdd = () => {
    handleOpen();
    addTodo(addDataInTodo);

    setAddDataInTodo({ todo: "", completed: false, userId: Date.now() });
    
  };
// valueOfTodo.push(addDataInTodo)
  return (
    <>
      <Button onClick={handleOpen}>Add Todo</Button>
      {console.log(addDataInTodo)}
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Add New Todo
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              New Todo
            </Typography>
            {/* Corrected onChange function */}
            <Input
              label="New Todo"
              value={addDataInTodo.todo}
              onChange={(e) =>
                setAddDataInTodo((prev) => ({ ...prev, todo: e.target.value }))
              }
            />

            <div className="w-72">
              <Select
                label="Status"
                value={addDataInTodo.completed.toString()}
                onChange={(val) =>
                  setAddDataInTodo((prev) => ({ ...prev, completed: val === "true" }))
                }
              >
                <Option value="true">Completed</Option>
                <Option value="false">Not Completed</Option>
              </Select>
            </div>

            <h1>Todo: {addDataInTodo.todo}</h1>
            <h1>Completed: {addDataInTodo.completed.toString()}</h1>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            Cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={dataAdd}>
            Add
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddTodo;

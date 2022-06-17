import { useState, useEffect } from "react";
import axios from "axios";

export const Todo = ({
  id,
  todo,
  deadline,
  is_done,
  user_id,
  created_at,
  updated_at,
  getData,
}) => {

  const [isLoading,setIsLoading] = useState(false);

  const updateTodoData = async (params) => {
    const newData = { ...params, ...{ is_done: is_done ? false : true } };
    const requestUrl = "http://localhost:3001/todo";
    setIsLoading(true);
    const updatedData = await axios.put(`${requestUrl}/${params.id}`, newData);
    const result = await getData();
    setIsLoading(false);
    return updatedData;
  };

  const deleteTodoData = async (id) => {
    const requestUrl = "http://localhost:3001/todo";
    const removedData = await axios.delete(`${requestUrl}/${id}`);
    const result = await getData();
    return removedData;
  };

  return (
    <li key={id} id={id}>
      {
      isLoading ? 'loading...' : <input
        type="checkbox"
        checked={is_done}
        onChange={() =>
          updateTodoData({ id, todo, deadline, is_done, user_id })
          }
        />
      }
      <button type="button" onClick={() => deleteTodoData(id)}>
        delete
      </button>
      <p>
        {deadline} {todo} by {user_id} at {created_at} and {updated_at}
      </p>
    </li>
  );
};
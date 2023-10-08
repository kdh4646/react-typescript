import Todo from "../models/todo";
import TodoItem from "./TodoItem";

/*
    FC stands for Function Components
    React.FC is generic type
*/
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

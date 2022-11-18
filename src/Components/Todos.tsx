import {useAtom} from "jotai";
import {todosAtom} from "./Utils";

export function Todos() {
	const [todos, setTodos] = useAtom(todosAtom);

	return (
		<div className="todosContainer">
			{todos.map((todo) => (
				<div key={todo.id} className="todo">
					<h3>{todo.name}</h3>
					<p>{todo.description}</p>
					<button onClick={() => setTodos(todos => todos.filter(t => t.id != todo.id))}
							className="incomplete"> Mark As Complete
					</button>
				</div>
			))}
		</div>
	)
}
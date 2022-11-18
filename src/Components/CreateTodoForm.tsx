import {atom, useAtom} from "jotai";
import {FormEventHandler} from "react";
import {TodoItem, todosAtom} from "./Utils";

const formName = atom("");
const formDescription = atom("");
const nextIdAtom = atom(0);

export default function CreateTodoForm() {
	const [, setTodos] = useAtom(todosAtom);
	const [name, setName] = useAtom(formName);
	const [description, setDescription] = useAtom(formDescription);
	const [nextId, setNextId] = useAtom(nextIdAtom);

	const onSubmit: FormEventHandler = (event) => {
		event.preventDefault();
		const todoItem: TodoItem = {id: nextId, name, description };
		setNextId(id => id + 1);
		setTodos(todos => [...todos, todoItem]);
	}

	return (
		<form onSubmit={onSubmit}>
			<div className="input-group">
				<label htmlFor="name">Name: </label>
				<input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
			</div>
			<div className="input-group">
				<label htmlFor="desc">Description: </label>
				<input id="desc" type="textarea" value={description}
					   onChange={e => setDescription(e.currentTarget.value)}
				/>
			</div>
			<button type="submit">Create Item</button>
		</form>
	)
}
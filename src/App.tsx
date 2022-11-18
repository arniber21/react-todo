import CreateTodoForm from "./Components/CreateTodoForm";
import {Todos} from "./Components/Todos";


function App() {
	return (
		<div className="App">
			<h1>Todo App</h1>
			<CreateTodoForm />
			<Todos/>
		</div>
	)
}

export default App

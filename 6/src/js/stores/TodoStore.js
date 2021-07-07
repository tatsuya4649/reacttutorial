import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
		{
			id: 42123415215,
			text: "Go shopping",
			complete: false	
		},
		{
			id: 14341234431,
			text: "Pay Baseball",
			complete: false
		}
		];
	}

	createTodo(text){
		const id = Date.now();
		
		this.todos.push({
			id,
			text,
			complete:false
		});

		this.emit("change");
	}

	receiveTodos(todos){
		this.todos = todos;
		this.emit("change");
	}
	
	getAll(){
		return this.todos;
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			case "RECEIVE_TODOS": {
				this.receiveTodos(action.todos);
			}
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;
export default todoStore;



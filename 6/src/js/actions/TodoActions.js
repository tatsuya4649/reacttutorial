
import dispatcher from "../dispatcher";

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text
	});
}

export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id
	});
}

export function reloadTodos(){
	dispatcher.dispatch({type: "FETCH_TODOS"});
	setTimeout(()=>{
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
			{
				id: 2342423,
				text: "Study",
				complete: false
			},
			{
				id: 6536343,
				text: "Sleep At the yard",
				complete: true
			}
		]});
	},2000);
}

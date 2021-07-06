import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
	constructor(){
		super();
		this.name = "ClassTaro";
	}
	render(){
		let name = "Taro";
		return (
			<div>
			<h1>Hello</h1>
			<h2>World</h2>
			<p>{this.name}</p>
			</div>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />,app);

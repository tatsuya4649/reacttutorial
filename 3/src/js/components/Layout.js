
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
	constructor(){
		super();
		console.log("Layout class");
		console.log(this.state);
		this.state = {name: "Taro"};
	}
	render(){
		setTimeout(
		()=>{this.setState({name:"Change"});}
		,5000);
		return (
			<div>
			{this.state.name}
			<Header />
			<Footer />
			</div>
		);
	}
}

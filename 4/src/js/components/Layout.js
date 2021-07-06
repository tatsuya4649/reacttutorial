
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {title:"non title"};
	}
	render(){
		setTimeout(
		()=>{this.setState({title:"Welcome to Japan"})},
		2000
		);
		return (
			<div>
			<Header title={this.state.title} />
			<Header title={"mysite"} />
			</div>
		);
	}
}

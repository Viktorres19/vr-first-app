import React from 'react'
export default class ChildClassComponent extends React.Component {
	//достукуємось до пропсів в конструкторі
	/*constructor(props) {
		super(props)
		console.log(props)
	}*/
	render() {
		const { greeting } = this.props
		return (
				<h2>{ greeting } everybody</h2>
			)
	}
}

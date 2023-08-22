import React from 'react'
import ChildClassComponent from './ChildClassComponent.jsx'
class FirstClassComponent extends React.Component {
	// старий спосіб з конструктором
	/*constructor(props) {
		super(props)
		this.state = {
			show: true
		}
	}*/
	//новий спосіб без конструктора (стейт має бути об'єктом)
	state = {
		show: true
	}
	render() {
		return (
			<>
				<h1>Class component</h1>
				{/*кнопка, яка тоглить видимість за допомогою зміни стейту*/}
				<button onClick={() => {
					this.setState((prev) => ({show: !prev.show}))
				}}>Toggle visibility</button>
				{/*{this.state.show && <ChildClassComponent /> }*/}
				{this.state.show ? <ChildClassComponent greeting="Hillo" /> : null }
			</>
		)
	}
}

export default FirstClassComponent

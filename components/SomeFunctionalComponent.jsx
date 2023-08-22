import { useState } from 'react'
import ChildClassComponent from './ChildClassComponent.jsx'

const SomeFunctionalComponent = () => {
	/*useState - це хук. Не можна використовувати в умовах, або циклах, може бути викликаним в класових компонентах*/
	const [confirmation, setShow] = useState({ isConfirmed: false })
	const toggle = () => {
		setShow({ isConfirmed: !confirmation.isConfirmed })
		console.log(confirmation.isConfirmed)
	}
	return (
		<>
			<h1>Functional component</h1>
			<p>{confirmation.isConfirmed === true ? 'True' : 'False'}</p>
			<button onClick={toggle}>Toggle visibility</button>
			{confirmation.isConfirmed ? <ChildClassComponent greeting="Hillo" /> : null }
		</>
	)
}

export default SomeFunctionalComponent

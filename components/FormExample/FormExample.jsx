import {useState} from 'react'
import AppInput from './AppInput'

const RegisterForm = ({ onSubmit }) => {
	const [user, setUserData] = useState({email: '', password: ''})
	const setUserEmail = (e) => {
		const email = e.target.value
		/*створюємо новий об'єкт,
		заповнюємо цей об'єкт пустими початковими значеннями,
		перезапишимо значення, яке буде дорівнювати e.target.value*/
		setUserData({ ...user, email })
		//або так можна
		/*setUserEmail({
			email: e.target.value,
			password: user.password
		})*/
		console.log(email)
	}
	const setUserPassword = (e) => {
		const password = e.target.value
		setUserData({ ...user, password })
		console.log(password)
	}

	const handleFormSubmit = () => {
		const { email, password } = user

		if (!email.includes('@') && !password.trim()) {
			return
		}
		onSubmit(user)
	}
	return (
		<>
			<h1>Please, register</h1>
			<form onSubmit={handleFormSubmit}>
				<AppInput
					name="email"
					label="Email"
					type="email"
					onChange={setUserEmail}
					value={user.email}
					required={true}
				/>
				<br/>
				<br/>
				<AppInput
					name="pwd"
					label="Password"
					type="password"
					onChange={setUserPassword}
					value={user.password}
					required={true}
				/>
				<br/>
				{/*так можна одразу дивитись як змінюється значення*/}
				{/*{JSON.stringify(user)}*/}
				<br/>
				<button>Submit</button>
			</form>
			<br/>
			<br/>
			<hr />
		</>
	)
}

const FormExample = () => {
	return (
		<div>
			<RegisterForm />
		</div>
	)
}

export default FormExample

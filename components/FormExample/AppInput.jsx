const AppInput = ({label, name, ...rest}) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label> &nbsp;&nbsp;
			<input id={name} {...rest} />
		</div>
	)
}

export default AppInput

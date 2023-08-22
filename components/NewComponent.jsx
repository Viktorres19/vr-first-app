const MyComponent = () => {
	return (
		<div
			onClick={e => {
			e.preventDefault()
			console.log('Something clicked 3')
		}}
			/*onClickCapture={(e) => {
				e.stopPropagation()
				console.log('Prevents event to dive to the child!')
			}}*/
		>
			<form onClick={e => {
				e.preventDefault()
				console.log('Something clicked 2!')
			}}>
				<label onClick={e => {
					e.preventDefault()
					console.log('Label clicked!')
				}}>
					label:
					<input type="text"/>
				</label>
				<button onClick={e => {
					e.preventDefault()
					console.log('Button clicked!')
				}}>
					Click Me!
				</button>
			</form>
		</div>
	);
};

export default MyComponent;

const ConfirmationDialog = ({ title, children, confirm, cancel, open }) => {
	return (
		<dialog open={open}>
			<div>{title}</div>
			<div>{children}</div>
			<div>
				<button type="button" onClick={confirm}>
					Confirm
				</button>
				<button type="button" onClick={cancel}>
					Confirm
				</button>
			</div>
		</dialog>
	)
}

export default ConfirmationDialog

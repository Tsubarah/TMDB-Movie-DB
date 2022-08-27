import Alert from 'react-bootstrap/Alert'

const Error = ({ error }) => {
	return (
		<Alert variant="warning">
			<h2 className="h4 text-center">Error message: {error.message}</h2>
		</Alert>
	)
}

export default Error
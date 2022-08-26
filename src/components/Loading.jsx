import BeatLoader from 'react-spinners/BeatLoader'

const LoadingSpinner = () => {
	return (
		<div className="d-flex justify-content-center py-5">
			<BeatLoader size={40} color="white" />
		</div>
	)
}

export default LoadingSpinner
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState, useRef, useEffect } from 'react'

const SearchForm = ({ handleSearch }) => {
	const [searchInput, setSearchInput] = useState('')
	const searchInputRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!searchInput.length) {
			return;
		}

		handleSearch(searchInput)

		setSearchInput('')
	}

	useEffect(() => {
		searchInputRef.current.focus()
	}, [])

  return (
    <Form onSubmit={handleSubmit}>
			<InputGroup className="mb-3">
				<Form.Control
					aria-label="Search"
					placeholder="Enter your search query"
					required
					type="text"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					ref={searchInputRef}
				/>
				<Button variant="success" type="submit">Search</Button>
			</InputGroup>
		</Form>
  )
}

export default SearchForm
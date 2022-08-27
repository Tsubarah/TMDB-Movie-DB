import Dropdown from 'react-bootstrap/Dropdown';

const DropDownList = ({ genresData, handleGenre }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Choose genre
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {genresData?.genres.map(genre => (
          <Dropdown.Item 
            key={genre.id} onClick={() => {handleGenre({ genre_id: genre.id })}}
          >
            {genre.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDownList
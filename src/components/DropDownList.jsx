import Dropdown from 'react-bootstrap/Dropdown';

const DropDownList = ({ genresData, genre_id, handleGenre }) => {
  let currentGenre;

  genresData?.genres.find(genre => {
    if (genre.id === Number(genre_id)) {
        currentGenre = `${genre.name}`;
    }
});

  return (    
    <Dropdown>
      <Dropdown.Toggle 
        className="px-4 fs-5" 
        variant="dark" 
        id="dropdown-basic"
        >
        {currentGenre 
          ? currentGenre 
          : 'Choose Genre'}
      </Dropdown.Toggle>

      <Dropdown.Menu 
        variant="dark" 
        align="end"
      >
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
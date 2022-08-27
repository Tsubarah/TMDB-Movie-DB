import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const Pagination = ({ page, handlePage, totalPages, genre }) => {

  {/* Scrolls the view to top */}
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])

  return (
    <div className="d-flex justify-content-between db-dark px-4">
      <Button 
        variant="dark"
        disabled={page <= 1}
        onClick={() => {handlePage({ page: Number(page) - 1, genre_id: genre })}}
      >
        Back
      </Button>

      <Button 
        variant="dark"
        disabled={page >= totalPages}
        onClick={() => {handlePage({ page: Number(page) + 1, genre_id: genre })}}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
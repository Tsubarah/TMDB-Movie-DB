import Button from 'react-bootstrap/Button'

const Pagination = ({ page, handlePage, totalPages }) => {
  console.log(page)
  console.log("TOTAL", totalPages)
  return (
    <div className="d-flex justify-content-between db-dark px-4">
      <Button 
        disabled={page <= 1}
        onClick={() => {
          if (page && page != 1) {
            page--
          } else {
            page = 1
          }
        }}
      >
        Back
      </Button>

      <Button 
        disabled={page >= totalPages}
        onClick={() => {handlePage({ page: Number(page) + 1})}}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
import React from 'react'
import TMDB from '../services/TMDB'

const PersonDetailsPage = () => {
  const { data, error, isError, isLoading, isSuccess } = useQuery(['person', {id}], TMDB.getPerson)

  console.log(data)
  return (
    <div>PersonDetailsPage</div>
  )
}

export default PersonDetailsPage
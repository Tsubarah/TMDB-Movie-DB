import React from 'react'
import TMDB from '../services/TMDB'
import usePerson from '../hooks/usePerson'
import { useParams } from 'react-router-dom'
import PersonCard from '../components/PersonCard'
import Container from 'react-bootstrap/esm/Container'

const PersonDetailsPage = () => {
  const { id } = useParams()
  // const { data, error, isError, isLoading, isSuccess } = useQuery(['person', {id}], TMDB.getPerson)

  const { data: person, error, isError, isLoading } = usePerson(id)

  console.log(person)
  return (
    <Container className="py-3">
      {person && <PersonCard data={person} />}
    </Container>
  )
}

export default PersonDetailsPage
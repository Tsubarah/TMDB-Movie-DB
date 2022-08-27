import React from 'react'
import usePerson from '../hooks/usePerson'
import { useParams } from 'react-router-dom'
import PersonCard from '../components/PersonCard'
import Container from 'react-bootstrap/esm/Container'
import LoadingSpinner from '../components/Loading'

const PersonDetailsPage = () => {
  const { id } = useParams()

  const { data: person, error, isError, isLoading } = usePerson(id)

  console.log(person)
  return (
    <Container className="py-3">

      {isLoading && 
        <LoadingSpinner />
      }

      {person && <PersonCard person={person} />}
    </Container>
  )
}

export default PersonDetailsPage
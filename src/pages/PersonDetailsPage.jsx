import React from 'react'
import usePerson from '../hooks/usePerson'
import { useParams } from 'react-router-dom'
import PersonCard from '../components/PersonCard'
import Container from 'react-bootstrap/esm/Container'
import LoadingSpinner from '../components/Loading'
import Error from '../components/Error'

const PersonDetailsPage = () => {
  const { id } = useParams()

  const { data: person, error, isError, isLoading } = usePerson(id)

  console.log(error)

  console.log(person)
  return (
    <Container className="py-3">

      {isLoading && 
        <LoadingSpinner />
      }

      {isError &&
        <Error error={error} />
      }

      {person && <PersonCard person={person} />}
    </Container>
  )
}

export default PersonDetailsPage
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'

const NewMeetUpPage = () => {
  const addMeetupHandler = async enteredMeetupData => {
    console.log(enteredMeetupData)
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) {
      throw new Error('Request failed')
    }
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Create a new meetup </title>{' '}
        <meta name="description" content="Creating new meetups..." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}
export default NewMeetUpPage

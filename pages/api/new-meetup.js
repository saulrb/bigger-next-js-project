import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    const { title, image, address, description } = data
    const newMeetup = {
      title,
      image,
      address,
      description
    }
    console.log(newMeetup)
    res.status(201).json({ message: 'Meetup inserted' })
    console.log(process.env.MONGODB_URL)
    const client = await MongoClient.connect('mongodb://localhost:27017/local')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(newMeetup)
    console.log(result)
    client.close()
    res.status(201).json({ message: 'Meetup inserted' })
  }
}

export default handler

// Inside pages/api/insert.js

export default async function handler(req, res) {
    // Only accept POST requests
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
  
    try {
      const { selectedDate, meal, comments, selectedID } = req.body;
  
      // Ensure required fields are present
      if (!selectedDate || !meal || !comments || !selectedID) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const response = await fetch('https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/insertOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': process.env.MONGODB_API_KEY,
        },
        body: JSON.stringify({
          collection: "latePlateRequests",
          database: "test",
          dataSource: "Cluster0",
          document: {
            date: selectedDate,
            meal: meal,
            comments: comments,
            houseGirlID: selectedID
          }
        })
      });
  
      const data = await response.json();
  
      // Check for successful insert (this depends on the response structure, which I am assuming here)
      if (data && data.insertedCount && data.insertedCount === 1) {
        res.status(200).json({ success: true });
      } else {
        throw new Error("Insert operation failed");
      }
  
    } catch (error) {
      console.error('Error inserting data:', error.message);
      res.status(500).json({ error: 'Failed inserting data into MongoDB Atlas', details: error });
    }
  }
  
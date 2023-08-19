// Inside pages/api/houseGirls.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': process.env.MONGODB_API_KEY,
        },
        body: JSON.stringify({
          collection: "housegirls",
          database: "test",
          dataSource: "Cluster0",
          projection: { "_id": 1, "name": 1 }
        })
      });
  
      const data = await response.json();
  
      if (data && data.documents && Array.isArray(data.documents)) {
        // Instead of just extracting names, return the entire object which contains _id and name
        res.status(200).json(data.documents);
      } else {
        res.status(500).json({ error: 'Unexpected response format from MongoDB Atlas' });
      }
  
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed fetching data from MongoDB Atlas' });
    }
  }
  
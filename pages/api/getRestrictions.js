// Inside pages/api/houseGirls.js

export default async function handler(req, res) {
    if (!req.query.name) {
      return res.status(400).json({ error: 'Name query parameter is required' });
    }
  
    try {
      const response = await fetch('https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/findOne', {
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
          filter: { "name": req.query.name }, // filter by the housegirl's name
          projection: { "_id": 1, "name": 1, "dietaryRestrictions": 1 } // projecting the dietaryRestrictions
        })
      });
  
      const data = await response.json();
      console.log('Request received', req.query);


      if (!data.document) {
        return res.status(404).json({ error: 'Housegirl not found' });
    }
    res.status(200).json(data.document.dietaryRestrictions);
    
      console.log('MongoDB response', data);

  
      res.status(200).json(data[0].dietaryRestrictions);  // Assuming the dietaryRestrictions is an array or object.
    } catch (error) {
      res.status(500).json({ error: 'Failed fetching data from MongoDB Atlas' });
    }
  }
  
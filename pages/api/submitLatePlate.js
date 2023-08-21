// Inside pages/api/submitLatePlate.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
  
    const { selectedDate, meal, comments, selectedID, submittedBy, submissionTime } = req.body;

  
    try {
      const response = await fetch('https://data.mongodb-api.com/app/data-dsllj/endpoint/data/v1/action/insertOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': process.env.MONGODB_API_KEY,
        },
        body: JSON.stringify({
            collection: "LatePlateRequest",
            database: "test",
            dataSource: "Cluster0",
            document: {
                date: selectedDate,
                mealTime: meal,
                comments,
                submittedBy: selectedID,
                name: submittedBy,
                submissionTime,
                completed: false
            }
        })
      });
  
      const data = await response.json();
      console.log(data);
      if (data && data.insertedId != "") {
        res.status(200).json({ success: true });
    } else {
        res.status(500).json({ error: 'Failed inserting data into MongoDB Atlas', details: data });
    }
    
  
    } catch (error) {
      console.error('Error submitting late plate request:', error.message);
      res.status(500).json({ error: 'Failed submitting late plate request' });
    }
  }
  
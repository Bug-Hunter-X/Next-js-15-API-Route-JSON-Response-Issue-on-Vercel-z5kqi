```javascript
// pages/api/data.js
export default async function handler(req, res) {
  try {
    // Some logic to fetch data from a database or external API
    const data = {
      message: 'Hello from Next.js API',
      date: new Date()
    };

    res.setHeader('Content-Type', 'application/json'); //Explicitly set content type
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching or sending data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```
```javascript
// pages/index.js
// ... (rest of the code remains the same)
```
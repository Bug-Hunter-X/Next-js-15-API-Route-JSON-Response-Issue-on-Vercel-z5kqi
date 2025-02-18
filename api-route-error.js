```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Some logic to fetch data from a database or external API
  const data = {
    message: 'Hello from Next.js API',
    date: new Date()
  };

  res.status(200).json(data);
}
```

```javascript
// pages/index.js
import {useEffect, useState} from 'react';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await res.json();
      setData(jsonData);
    };

    fetchData().catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
      <p>{data.date.toLocaleString()}</p>
    </div>
  );
}

export default HomePage;
```
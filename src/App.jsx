import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

function App() {
  const [temp, setTemp] = useState(null);

useEffect(() => {
  fetch("http://192.168.1.42:5000/api/temp")
    .then(res => res.json())
    .then(data => setTemp(data.temperature));
}, []);


  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            🌿 Smart Greenhouse Dashboard
          </Typography>
          <Typography variant="h6">
            🌡️ Temperature: {temp ?? 'Loading...'}°C
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;

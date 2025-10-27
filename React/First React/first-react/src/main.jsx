import { createRoot } from 'react-dom/client';
import App from './App';
import Component, { AnotherComponent } from './Component';

const myelement = (
  <div>
    <App />
    <Component />
    <AnotherComponent />
    <h1 style={{ color: 'blue', textAlign: 'center' }}>Fruits List</h1>
    <ul>
      <li style={{ color: 'red', fontWeight: 'bold' }}>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
      <li>Dates</li>
    </ul>
  </div>
)

createRoot(document.getElementById('root')).render(
  myelement
)

createRoot(document.getElementById('sandy')).render(
  <h1>Hello, Sandy!</h1>
)
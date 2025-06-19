import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App.jsx'
// import MarvelService from './services/MarvelService.jsx'

import './style/style.scss';

// marvelService = new MarvelService();

// marvelService.getAllCharacters().then(res => res.data.results.forEach(element => {
//   console.log(element.name);
// }));

// marvelService.getCharacter(1).then(res => console.log(res));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

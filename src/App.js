import './App.css';
import props from './assets/mock-data.json'
import CardComponent from './components/Card'

function App() {
  return <body>
  <div className="cardsHolder">
      {props.map((item, i) => { return <CardComponent key={i} props={item}></CardComponent>})}
  </div>
  </body>
}

export default App;

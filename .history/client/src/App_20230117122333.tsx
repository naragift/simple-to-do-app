import './App.css';
import useSWR from "swr";

export const ENDPOINT = 'http:localhost:4000'
const fetcher = (url: string) => 
fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {

const 

  return (
  <h1>heloo</h1>

  )
}

export default App;
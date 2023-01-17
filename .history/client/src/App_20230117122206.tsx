import './App.css';
import useSWR from "swr";

export const ENDPOINT = ''
const fetcher = (url: string) => fetch(url).then((r) => r.json());

function App() {
  return (
  <h1>heloo</h1>

  )
}

export default App;

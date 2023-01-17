import "./App.css";
import useSWR from "swr";
import { Box, List } from "@mantine/core";
import AddTodo from "./components/AddTodo";

export interface Todo {
  id: number;
  title: string;
  body: string;
  done: boolean;
}

export const ENDPOINT = "http:localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data, mutate } = useSWR<Todo[]>("api/todos", fetcher);

  return (
    <Box>
      <List spacing="xs" size="sm" mb={12} >

      {data?.map((todo) => {
        return <List.Item>
          
        </List.Item>
      })}
      </List>
      <AddTodo mutate={mutate} />
    </Box>
  );
}

export default App;

import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, Group, Modal, Textarea, TextInput } from "@mantine/core";
import { ENDPOINT } from "../App";
import { KeyedMutator } from "swr";

function AddTodo({mutate}: KeyedMutator<Todo>) {
  const [open, setOpen] = useState(false);
  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  async function CreateTodo(values: { title: string; body: string }) {
    const updated = await fetch(`${ENDPOINT}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values),
    }).then(r => r.json());
    
    form.reset()
    setOpen(false)
  }

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create To-Do">
        <form onSubmit={form.onSubmit(CreateTodo)}>
          <TextInput
            required
            mb={12}
            label="Todo"
            placeholder="What do you want to do?"
            {...form.getInputProps("title")}
          />
          <Textarea
            required
            mb={12}
            label="Body"
            placeholder="Tell me more!"
            {...form.getInputProps("body")}
          />
          <Button type="submit">Create Todo</Button>
        </form>
      </Modal>
      <Group position="center">
        <Button fullWidth mb={12} onClick={() => setOpen(true)}>
          ADD TODO
        </Button>
      </Group>
    </>
  );
}

export default AddTodo;

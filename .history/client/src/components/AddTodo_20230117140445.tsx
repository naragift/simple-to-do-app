import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, Group, Modal, Textarea, TextInput } from "@mantine/core";

function AddTodo() {
  const [open, setOpen] = useState(false);
  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  function CreateTodo(values: {title: string, body:string}) {
    const updated = await fetch(`$`)
  }


  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create To-Do">
        <form onSubmit={form.onSubmit(CreateTodo)}>
          <TextInput required mb={12} label="Todo" placeholder="What do you want to do?"{...form.getInputProps("title")} />
          <Textarea  required mb={12} label="Body" placeholder="Tell me more!"{...form.getInputProps("body")} />
          <Button type="submit">Create Todo</Button>
        </form>
      </Modal>
      <Group position="center">
        <Button fullWidth mb={12} onClick={()=> setOpen(true)}>ADD TODO</Button>
      </Group>
    </>
  );
}

export default AddTodo;

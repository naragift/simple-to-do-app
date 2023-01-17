import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, Group, Modal, TextInput } from "@mantine/core";

function AddTodo() {
  const [open, setOpen] = useState(false);
  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create To-Do">
        <form>
          <TextInput />
          <Texta
        </form>
      </Modal>
      <Group position="center">
        <Button fullWidth mb={12} onClick={()=> setOpen(true)}>ADD TODO</Button>
      </Group>
    </>
  );
}

export default AddTodo;

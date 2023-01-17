import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, Group, Modal } from "@mantine/core";

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
      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Create To-Do"
      >
        textt
      </Modal>
      <Group position="Center">
<Button fullWidth "md">
    ADD TODO
</Button>
      </Group>
    </>
  );
}

export default AddTodo;

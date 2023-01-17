import { useState } from 'react'
import { useForm }from '@mantine/form'
import { Modal } from '@mantine/core';
imp

function AddTodo(){
    const [open, setOpen] = useState(false)
    const form = useForm({
        initialValues: {
            title: "",
            body: "",
        },
    });


    return <>
    <Modal>

    </Modal>
        </>
}

export default AddTodo
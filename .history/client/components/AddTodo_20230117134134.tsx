import { useState } from 'react'
import { useForm }from '@mantine/form'

function AddTodo(){
    const [open, setOpen] = useState(false)
    const form = useForm({
        initialValues: {
            title: 
        }
    })
}

export default AddTodo
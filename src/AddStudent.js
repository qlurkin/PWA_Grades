import React from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography, Button, TextField, Fab } from '@material-ui/core'
import { ArrowBack, Check } from '@material-ui/icons'
import { useHistory } from "react-router-dom"
import db from './db'

export function AddStudent() {
    const history = useHistory()

    const submit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const matricule = formData.get('matricule')
        const firstname = formData.get('firstname')
        const lastname = formData.get('lastname')
        db.collection('students').doc(matricule).set({firstname, lastname})
        history.goBack()
    }

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {history.goBack()}}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6">
                        Add Student
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <form noValidate autoComplete="off" onSubmit={submit}>
                <TextField name="matricule" label="Matricule" variant="outlined" margin="normal" fullWidth />
                <TextField name="firstname" label="Firstname" variant="outlined" margin="normal" fullWidth />
                <TextField name="lastname" label="Lastname" variant="outlined" margin="normal" fullWidth />
                <Fab color="primary" aria-label="submit" type="submit">
                    <Check />
                </Fab>
            </form>
        </Box>
    )
}

export default AddStudent

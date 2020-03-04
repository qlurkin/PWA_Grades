import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography, List, ListItem, ListItemText, Fab } from '@material-ui/core'
import { ArrowBack, Add } from '@material-ui/icons'
import { Link, useHistory } from "react-router-dom"
import { useStudents } from './useStudents'

export function StudentList() {
    const history = useHistory()

    const students = useStudents()

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {history.goBack()}}>
                            <ArrowBack />
                    </IconButton>
                    
                    <Typography variant="h6" >
                        Students
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <List>
                {students.map(student => <StudentItem student={student} key={student.matricule}/>)}
            </List>
            <Link to="/students/add">
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Link>
        </Box>
    )
}

function StudentItem({student}) {
    return (
        <ListItem>
            <ListItemText primary={`${student.firstname} ${student.lastname}`} secondary={student.matricule}/>
        </ListItem>
    )
}

export default StudentList

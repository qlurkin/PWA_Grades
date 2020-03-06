import React, { useState } from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography, TextField, Fab } from '@material-ui/core'
import { ArrowBack, Check } from '@material-ui/icons'
import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers'
import { useHistory } from "react-router-dom"
import db from './db'

export function AddTest() {
	const history = useHistory()
	const [date, setDate] = useState(new Date())

	const submit = (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const name = formData.get('name')
		db.collection('tests').add({date, name, students: []})
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
						Add Test
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<form noValidate autoComplete="off" onSubmit={submit}>
				<TextField name="name" label="Name" variant="outlined" margin="normal" fullWidth />
				<DatePicker autoOk value={date} label="Date" onChange={setDate} inputVariant="outlined" margin="normal"/>
				<Fab color="primary" aria-label="submit" type="submit">
					<Check />
				</Fab>
			</form>
		</Box>
	)
}

export default AddTest

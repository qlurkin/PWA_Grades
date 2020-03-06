import React from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography, List, ListItem, ListItemText, Fab } from '@material-ui/core'
import { ArrowBack, Add } from '@material-ui/icons'
import { Link, useHistory } from "react-router-dom"
import { useTests } from './useTests'

export function TestList() {
	const history = useHistory()
	const tests = useTests()

	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={() => {history.goBack()}}>
							<ArrowBack />
					</IconButton>
					
					<Typography variant="h6" >
						Tests
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<List>
				{tests.map(test => <TestItem test={test} key={test.id}/>)}
			</List>
			<Link to="/tests/add">
				<Fab color="primary" aria-label="add">
					<Add />
				</Fab>
			</Link>
		</Box>
	)
}

function TestItem({test}) {
	return (
		<ListItem>
			<ListItemText primary={test.name} secondary={test.date.toLocaleDateString('fr-BE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}/>
		</ListItem>
	)
}

export default TestList

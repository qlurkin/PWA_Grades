import React from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography, Button, Grid } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom'



export function Home() {
	return (
		<Box>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<Menu />
					</IconButton>
					<Typography variant="h6" >
						Grades
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Grid container direction="column" justify="space-around" alignItems="center" id="column">
				<Grid container item justify="space-around" alignItems="center">
					<Grid item><Link to="/students">
							<Button variant="contained">Students</Button>
					</Link></Grid>
					<Grid item><Link to="/tests">
							<Button variant="contained">Tests</Button>
					</Link></Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Home

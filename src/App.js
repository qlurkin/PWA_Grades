import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Home } from './Home'
import { StudentList } from './StudentList'
import { AddStudent } from './AddStudent'
import { TestList } from './TestList'
import { AddTest } from './AddTest'



export function App() {
	return (
		<Router>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Switch>
					<Route path="/students/add">
						<AddStudent />
					</Route>
					<Route path="/students">
						<StudentList />
					</Route>
					<Route path="/tests/add">
						<AddTest />
					</Route>
					<Route path="/tests">
						<TestList />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</MuiPickersUtilsProvider>
		</Router>
	)
}

export default App

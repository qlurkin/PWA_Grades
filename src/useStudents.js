import { useState, useEffect } from 'react'
import db from './db'

export function useStudents() {
	const [students, setStudents] = useState([])

	useEffect(() => {
		db.collection('students').onSnapshot(querySnapshot => {
			const students = []
			querySnapshot.forEach(doc => {
				const student = Object.assign({matricule: doc.id}, doc.data())
				students.push(student)
				console.log(student)
			})
			setStudents(students)
		})
	}, [])

	return students
} 
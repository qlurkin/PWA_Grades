import { useState, useEffect } from 'react'
import db from './db'

export function useTests() {
    const [tests, setTests] = useState([])

    useEffect(() => {
        db.collection('tests').onSnapshot(querySnapshot => {
            const tests = []
            querySnapshot.forEach(doc => {
                const test = Object.assign({id: doc.id}, doc.data())
                test.date = test.date.toDate()
                tests.push(test)
                console.log(test)
            })
            setTests(tests)
        })
    }, [])

    return tests
} 
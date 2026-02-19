import React from 'react'
import { Link } from 'react-router-dom'
import styles from './StudentList.module.css'

export default function StudentList({ students = [] }){
  if(!students.length) return <div>No students yet.</div>
  return (
    <ul className={styles.list}>
      {students.map(s => (
        <li key={s.id} className={styles.item}>
          <div>
            <strong>{s.name}</strong> <div className={styles.meta}>Reg: {s.regnumber} | {s.course} — Year {s.year}</div>
            <div className={styles.meta}>Email: {s.email} | Phone: {s.phone}</div>
          </div>
          <div className={styles.actions}>
            <Link to={`/students/${s.id}`}>View</Link>
            <Link to={`/students/${s.id}/edit`}>Edit</Link>
          </div>
        </li>
      ))}
    </ul>
  )
}

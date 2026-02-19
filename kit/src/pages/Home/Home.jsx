import React, { useEffect, useState } from 'react'
import { getAll } from '../../services/studentService'

export default function Home() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    getAll().then((s) => setCount(s.length))
  }, [])
  return (
    <div>
      <h1>Welcome to KIT Student Management</h1>
      <p>Manage college students quickly and easily with our modern web application.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ backgroundColor: 'var(--bg)', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow)' }}>
          <h3>Total Students</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{count}</p>
        </div>
        <div style={{ backgroundColor: 'var(--bg)', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow)' }}>
          <h3>Features</h3>
          <ul>
            <li>Add, edit, and view student details</li>
            <li>Search and filter students</li>
            <li>Responsive design for all devices</li>
            <li>Data persistence with localStorage</li>
          </ul>
        </div>
        <div style={{ backgroundColor: 'var(--bg)', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow)' }}>
          <h3>Quick Actions</h3>
          <p>Get started by adding your first student or browsing the list.</p>
          <a href="/students/new" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '0.375rem', textDecoration: 'none' }}>Add Student</a>
        </div>
      </div>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2>About KIT</h2>
        <p>KIT College is committed to providing quality education and fostering student success. Our management system helps administrators keep track of student information efficiently.</p>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getById } from '../../services/studentService'

export default function StudentView(){
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  useEffect(()=>{
    getById(id).then(setStudent)
  }, [id])
  if(!student) return <div>Loading...</div>
  return (
    <div>
      <h2>{student.name}</h2>
      <p><strong>Registration Number:</strong> {student.regnumber}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <Link to={`/students/${id}/edit`}>Edit</Link>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import StudentForm from '../../components/StudentForm/StudentForm'
import { getById, update } from '../../services/studentService'

export default function StudentEdit(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)

  useEffect(()=>{
    getById(id).then(setStudent)
  }, [id])

  if(!student) return <div>Loading...</div>

  const handleSubmit = async (data) => {
    await update(id, data)
    navigate(`/students/${id}`)
  }

  return (
    <div>
      <h2>Edit Student</h2>
      <StudentForm initialData={student} onSubmit={handleSubmit} />
    </div>
  )
}

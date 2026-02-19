import React from 'react'
import StudentForm from '../../components/StudentForm/StudentForm'
import { useNavigate } from 'react-router-dom'
import { create } from '../../services/studentService'

export default function StudentNew(){
  const navigate = useNavigate()
  const handleSubmit = async (data) => {
    await create(data)
    navigate('/students')
  }
  return (
    <div>
      <h2>New Student</h2>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  )
}

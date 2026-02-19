import React, { useEffect, useState } from 'react'
import StudentList from '../../components/StudentList/StudentList'
import { getAll } from '../../services/studentService'

export default function Students(){
  const [students, setStudents] = useState([])
  useEffect(()=>{
    getAll().then(setStudents)
  }, [])
  return (
    <div>
      <h2>Students</h2>
      <StudentList students={students} />
    </div>
  )
}

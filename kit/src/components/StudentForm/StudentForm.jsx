import React, { useState } from 'react'
import styles from './StudentForm.module.css'

export default function StudentForm({ initialData = {}, onSubmit }){
  const [form, setForm] = useState({
    regnumber: initialData.regnumber || '',
    name: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    address: initialData.address || '',
    course: initialData.course || '',
    year: initialData.year || '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!form.name) return alert('Name is required')
    onSubmit && onSubmit(form)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Registration Number
        <input name="regnumber" value={form.regnumber} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Name
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Phone
        <input name="phone" value={form.phone} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Address
        <input name="address" value={form.address} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Course
        <input name="course" value={form.course} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Year
        <input name="year" value={form.year} onChange={handleChange} />
      </label>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}

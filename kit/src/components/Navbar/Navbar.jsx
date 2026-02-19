import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>KIT Student Management</div>
      <div className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : '')}>
          Home
        </NavLink>
        <NavLink to="/students" className={({ isActive }) => (isActive ? styles.active : '')}>
          Students
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
          About
        </NavLink>
        <NavLink to="/students/new" className={styles.cta}>
          Add Student
        </NavLink>
      </div>
    </nav>
  )
}

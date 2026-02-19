// Minimal client-only student service that persists to localStorage
// Exposes Promise-based API to mimic async backend

const STORAGE_KEY = 'kit_students_v1';

// Generate 500 sample students
const generateStudents = () => {
  const courses = ['Computer Science', 'Information Technology', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Business Administration', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];
  const years = ['1', '2', '3', '4'];
  const students = [];
  for (let i = 1; i <= 500; i++) {
    students.push({
      id: i.toString(),
      regnumber: `REG${String(i).padStart(3, '0')}`,
      name: `Student ${i}`,
      email: `student${i}@kit.edu`,
      phone: `+1-555-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      address: `${Math.floor(Math.random() * 999) + 1} Main St, City ${Math.floor(Math.random() * 100) + 1}, State`,
      course: courses[Math.floor(Math.random() * courses.length)],
      year: years[Math.floor(Math.random() * years.length)]
    });
  }
  return students;
};

let students = [];

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      students = JSON.parse(raw);
    } else {
      students = generateStudents();
      save();
    }
  } catch (e) {
    students = generateStudents();
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function generateId() {
  return (students.length + 1).toString();
}

// Initialize
load();

export function getAll() {
  return Promise.resolve(students.slice());
}

export function getById(id) {
  const s = students.find((x) => x.id === id) || null;
  return Promise.resolve(s);
}

export function create(studentData) {
  const newStudent = { id: generateId(), ...studentData };
  students.push(newStudent);
  save();
  return Promise.resolve(newStudent);
}

export function update(id, studentData) {
  const idx = students.findIndex((x) => x.id === id);
  if (idx === -1) return Promise.resolve(null);
  students[idx] = { ...students[idx], ...studentData };
  save();
  return Promise.resolve(students[idx]);
}

export function remove(id) {
  const idx = students.findIndex((x) => x.id === id);
  if (idx === -1) return Promise.resolve(false);
  students.splice(idx, 1);
  save();
  return Promise.resolve(true);
}

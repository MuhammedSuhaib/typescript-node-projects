# 🎓 CLI Student Management System

A robust and scalable Command Line Interface (CLI) application designed to manage student records, enrollments, and financial transactions using Object-Oriented Programming (OOP) principles.

## 🚀 Features
- **Student Enrollment**: Add new students with unique IDs and select from various courses (HTML, CSS, JS, etc.).
- **Course Management**: Fees are automatically calculated based on the number of courses selected.
- **Financial System**: Students can pay their fees and check their remaining balance.
- **Status Dashboard**: View detailed reports including Student Name, ID, Enrolled Courses, and Financial Status.
- **Unique ID Generation**: Automatically assigns a 5-digit unique ID to every new student.

## 🛠️ Technologies
- **TypeScript**: Leveraging classes and type safety for a robust architecture.
- **Node.js**: The reliable backend runtime.
- **Inquirer**: For an intuitive menu-driven user experience.
- **Chalk**: For emphasized and colorful status reporting.

## 📚 Reference Notes
See [student-management-system/notes/typescript-oop.pdf](student-management-system/notes/typescript-oop.pdf) for OOP concept notes.

## 📖 How to Run
Run the project directly from the root directory using Node.js:

```bash
node student-management-system/index.ts
```

Or using `tsx`:

```bash
pnpm dlx tsx student-management-system/index.ts
```


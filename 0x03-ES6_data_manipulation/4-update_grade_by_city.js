/* eslint-disable */

/**
 * Updates the grades of students in a specific city.
 * **/

function updateStudentGradeByCity(students, city, newGrades) {
  // Filter the students array to get only the students from the specified city
  const StudentsinTown = students.filter((student) => student.location === city);

  // Map over the filtered students and update their grades
  return StudentsinTown.map((student) => {
    // Filter the newGrades array to find the grade for the current student
    const NotesFiltree = newGrades.filter((grade) => grade.studentId === student.id);

    // If a grade was found, update the student's grade
    if (NotesFiltree.length > 0) {
      return {
        ...student,
        grade: NotesFiltree[0].grade,
      };
    }

    // If no grade was found, set the student's grade to 'N/A'
    return {
      ...student,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity;

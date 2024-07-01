function getStudentsByLocation(students, city) {
  // Filter the students array to only include students with the specified city in their 'location' property
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;

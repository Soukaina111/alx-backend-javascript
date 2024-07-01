const getStudentIdsSum = (students) => {
  // Use the reduce() method to iterate through the students array and sum up their 'id' values
  return students.reduce((accum, now) => accum + now.id, 0);
};

export default getStudentIdsSum;

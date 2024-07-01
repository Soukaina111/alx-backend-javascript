// Use the reduce() method to iterate through the students array and sum up their 'id' values*/

const getStudentIdsSum = (students) => students.reduce((accu, now) => accu + now.id, 0);

export default getStudentIdsSum;

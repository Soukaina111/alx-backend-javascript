const getListStudentIds = (Students) => {
  let Idsofstudents = [];
  if (!(Students instanceof Array)) {
    return Idsofstudents;
  }
  Idsofstudents = Students.map((student) => student.id);
  return Idsofstudents;
};

export default getListStudentIds;

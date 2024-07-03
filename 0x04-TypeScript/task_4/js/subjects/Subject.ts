// Namespace to group related types and classes
namespace Subjects {
  // Base class for a Subject
  export class Subject {
    // Property to hold the teacher for this subject
    teacher: Teacher;

    // Method to set the teacher for this subject
    setTeacher = (teacher: Teacher) => {
      // Assign the provided teacher to the teacher property
      this.teacher = teacher;
    }
  }
}

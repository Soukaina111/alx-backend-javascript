// Namespace to group related types and classes
namespace Subjects {
  // Interface for a Teacher object
  export interface Teacher {
    // Optional property to store experience teaching C
    experienceTeachingC?: number;
  }

  // Class representing a C++ subject, extending the base Subject class
  export class Cpp extends Subject {
    // Method to get the list of requirements for the C++ subject
    getRequirements = () => 'Here is the list of requirements for Cpp';

    // Method to get the available teacher for the C++ subject
    getAvailableTeacher = () => {
      // Check if the teacher has experience teaching C
      if (!this.teacher?.experienceTeachingC) return 'No available teacher';

      // Return the available teacher
      return `Available Teacher: ${this.teacher}`;
    }
  }
}

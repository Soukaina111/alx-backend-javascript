// Namespace to group related types and classes
namespace Subjects {
  // Interface for a Teacher object
  export interface Teacher {
    // Optional property to store experience teaching Java
    experienceTeachingJava?: number;
  }

  // Class representing a Java class, extending the base Subject class
  export class JavaClass extends Subject {
    // Method to get the list of requirements for the Java class
    getRequirements = () => 'Here is the list of requirements for Java';

    // Method to get the available teacher for the Java class
    getAvailableTeacher = () => {
      // Check if the teacher has experience teaching Java
      if (!this.teacher?.experienceTeachingJava) return 'No available teacher';

      // Return the available teacher
      return `Available Teacher: ${this.teacher}`;
    }
  }
}

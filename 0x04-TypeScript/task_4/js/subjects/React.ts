// Namespace to group related types and classes
namespace Subjects {
  // Interface for a Teacher object
  export interface Teacher {
    // Optional property to store experience teaching React
    experienceTeachingReact?: number;
  }

  // Class representing a React class, extending the base Subject class
  export class ReactClass extends Subject {
    // Method to get the list of requirements for the React class
    getRequirements = () => 'Here is the list of requirements for React';

    // Method to get the available teacher for the React class
    getAvailableTeacher = () => {
      // Check if the teacher has experience teaching React
      if (!this.teacher?.experienceTeachingReact) return 'No available teacher';

      // Return the available teacher
      return `Available Teacher: ${this.teacher}`;
    }
  }
}

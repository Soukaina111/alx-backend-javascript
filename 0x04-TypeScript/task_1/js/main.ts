// Interface for Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// INTERFACE FOR DIRECTOR
interface Directors extends Teacher {
  numberOfReports: number,
  }
  // PRINT TEACHER
const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;
// STUDENT CLASS
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = () : string => 'Currently working';

  displayName = () : string => this.firstName;
  }


// Function to create a new Teacher
const createTeacher = (
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  yearsOfExperience?: number,
  ...rest: [string, any][]
): Teacher => {
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    yearsOfExperience,
  };

  // Add additional properties
  rest.forEach(([key, value]) => {
    teacher[key] = value;
  });

  return teacher;
};

// Create a new Teacher instance
const teacher: Teacher = createTeacher(
  'Amir',
  'Richardson',
  true,
  'Morocco',
  14,
  'contract', true
);
interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}
console.log(teacher);

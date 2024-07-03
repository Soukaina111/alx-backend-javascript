// Interface for Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
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

console.log(teacher);

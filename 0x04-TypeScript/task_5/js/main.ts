// Interface representing Major Credits
interface MajorCredits {
  // Property to hold the number of credits
  credits: number;
  // Optional property to hold the brand
  brand?: string;
}

// Interface representing Minor Credits
interface MinorCredits {
  // Property to hold the number of credits
  credits: number;
  // Property to hold the brand
  brand: string;
}

// Function to sum the major credits of two subjects
export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
  // Add the credits of the two subjects and return the result
  return subject1.credits + subject2.credits;
}

// Function to sum the minor credits of two subjects
export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): number => {
  // Add the credits of the two subjects and return the result
  return subject1.credits + subject2.credits;
}

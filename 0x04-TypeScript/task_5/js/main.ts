// Define branded types using interface merging and type aliases

// MajorCredits interface with brand
interface MajorCredits {
  credits: number;
  readonly __brand: "MajorCredits";
}

// MinorCredits interface with brand
interface MinorCredits {
  credits: number;
  readonly __brand: "MinorCredits";
}

// sumMajorCredits: accepts two MajorCredits and returns one
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits"
  };
}

// sumMinorCredits: accepts two MinorCredits and returns one
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits"
  };
}

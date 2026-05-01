type Gender = 'male' | 'female' | 'other';

type Subjects = {
	english: boolean;
	maths: boolean;
	physics: boolean;
};

export type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	contact: string;
	gender: Gender;
	subjects: Subjects;
	resume: File | null;
	url: string;
	choice: string;
	about: string;
};

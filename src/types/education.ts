import type { Company } from '@types';

export interface Education {
	course: string;
	courseContents: string[];
	startDate: string;
	endDate: string;
	institution: Company;
}

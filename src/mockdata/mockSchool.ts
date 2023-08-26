import { mockCompany } from './mockCompany';

import type { Education } from '@types';

export const mockSchool: Education = {
	institution: mockCompany,
	course: 'Some course',
	startDate: '2018-01-01',
	endDate: '2022-01-01',
	courseContents: ['TypeScript', 'React'],
};

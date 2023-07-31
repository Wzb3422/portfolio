import { School } from '@components/molecules/School';

import type { Education as EducationType } from '@types';
import classNames from 'classnames';

export interface EducationProps {
	education: EducationType[];
}

const Education = ({ education }: EducationProps) => {
	return (
		<>
			{education.map(({ course, startDate, endDate, institution, courseContents }) => (
				<div
					className={classNames(
						'flex transform transition-all md:hover:scale-[1.01]'
					)}
					key={course}
				>
					<School
						course={course}
						startDate={startDate}
						endDate={endDate}
						institution={institution}
						courseContents={courseContents}
					/>
				</div>
			))}
		</>
	);
};

export { Education };

import { Box } from '@components/atoms/Box';

import type { Company } from '@types';
import format from 'date-fns/format';
import Image from 'next/image';

export interface SchoolProps {
	institution: Company;
	course: string;
	startDate: string;
	endDate: string;
	courseContents: string[];
}

const School = ({
	institution,
	course,
	startDate,
	endDate,
	courseContents,
}: SchoolProps) => {
	return (
		<Box className="w-full">
			<div className="flex items-center gap-4">
				{institution.logo && (
					<Image
						src={institution.logo}
						alt={institution.name}
						width={64}
						height={64}
						className="rounded-md"
					/>
				)}
				<div className="mb-2 w-full">
					<div className="flex flex-col md:flex-row justify-between">
						<h3 className="font-bold">{course}</h3>
						<div className="flex justify-between w-40">
							<span>{format(new Date(startDate), 'MMM yyyy')}</span>
							<span className="mx-1">-</span>
							<span>{format(new Date(endDate), 'MMM yyyy')}</span>
						</div>
					</div>
					<h4>
						{institution.url ? (
							<a
								href={institution.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underlined relative"
							>
								{institution.name}
							</a>
						) : (
							<>{institution.name}</>
						)}
					</h4>
					<p className="text-sm">
						<strong>Course Contents: </strong>
						{courseContents.join(', ')}
					</p>
				</div>
			</div>
		</Box>
	);
};

export { School };

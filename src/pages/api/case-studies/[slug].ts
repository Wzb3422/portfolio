import { sanityClient } from '@lib/sanity';

import { caseStudiesQuery } from '@queries/caseStudies';
import { NextApiRequest, NextApiResponse } from 'next';

const singleCaseStudyApi = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const slug = req.query.slug as string;

	console.log('slug', slug);

	const caseStudy = await sanityClient.fetch(caseStudiesQuery(slug));

	// TODO: check why the case study is wrapped in an object with key '0'
	return res.status(200).json(caseStudy['0']);
};

export default singleCaseStudyApi;

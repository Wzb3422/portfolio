import { groq } from 'next-sanity';

export const educationQuery = groq`
*[_type == "education"] {
  course,
  "courseContents": courseContents[]->.title,
  startDate,
  endDate,
  "institution": institution-> {
    name,
    url,
    "logo": logo.asset->.url,
  }
}
`;

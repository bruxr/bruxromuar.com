import { type Experience } from '../../types';

function WorkExperience({ position, company, year }: Experience): React.ReactElement {
  return (
    <div className="experience">
      <h5 className="font-semibold dark:text-white">{position}</h5>
      <span className="dark:text-cool-gray-600">{company}</span>
      <span className="experience-year">{year}</span>
    </div>
  );
}

export default WorkExperience;

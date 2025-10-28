import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section className="w-full c-space section-spacing" id="experience">
      <h2 className="text-heading mb-12">My Work Experience</h2>
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;

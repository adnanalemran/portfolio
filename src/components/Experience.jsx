import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div data-aos="fade-right" className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.compnany_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div data-aos="fade-left"  >
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margine: 0 }}
      >
        {experience.compnany_name}
      </p>
    </div>
    <ul data-aos="fade-down" className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white text-[10px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.dev variants={textVariant}>
        <p className={styles.sectionSubText}>What I have skilled so far</p>
        <h2 data-aos="fade-right" className={styles.sectionHeadText}>Skilled in.</h2>
      </motion.dev>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>

          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

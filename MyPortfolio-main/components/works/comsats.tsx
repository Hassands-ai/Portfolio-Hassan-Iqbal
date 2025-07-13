import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MS Data Science 
        <span className="text-textGreen tracking-wide">@University Of Lahore</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Ongoing - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Pursuing coursework in statistics, machine learning, and data analysis, with a focus on applying theoretical concepts to real-world data science problems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained hands-on experience in data cleaning, exploratory data analysis, and model building using Python libraries such as Pandas, Scikit-learn, and NumPy.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed proficiency in creating data visualizations with Matplotlib and Seaborn to communicate insights effectively to stakeholders.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Learned SQL for querying and managing datasets, enabling efficient data extraction and analysis for data-driven decision-making.
        </li>
      </ul>
    </motion.div>
  );
};

export default Education;
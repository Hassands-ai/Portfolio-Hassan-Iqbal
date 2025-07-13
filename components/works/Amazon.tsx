
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const DataScienceExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont text-justify">
        Data Science Intern
        <span className="text-textGreen tracking-wide">@Freelance Projects</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Ongoing - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Performed data cleaning and preprocessing using Pandas and NumPy to prepare datasets for machine learning models and exploratory data analysis.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built and evaluated machine learning models using Scikit-learn to solve real-world problems, achieving accurate predictions and actionable insights.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created insightful data visualizations using Matplotlib and Seaborn to communicate trends and patterns effectively to stakeholders.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilized SQL for querying and managing large datasets, enabling efficient data extraction and analysis for data-driven decision-making.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated on end-to-end data science workflows, from data collection to model deployment, contributing to innovative solutions in a team environment.
        </li>
      </ul>
    </motion.div>
  );
};

export default DataScienceExperience;

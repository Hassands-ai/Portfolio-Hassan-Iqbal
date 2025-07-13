
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
        Bachelor of Mathematics
        <span className="text-textGreen tracking-wide">@University of Education, Lahore</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2019 - May 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Completed a 4-year Bachelor’s in Mathematics with coursework in statistics, probability, linear algebra, and applied mathematics, laying a strong foundation for data science.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed proficiency in Python programming, focusing on data analysis and model building using libraries like Pandas, Scikit-learn, and NumPy.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained hands-on experience in creating data visualizations with Matplotlib and Seaborn to present insights from academic projects effectively.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Learned SQL for querying and managing datasets, enabling efficient data extraction for data-driven decision-making in academic projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default Education;

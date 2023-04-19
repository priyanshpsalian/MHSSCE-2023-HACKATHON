import { motion, AnimatePresence } from "framer-motion";

import ContactBtn from "../UI Component/ContactBtn";
import CoffeBtn from "../UI Component/CoffeBtn";
import GithubBtn from "../UI Component/GithubBtn";
import SetEmpty from "../UI Component/SetEmpty";
import SetSample from "../UI Component/SetSample";
import TemplateSwitcher from "../UI Component/TemplateSwitcher";

const SettingMain = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <h1 className="text-2xl font-bold">CV Builder</h1>
        <h1 className="text-lg mt-2 font-bold">Tips for building a great resume</h1>
        
        <div className="mt-5">
          <p>
          Tailor the resume it to the job, using strong action verbs, quantifying achievements. <br/> 
          Keep it concise, highlight important accomplishments first, proofread 
          and edit carefully, and include relevant keywords from the job description. <br />
            <br />
          </p>
          <div className="bg-sky-50 border-2 border-sky-700/50 px-2 mt-4 mb-2 pt-4 py-2 rounded-xl">
            <h1 className="text-sky-900 text-xl font-bold">To use</h1>
            <ol className="list-none mt-2 text-sky-900 space-y-2">
              <li>
                ● The <strong>Reset</strong> button 
                button will clear all the changes you have made and you cannot
                undo them.
              </li>
              <li>
                ● The <strong> Fill Sample Data </strong> will fill the resume with sapmle data to show the look and feel
              </li>
              <li>
                ● <strong>Individual sections </strong>can be used to fill data
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex space-x-2 ">
            <SetEmpty />
            <SetSample />
          </div>
          
          

          <div className="mt-5">
            <h1 className="text-xl font-bold">Resume Templates</h1>
            <div className="flex flex-row space-x-4 mt-2">
              <TemplateSwitcher value={1} />
              <TemplateSwitcher value={2} />
              <TemplateSwitcher value={3} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingMain;

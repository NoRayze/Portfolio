import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className='mt-12'>
      <p className={styles.sectionSubText}>To reach me</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>
      <div className='mt-8'>
        <p className='text-white text-[17px] max-w-3xl leading-[30px]'>
          You can contact me by :
        </p>
        <div className='flex flex-col md:flex-row gap-4 mt-6'>
          <a
            href="mailto:pierremarco34270@gmail.com"
            className='flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg'
          >
            <span className='mr-3 text-2xl'>📧</span>
            pierremarco34270@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-marco"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg'
          >
            <span className='mr-3 text-2xl'>🔗</span>
            My LinkedIn profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

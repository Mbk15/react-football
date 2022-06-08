import React from "react";

const ButtonSecondary = () => {
  return (
    <>
      <button
        type="button"
        className="text-normal hover:text_heading border border-neutral_priamry hover:neutral_primary focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm h-hugH w-hugW text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Dark
      </button>
      <button
        type="button"
        className="text-normal bg-neutral_primary hover:text_heading focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm h-hugH w-hugW py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Darker
      </button>
    </>
  );
};

export default ButtonSecondary;

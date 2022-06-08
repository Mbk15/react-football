import React from "react";

const ButtonDisabled = () => {
  return (
    <>
      <button
        type="button"
        className="text-white bg-neutral_secondary dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm h-hugH w-hugW text-center"
        disabled
      >
        Disabled
      </button>
    </>
  );
};

export default ButtonDisabled;

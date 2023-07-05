import React, { useState } from "react";
import Select from "react-select";

function OptionWithInput() {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const options = [
    { value: "all", label: "All" },
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    { value: "other", label: "Other" },
  ];

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption.value !== "other") {
      setOtherValue("");
    }
  };

  const handleInputChange = (e) => {
    setOtherValue(e.target.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "300px",
    }),
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        styles={customStyles}
      />
      {selectedOption.value === "other" && (
        <input
          type="text"
          value={otherValue}
          onChange={handleInputChange}
          placeholder="Enter other option"
        />
      )}
    </div>
  );
}

export default OptionWithInput;

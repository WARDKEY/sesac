import React from "react";
import CreatableSelect from "react-select/creatable";
import { cityOptions } from "../data";
import { SelectWrapper } from "../styles";
import { useNavigate } from "react-router-dom";

const CitySelect = () => {
  const navigate = useNavigate();

  const handleChange = (newValue, actionMeta) => {
    console.log(newValue);
    // 이동할  주소
    navigate(`/${newValue?.value}`);
  };

  return (
    <SelectWrapper>
      <CreatableSelect
        options={cityOptions}
        onChange={handleChange} // 데이터 변경 옵션
        defaultInputValue={null}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectWrapper>
  );
};

export default CitySelect;

import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import AddOption from './add-option';
import '../css/options.css';

const Options = ({
  type,
  endpoint,
  currentSelection,
  handleChange,
  toggleState,
}) => {
  const [options, setOptions] = useState([]);

  const getOptions = useCallback(async () => {
    try {
      const {data} = await axios.get(`/api/${endpoint}`);
      setOptions(data);
    } catch (err) {
      console.error(err);
    }
  }, [setOptions]);

  useEffect(() => {
    getOptions();
  }, [getOptions]);

  const selectOption = (event, option) => {
    event.target.name = type;
    event.target.value = option;
    handleChange(event);
    toggleState();
  };

  const selectNewOption = (option) => {
    const event = {target: {}};
    selectOption(event, option);
  };

  return (
    <div className="options bg-white box-shadow">
      <div>
        {options.map((option) => (
          <div
            key={option.name + Math.random()}
            onClick={(e) => selectOption(e, option.name)}
          >
            <p>{option.name}</p>
          </div>
        ))}
      </div>
      <AddOption
        type={type}
        endpoint={endpoint}
        selectOption={(option) => selectNewOption(option)}
        closeMenu={toggleState}
      />
    </div>
  );
};

export default Options;

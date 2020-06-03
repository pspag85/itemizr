import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import AddOption from './add-option';
import '../css/options.css';

const Options = ({
  type,
  endpoint,
  currentSelection,
  handleChange,
  overflowState,
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
    overflowState();
  };

  const selectNewOption = (option) => {
    const event = {target: {}};
    selectOption(event, option);
  };

  return (
    <div
      className={`options-container ${type}-option bg-white box-shadow arrow`}
    >
      <div className="options">
        {options.length < 1 ? (
          <p className="secondary-txt">Add a {type}</p>
        ) : (
          options.map((option) => (
            <div
              className="option"
              key={option.name + Math.random()}
              onClick={(e) => selectOption(e, option.name)}
            >
              <p>{option.name}</p>
            </div>
          ))
        )}
      </div>
      <div className="add-option-wrapper">
        <AddOption
          type={type}
          endpoint={endpoint}
          selectOption={(option) => selectNewOption(option)}
          closeMenu={overflowState}
        />
      </div>
    </div>
  );
};

export default Options;

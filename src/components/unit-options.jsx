import React, {Fragment, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import AddUnit from './add-unit';

// lots of duplicate code with vendor and category options should be combined into dynamic "CustomOptions" component
const UnitOptions = ({handleChange, toggleState}) => {
  const [units, setUnits] = useState([]);

  const getUnits = useCallback(async () => {
    try {
      const {data} = await axios.get('/api/units');
      setUnits(data);
    } catch (err) {
      console.error(err);
    }
  }, [setUnits]);

  useEffect(() => {
    getUnits();
  }, [getUnits]);

  const selectUnit = (event, unit) => {
    event.target.name = 'unit';
    event.target.value = unit;
    handleChange(event);
    toggleState();
  };

  const selectNewUnit = (unit) => {
    const event = {target: {}};
    selectUnit(event, unit);
  };

  return (
    <div className="unit-options">
      <div>
        {units.map((unit) => (
          <div
            key={unit.name + Math.random()}
            onClick={(e) => selectUnit(e, unit.name)}
          >
            <p>{unit.name}</p>
          </div>
        ))}
      </div>
      <AddUnit
        selectUnit={(unit) => selectNewUnit(unit)}
        closeUnitOptions={toggleState}
      />
    </div>
  );
};

export default UnitOptions;

import React, { useState, useMemo } from 'react';

/**
 * Generalized implementation of a dropdown menu for various types of filters.
 * @param {String} category key of a dropdownOptions item
 * @param {dict} options label and value of the dropdownOptions item
 * @param {arr} selected array of the currently selected checkbox values
 * @param {Function} onToggle callback to handle behaviour when selecting or unselecting a checkbox
 * @returns {JSX.Element} a dropdown menu containing checkboxes
 */
const ToggleMenu = ({ category, options, selected, onToggle}) => {
  const [active, setActive] = useState(false);

  const processedOptions = useMemo(() => {
    let list = [...options]; 

    // If filtering by players, sort by jersey number and include a Select All option.
    if (category === 'players') {
      list.sort((a, b) => {
        const getNum = (str) => parseInt(str.match(/\[(\d+)\]/)?.[1], 10) || 0;
        return getNum(a.label) - getNum(b.label);
      });
      list = [{ label: "Select All", value: "SELECT_ALL" }, ...list];
    }

    return list;
  }, [category, options]);

  const handleToggle = (value) => {
    if (value === "SELECT_ALL") {
      const allPlayerValues = options.map(o => o.value);
      const isAllSelected = selected.length === options.length;
      
      // If all items are already selected, deselect all.
      onToggle(isAllSelected ? [] : allPlayerValues);
    } else {
      onToggle(value);
    }
  };

  const allSelected = selected.length === options.length;

  return (
    <div className="filter-container">
      <span>{category.replace(/([A-Z])/g, ' $1')}</span>
      <div className="filter-pill" onClick={() => setActive(!active)}>
        <span>{selected.length === options.length ? 'All' : `${selected.length} Selected`}</span>
        <span>{active ? '∧' : '∨'}</span>
      </div>

      {active && (
        <div className='filter-options'>
          {processedOptions.map(o => (
            <div key={o.value} onClick={() => handleToggle(o.value)} style={{padding: '6px 0'}}>
              <input type="checkbox" checked={o.value === "SELECT_ALL" ? allSelected : selected.includes(o.value)} readOnly/>
              <span style={{marginLeft: '5px'}}>{o.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ToggleMenu
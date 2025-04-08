import React from 'react'
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '32px',
    height: '32px',
    padding: '0 6px',
    fontSize: '14px',
    borderColor: state.isFocused ? '#2684FF' : '#ccc',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 6px',
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '4px',
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: '0px',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    padding: '6px 12px',
    backgroundColor: state.isFocused ? '#f2f7ff' : 'white',
    color: '#222',
    cursor: 'pointer',
  }),
};
const SelectItem = ({ options = [], defaultValue,placeholder  }) => {
  return (
    <>
       <Select options ={options}
          defaultValue={defaultValue}
          placeholder={placeholder} 
          styles={customStyles}
          isSearchable={false}
          components={{ IndicatorSeparator: () => null }}
        />
    </>
  )
}

export default SelectItem
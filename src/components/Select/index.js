import React from 'react'
import Select from 'react-select'

const customStyles = {
    control: (styles) => ({ ...styles, 
      backgroundColor: 'white',
      height:'50px',
      width:'150px',
      borderRadius:'0',
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      }
    }),
    indicatorsContainer: (styles)=>({ ...styles,
      backgroundColor: '#4a1e74',
      marginTop:'0',
      height:'50px',
      width:'50px',
      display:'flex',
      justifyContent: 'center',
      cursor:'pointer',
    }),
    indicatorSeparator: ()=>({}),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: '#fff',
      '&:hover': {
        color: '#ffffff8c',
      }
  }),
}
const SelectComponent = ({...rest}) => {
  return(
  <Select 
    styles={customStyles}
    {...rest}
    />
  )
}

export default SelectComponent;
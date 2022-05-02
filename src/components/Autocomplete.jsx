import {useState} from "react";

const Autocomplete = (props) => {
  const {query, onQueryChange, options, onSelect} = props;
  const [optionsVisible, setOptionsVisible] = useState(false);

  const close = () => {
    setOptionsVisible(false)
  }
  const handleInputChange = (event) => {
    onQueryChange(event.currentTarget.value)
  event.currentTarget.value.length >= 3 &&  setOptionsVisible(true)
  }

 

  return (
    <div className="autocomplete" onClick={close}>
      <input 
      type= 'search'
        // onFocus={() => setOptionsVisible(true)}
        // onBlur={() => setOptionsVisible(false)}
        className="autocomplete-search"
        value={query}
        onChange={(event) => handleInputChange(event)}
      />
      {optionsVisible && <div className="autocomplete-options">
        {options.length === 0 && query.length >= 3 && <div className="autocomplete-empty">No options</div>}
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => onSelect(option)}
            className="autocomplete-option">
            <h4>{option.title}</h4>
            <p style={{color: '#3d3c3c', fontSize: '13px'}}>{option.vote_average} Rating, {option.release_date ? option.release_date.substring(0, 4) : '-'}</p>
          </div>
        ))}
      </div>}
    </div>
  )

};

export default Autocomplete;





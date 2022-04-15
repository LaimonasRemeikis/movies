import {useState} from "react";

const Autocomplete = (props) => {
  const {query, onQueryChange, options, onSelect} = props;
  const [optionsVisible, setOptionsVisible] = useState(false);

  return (
    <div className="autocomplete">
      <input
        onFocus={() => setOptionsVisible(true)}
        onBlur={() => setOptionsVisible(false)}
        className="autocomplete-search"
        value={query}
        onChange={(event) => onQueryChange(event.currentTarget.value)}
      />
      <div className="autocomplete-options">
        {options.length === 0 && query.length >= 3 && <div className="autocomplete-empty">No options</div>}
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => onSelect(option)}
            className="autocomplete-option">
            <span>{option.title}</span>
          </div>
        ))}
      </div>
    </div>
  )

};

export default Autocomplete;

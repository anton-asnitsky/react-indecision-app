import React    from 'react';;
import Option   from './Option';

const Options = (props) => {
    const items = props.options.map((option) => (
        <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
        />
    ));
    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}>Remove All
            </button>
            {props.options.length === 0 && <p>Please add an option to get statrted</p>}
            {items}
        </div>
    );
};

export default Options;
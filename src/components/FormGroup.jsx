import React from "react";

export let FormGroup = React.forwardRef((props, ref) => {
    return (
        <div className="form-group">
            <label htmlFor="form-group-input" className="form-label">
                {props.label}
            </label>
            <input
                type={props.type}
                id="form-group-input"
                name=""
                className="form-input"
                placeholder={props.placeholder}
                ref={ref}
            />
        </div>
    );
})


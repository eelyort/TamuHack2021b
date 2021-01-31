import React, { useState } from "react";

import { TextField } from "@material-ui/core";

export default function Textinput (props) {
    const [val, setVal] = useState(() => '');

    return (
        <TextField value={val} onChange={(e) => {
            setVal(e.target.value);
            props.tellChange(e.target.value);
        }} {...props} />
    );
}
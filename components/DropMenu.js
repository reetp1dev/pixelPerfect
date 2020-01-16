import React from "react";

import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function DropMenu(props) {
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={props.className}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          {props.type}
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange("age")}
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple"
          }}
        >
          <option value="" />
          <option value={1}>Type 1</option>
          <option value={2}>Type 2</option>
          <option value={3}>Type 2</option>
        </Select>
      </FormControl>
    </div>
  );
}

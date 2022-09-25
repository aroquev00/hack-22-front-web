import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";

const FormWithoutHookForm = () => {
  const [textValue, setTextValue] = useState<string>("");

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");

  return (
    <Paper>
      <h2>Ingrese Los Datos</h2>
      <div>
        <div>
          <TextField
            onChange={onTextChange}
            value={textValue}
            label={"Fecha"} //optional
          />
        </div>

        <div>
          <TextField
            onChange={onTextChange}
            value={textValue}
            label={"Cantidad de Gasolina"} //optional
          />
        </div>
        <div>
          <TextField
            onChange={onTextChange}
            value={textValue}
            label={"Odometro"} //optional
          />
        </div>
        <div>
          <TextField
            onChange={onTextChange}
            value={textValue}
            label={"Mismatch"} //optional
          />
        </div>
        <div>
          <TextField
            onChange={onTextChange}
            value={textValue}
            label={"Rendimiento"} //optional
          />
        </div>
        <div>
          <TextField
            onChange={onTextChange}
            value={textValue}
            label={"Modelo de carro"} //optional
          />
        </div>
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};

export default FormWithoutHookForm;

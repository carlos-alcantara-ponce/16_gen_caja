import React, { useState } from 'react'

const FormDatos = props => {

    const { datosState, fcambiaState } = props;

    // console.log("1");

    const [color, setColor] = useState("");
    const [dim, setDim] = useState("");

    const asignaColor = (e) => {
        setColor(e.target.value);

    };
    const asignaDim = (e) => {
        setDim(e.target.value);
    };


    const asignaDatos = (e) => {
        e.preventDefault();
        fcambiaState
            (
                [...datosState,
                {
                    "color": color,
                    "dim": dim,
                    "style":
                    {
                        "display": "inline-block",
                        "background": `#${color}`,
                        "height": `${dim}px`,
                        "width": `${dim}px`
                    }
                }
                ]
            )
        setColor("");
        setDim("");
    };



    return (
        <div>

            <form className="row mb-3" onSubmit={asignaDatos}>
                <label>Color: </label>
                <input className="form-control" onChange={asignaColor} type="text" name="colorInput" value={color} />
                <label>Dimensiones: </label>
                <input className="form-control" onChange={asignaDim} type="text" name="dimInput" value={dim} />
                <input className="btn btn-primary" type="submit" value="Add" />
            </form>
        </div>
    )




};

export default FormDatos;



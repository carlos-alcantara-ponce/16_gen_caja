import React from 'react';


const GenCajas = props => {

    console.log(props);

    const { caja } = props;
    const { style, ...others } = caja;

    return (
        <div className="m-2" style={style} >
        </div>


    )

};

export default GenCajas;
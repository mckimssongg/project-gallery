import React from "react";

import ReactLoading from "react-loading";

const Loader = () => {
    return (
        <React.Fragment>
            <br />
        <ReactLoading type={"cubes"} color={"#000"} height={'20%'} width={'20%'} />
        </React.Fragment>
    );
    }

export default Loader;
// src/components/country-flag.js

import React from "react";

import JpFlag from "../assets/jp.svg"
import USFlag from "../assets/us.svg"
import AusFlag from "../assets/au.svg"
import NZFlag from "../assets/nz.svg"
import DefaultFlag from "../assets/un.svg"


const CountryFlag = (props) => {
    var flag = DefaultFlag;
    switch (props.country) {
        case 'Japan':
            flag = JpFlag;
            break;
        case 'United States':
            flag = USFlag;
            break;
        case 'Australia':
            flag = AusFlag;
            break;
        case 'New Zealand':
            flag = NZFlag;
        // eslint-disable-next-line no-fallthrough
        default:
        //do nothing
    }
    return (
        <div className="col-md-1 mb-3">
            <img
                src={flag}
                alt="country flag"
                className="rounded-0"
            />
        </div>
    );


};

export default CountryFlag;
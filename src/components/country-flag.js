// src/components/country-flag.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import JpFlag from "../assets/jp.svg"
import USFlag from "../assets/us.svg"
import AusFlag from "../assets/au.svg"
import NZFlag from "../assets/nz.svg"
import DefaultFlag from "../assets/un.svg"


const CountryFlag = () => {
    const { user } = useAuth0();
    const { 'https://example.com/country': country } = user;
    var flag = DefaultFlag;
    switch (country) {
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
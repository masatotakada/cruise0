// src/components/email-verification.js

import React from "react";

const EmailVerified = (props) => {

    if (props.emailstatus) {
        return null;
    }
    return (
        <p className="lead">
            <mark>
                <strong>
                    Your Email has not been verified!
                </strong>
            </mark>
        </p>
    );
};

export default EmailVerified;
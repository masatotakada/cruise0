// src/components/email-verification.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react"

const EmailVerified = () => {
    const { user } = useAuth0();
    const { email_verified } = user;

    if (email_verified) {
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
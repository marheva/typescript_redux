import React from "react";

interface AlertTypes {
    type: string,
    text: string
}
export default function Alert({ type, text }: AlertTypes): JSX.Element {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {text}
        </div>
    )

}
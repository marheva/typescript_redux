import React from "react";

export default function Loader(): JSX.Element {
    return (
        <div className='spinner-border text-danger' role='status'>
            <span className='rs-only' />
        </div>
    )
}
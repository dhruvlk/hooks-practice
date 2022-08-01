import React, { useState } from 'react'

const Logical = () => {
    const [show, setShow] = useState(0)
    return (
        <>
            <h1>Logical operator</h1>

            <p>{show}</p>
            <button onClick={() => setShow(1)}>Show Details</button>

            {show === 1 && <h5>Hello Dhruv</h5>}
        </>
    )
}

export default Logical

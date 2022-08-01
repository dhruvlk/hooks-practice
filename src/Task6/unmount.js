import React, { useState } from 'react'
import Component from './index'


function WrapperUnmount() {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Unmount</button>
            {toggle && <Component />}
        </div>
    )
}

export default WrapperUnmount

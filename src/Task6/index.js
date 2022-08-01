// import React, { useEffect } from "react"
// const Component = ({ dhruv }) => {
//     useEffect(() => {
//         console.log("Behavior before the component is added to the DOM")
//     }, [dhruv])
//     return <h1>Hello</h1>
// }
// export default Component
import React, { useEffect, useState } from 'react'

function Component() {

    const [count, setCount] = useState(0)
    const updateCount = () => setCount(count + 1)
    useEffect(() => {
        console.log("Component mount")
        return () => {
            console.log("unmount")
        }
    }, [])

    useEffect(() => {
        console.log("count Update")
    }, [count])

    return (
        <button onClick={updateCount}>{count}</button>
    )
}

export default Component

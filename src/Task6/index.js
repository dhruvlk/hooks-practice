import React, { useEffect } from "react"
const Component = ({ dhruv }) => {
    useEffect(() => {
        console.log("Behavior before the component is added to the DOM")
    }, [dhruv])
    return <h1>Hello</h1>
}
export default Component

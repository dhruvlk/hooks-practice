import React, { useEffect } from "react"

const ComponentFoo = ({ Dhruv }) => {
    useEffect(() => {
        console.log("Behavior when the value of 'foo' changes.")
    }, [Dhruv])

    return <h1>Hello</h1>
}

export default ComponentFoo

import React from 'react'

const Child = props => {
    const person = {
        name: 'Dhruv',
        age: 22
    }

    const buttonClickHandler = () => {
        props.passData(person)
    }

    return <div>
        <button onClick={buttonClickHandler}>Show the info</button>
    </div>
}

export default Child

import React from 'react'

function MissedGoal() {
    return (
        <>
            <h1>Ternary Condition</h1>
            <h2>MISSED!</h2>
        </>
    )
}

function MadeGoal() {
    return (
        <>
            <h1>Ternary Condition</h1>
            <h2>GOAL!</h2>
        </>
    )
}

function Goal(props) {
    const isGoal = props.isGoal
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
}

export default Goal

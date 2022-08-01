import { useState } from 'react'
import './style.css'
import NameData from '../Task1/nameData'
import ListData from '../Task2/listItem'
import LoggedStatus from '../Task3/LoggedStatus'
import Goal from '../Task4/Goal'
import Logical from '../Task5/Logical'
import Component from '../Task6'
import CounterApp from '../Task7'
import Form from '../Task8'

function ShowBtn() {
    const [isShown, setIsShown] = useState(false)
    const [listData, setListData] = useState(false)
    const [LoggedData, setLoggedStatus] = useState(false)
    const [goalData, setGoalData] = useState(false)
    const [LogicalData, setLogicalData] = useState(false)
    const [ComponentData, setComponentData] = useState(false)
    const [CounterData, setCounterData] = useState(false)
    const [FormData, setFormData] = useState(false)

    const handleClick = event => {
        setIsShown(current => !current)
    }
    const handle = event => {
        setListData(current => !current)
    }
    const Logged = event => {
        setLoggedStatus(current => !current)
    }
    const GoalHandle = event => {
        setGoalData(current => !current)
    }
    const LogicalHandle = event => {
        setLogicalData(current => !current)
    }
    const ComponentHandle = event => {
        setComponentData(current => !current)
    }
    const CounterDataHandle = event => {
        setCounterData(current => !current)
    }
    const FormDataHandle = event => {
        setFormData(current => !current)
    }

    return (
        <div>
            <div className="wrap">
                <button className='button' onClick={handleClick}>Task 1</button>&nbsp;&nbsp;
                <button className='button' onClick={handle}>Task 2</button>&nbsp;&nbsp;
                <button className='button' onClick={Logged}>Task 3</button>&nbsp;&nbsp;
                <button className='button' onClick={GoalHandle}>Task 4</button>&nbsp;&nbsp;
                <button className='button' onClick={LogicalHandle}>Task 6</button>&nbsp;&nbsp;
                <button className='button' onClick={ComponentHandle}>Task 7</button>&nbsp;&nbsp;
                <button className='button' onClick={CounterDataHandle}>Task 8</button>&nbsp;&nbsp;
                <button className='button' onClick={FormDataHandle}>Task 9</button>&nbsp;&nbsp;
            </div>

            <br />
            <br />
            {isShown && <NameData />}
            {listData && <ListData />}
            {LoggedData && <LoggedStatus isLoggedIn={true} />}
            {goalData && <Goal isGoal={false} />}
            {LogicalData && <Logical />}
            {ComponentData && <Component />}
            {CounterData && <CounterApp />}
            {FormData && <Form />}
        </div>
    )
}

export default ShowBtn


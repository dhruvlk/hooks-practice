import React, { useState } from 'react'
import Child from './Child'

const NameData = () => {
    const [childData, setChildData] = useState({
        name: 'unknown',
        age: 'unknown'
    })
    const passData = (data) => {
        setChildData(data)
    }

    return (
        <>
            <div className="nameData">
                <Child passData={passData} />
                <p>
                    <h1>Name And Age As Props</h1>
                    <strong>{childData.name}</strong>
                    <br />
                    <strong>{childData.age}</strong>
                </p>
            </div>
        </>
    )
}

export default NameData

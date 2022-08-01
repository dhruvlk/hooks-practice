import React from 'react'
import ReactDOM from 'react-dom/client'
import ShowBtn from './AllBtn'
import WrapperUnmount from './Task6/unmount'
import Wrapper from './Task6/Wrapper'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        {/* <ShowBtn /> */}
        {/* {<Wrapper />} */}
        <WrapperUnmount />

    </>
)


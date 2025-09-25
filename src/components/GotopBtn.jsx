import React from 'react'

const GotopBtn = () => {
    function backtop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <button className="gotop" onClick={backtop}>
                <span className="circle">
                    <span className="icon arrow"></span>
                </span>
                <span className="btn-text">TOP</span>
            </button>
        </>
    )
}

export default GotopBtn
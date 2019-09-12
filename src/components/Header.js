import React from "react"

const Header = (props) => {

    let date= props.date
    let title = props.title

    //first date June 16, 1995
    const randomDate = () => {
        props.setIsCustom(true)
        const longMonths = ['1','3','5','7','8','10','12']
        const shortMonths = ['4','6','9','11']
        const isLeapYear = (year) =>{
            return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
        }
        let totalDays = 28
        let rdmMonth=6
        let rdmDay=16
        let rdmYear= (Math.floor(Math.random()*24)+1996).toString()
        if(rdmYear===1995) rdmMonth = (Math.floor(Math.random()*7)+7).toString()
        else rdmMonth= (Math.floor(Math.random()*12)+1).toString()
        if(longMonths.includes(rdmMonth)) totalDays=31
        else if(shortMonths.includes(rdmMonth)) totalDays=30
        else if(isLeapYear(rdmYear)) totalDays=29
        if(rdmYear===1995&&rdmMonth===6) rdmDay= (Math.floor(Math.random()*15)+17).toString()
        else rdmDay= (Math.floor(Math.random()*totalDays)+1).toString()
        let tempDate= `${rdmYear}-${rdmMonth}-${rdmDay}`

        props.setDate(tempDate)
    }

    const chooseDate = () => {
        props.setIsCustom(true)
        const newDate = prompt('New Date(format YYYY-MM-DD.  Earliest 1995-06-15)')
        props.setDate(newDate)
    }

    return (
        <div className="header-container">
            <h1 className="title">{title}</h1>
            <div className="button-container">
                <button
                    className="rdm-date-button"
                    name="rdm-date"
                    onClick={e=>randomDate()}
                >
                    Random Date
                </button>
                <h3 className="date">{date}</h3>
                <button
                    className="choose-date-button"
                    name="choose-date"
                    onClick={e=>chooseDate()}
                >
                    Choose Date
                </button>
            </div>
            
        </div>
    )
}

export default Header
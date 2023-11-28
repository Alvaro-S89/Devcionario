import React from 'react'
import './Body.css'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";


function Body( {selectedResult} ) {

    console.log(selectedResult)

    return (
        <>
            <h1>
                {selectedResult.titulo}
            </h1>
            <div className='definition'>
                <p className='desc'>
                    <ImQuotesLeft className='quotes leftQuotes'/>
                        {selectedResult.contenido}
                    <ImQuotesRight className='quotes rightQuotes'/>
                </p>
            </div>
        </>
    )
}

export default Body

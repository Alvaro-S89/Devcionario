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
                <div className='desc'>
                    {selectedResult.contenido ? (
                        <>
                            <ImQuotesLeft className='quotes leftQuotes'/>
                                <span>{selectedResult.contenido}</span>
                            <ImQuotesRight className='quotes rightQuotes'/>
                        </>
                    ) : (
                        <>
                            <ImQuotesLeft className='quotes leftQuotes'/>
                                Aprender es un tesoro que seguirá a su dueño por todas partes.
                            <ImQuotesRight className='quotes rightQuotes'/>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Body

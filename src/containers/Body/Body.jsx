import React from 'react'
import './Body.css'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Body() {
    return (
        <>
        {/* Aqui un mapeo de los results que vendrán con props {results.map(result => ( a partir de la linea de abajo hasta el cierre ))} */}
        {/* aqui un div que coja todo con su key={result.id} */}
            <h1>
                Concept
            </h1>
            <div className='definition'>
                <p className='desc'>
                    <ImQuotesLeft className='quotes leftQuotes'/>
                        Lorem ipsum dolor,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non fugit saepe sit nisi quis earum eaque quaerat quasi cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis recusandae ut atque ullam fuga accusamus, dolorem, laudantium ratione illo nisi reprehenderit, placeat dicta. Assumenda eius eos veniam molestias quae. Fuga odio consectetur suscipit? Earum amet eligendi fuga eos debitis? sit amet consectetur adipisicing elit. At nesciunt sunt id nobis quaerat quibusdam, perspiciatis facilis beatae, perferendis omnis dolor eum in enim fugit, libero accusamus natus! Cupiditate, facilis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore iusto nostrum non deserunt ducimus. Officiis consectetur eos quaerat fugit, eum eveniet. Consequatur debitis eveniet sit repellendus. Accusamus, nihil pariatur!
                    <ImQuotesRight className='quotes rightQuotes'/>
                </p>
            </div>
        </>
    )
}

export default Body
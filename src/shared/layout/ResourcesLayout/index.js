import React from 'react'

export const ResourcesLayout = ({
   title,
   notFound,
   handleChange,
   list
}) => {
   return (
      <>
         <h1>{title}</h1>

         <input type='text' placeholder={`Pesquise por ${title}...`} onChange={handleChange} />

         <ul>
            {
               notFound

                  ? // filme não encontrado
                  <p>Filme não encontrado!</p>

                  : // filmes filtrados
                  list.map((item, index) => (
                     <li key={index}>
                        <img src={item.poster_path} alt={item.title} />
                        {item.title}
                     </li>
                  ))
            }
         </ul>
      </>
   )
}



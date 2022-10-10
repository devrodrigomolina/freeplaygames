import React from 'react'

const Error = ({error}) => {
  return <h2 style={{color: 'red', textAlign: 'center'}}>Algo inesperado aconteceu: ERRO: {error} </h2>
}

export default Error
import React from 'react'
import styled from 'styled-components'

export const CardCliente = () => {
  return (
    <ContenCard>
      <div className="card-container">
        <div className="card">
          <div className="card__img">
            <img src="" alt="" />
          </div>

          <div className="card__body">
            <p className='Nombre'></p>
          </div>
          
        </div>
      </div>
    </ContenCard>
  )
}


const ContenCard = styled.section`
  width: 100%;
  border: 1px solid red;

  .card-container{
    width: 100%;

    .card{
      width: 212px;
      height: 221px;
      border: 1px solid green;
    }

  }



`;

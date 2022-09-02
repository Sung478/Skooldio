import React from 'react'
import Round from './Round'

export default function Roundlist({rounds}) {
  return (
    <div className='Roundlist'>
        {rounds.map( round => < Round round={round} key={round} />)}
    </div>
  ) 
}

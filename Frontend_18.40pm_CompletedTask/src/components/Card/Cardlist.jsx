import React, { useEffect, useState } from 'react'
import axiosInstance from '../../config/axios'
import Card from './Card'

export default function Cardlist() {

    const [data, setData] = useState([])
    const [isLoaing, setIsLoading] = useState(true)

    const getData = async () => {
        const response = await axiosInstance.get()
        setData(response.data)
        setIsLoading(false)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [isLoaing])

  return (
    <div className='Cardlist'>
        { data.map( card => < Card card={card} key={card.id}/>)}
    </div>
  )
}

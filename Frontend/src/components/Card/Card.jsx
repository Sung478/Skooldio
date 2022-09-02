import React, { useState } from 'react'
import Score from '../Score/Score'
import axiosInstance from '../../config/axios'
import data from '../data'

import './Card.css'
import { useEffect } from 'react'

export default function Card() {

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
    <div className='Card'>
        <div className='heading'>
            <div className='head-img'><img src="/E1C634CA-30D1-4DE1-A83E-5646826F34BD.svg" alt='logo'/></div>
            <div className='head-name'>
                <h3>คณะวิศวกรรมศาสตร์</h3>
                <h4>สาขาวิศวกรรมทั่วไป</h4>
                <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
            </div>
            <div id='heart'><img src='/8935CE81-636B-40F9-9E61-281EF189594F.png' alt='heart'/></div>
        </div>
            <div className='round-score'>
                <div className='round'>
                    <p>รอบที่</p>
                    <div><p>1</p></div>
                    <div><p>2</p></div>
                    <div><p>3</p></div>
                    <div><p>4</p></div>
                    <div><p>5</p></div>
                </div>
                <Score />
                <div className='score-more'>
                    <img src='/play-button-arrowhead.png'/>
                    <p>สัดส่วนคะแนน</p>
                </div>
                <div className='card-footer'>
                    <div>
                        <img src='/default-profile.png' alt='human'/>
                        <p>10</p>
                        <p><em>คนที่สนใจ</em></p>
                    </div>
                    <img src='/541ED811-D07F-47D6-8C07-62FC74AC4B2F.svg' alt='share' />
                </div>
            </div>
        </div>
  )
}

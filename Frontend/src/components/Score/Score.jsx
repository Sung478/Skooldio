import React from 'react'
import './Score.css'

export default function Score({score}) {

    if(score == null){
        return (
            <div className='score'>
            <div className='score-head'>
                <p>รอบที่ 4: Admission</p>
                <div>
                    <p>แก้ไขคะแนน</p>
                    <img src='/A08F4277-1FD0-488F-9791-3ED70CB9F9E1.png' alt='edit' />
                </div>
            </div>
            <div className='score-detail'>
                <div className='my-score-box'>
                    <img src='/355696EA-8BA6-4F08-B4ED-8B11881F2BBA.svg' alt='my score' />
                    <div className='my-score'>
                        <p>คะแนนของคุณคือ</p>
                        <h1>23,453</h1>
                    </div>
                </div>
                {/* <div> */}
                    <div className='score-rate'>
                        <div>
                            <h3>-</h3>
                            <p>คะแนนต่ำสุด 60</p>
                        </div>
                        <div>
                            <h3>-</h3>
                            <p>คะแนนเฉลี่ย 60</p>
                        </div>
                        <div style={{borderRight:"none"}}>
                            <h3>-</h3>
                            <p>คะแนนสูงสุด 60</p>
                        </div>
                    </div>
                {/* </div> */}
                
            </div>

        </div>
        )
    }

    return (
        <div className='score'>
            <div className='score-head'>
                <p>รอบที่ 4: Admission</p>
                <div>
                    <p>แก้ไขคะแนน</p>
                    <img src='/A08F4277-1FD0-488F-9791-3ED70CB9F9E1.png' alt='edit' />
                </div>
            </div>
            <div className='score-detail'>
                <div className='my-score-box'>
                    <img src='/355696EA-8BA6-4F08-B4ED-8B11881F2BBA.svg' alt='my score' />
                    <div className='my-score'>
                        <p>คะแนนของคุณคือ</p>
                        <h1>23,453</h1>
                    </div>
                </div>
                {/* <div> */}
                    <div className='score-rate'>
                        <div>
                            <h3>{score.min.toLocaleString('en-US') === 0 ? '-' : score.min.toLocaleString('en-US')}</h3>
                            <p>คะแนนต่ำสุด 60</p>
                        </div>
                        <div>
                            <h3>{score.avg.toLocaleString('en-US') === 0 ? '-' : score.avg.toLocaleString('en-US')}</h3>
                            <p>คะแนนเฉลี่ย 60</p>
                        </div>
                        <div style={{borderRight:"none"}}>
                            <h3>{score.max.toLocaleString('en-US') === 0 ? '-' : score.max.toLocaleString('en-US')} </h3>
                            <p>คะแนนสูงสุด 60</p>
                        </div>
                    </div>
                {/* </div> */}
                
            </div>

        </div>
    )
}

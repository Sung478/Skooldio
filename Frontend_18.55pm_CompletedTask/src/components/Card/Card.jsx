import Roundlist from '../Round/Roundlist'
import Score from '../Score/Score'

import './Card.css'

export default function Card({card}) {

  return (
    <div className='Card'>
        <div className='heading'>
            <div className='head-img'><img src={card.logo} alt='logo'/></div>
            <div className='head-name'>
                <h3>{card.faculty.name}</h3>
                <h4>{card.name}</h4>
                <p>{card.faculty.university.name}</p>
            </div>
            <div id='heart'><img src='/8935CE81-636B-40F9-9E61-281EF189594F.png' alt='heart'/></div>
        </div>
            <div className='round-score'>
                <div className='round'>
                    <p>รอบที่</p>
                    <Roundlist rounds={card.roundSeats}/>
                </div>
                <Score score={card.score}/>
                <div className='score-more'>
                    <img src='/play-button-arrowhead.png'/>
                    <p>สัดส่วนคะแนน</p>
                </div>
                <div className='card-footer'>
                    <div>
                        <img src='/default-profile.png' alt='human'/>
                        <p>{card.likes}</p>
                        <p><em>คนที่สนใจ</em></p>
                    </div>
                    <img src='/541ED811-D07F-47D6-8C07-62FC74AC4B2F.svg' alt='share' />
                </div>
            </div>
        </div>
  )
}

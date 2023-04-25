import './BoardingPass.css'

export function BoardingPass(){
    return(
        <div className='boarding-pass'>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            
            <div className='top'>
                <div className='date-flight'>
                    <div className='info-name'>
                        <span>Voo</span>
                        <span>Data</span>
                    </div>
                    <div className='info-value'>
                        <span>RS995</span>
                        <span>25/04/2023</span>
                    </div>
                </div>
                <div className="destination">
                    <div className='info-name'>
                        <span>Sao Paulo, Brasil</span>
                        <span>Sao Francisco, EUA</span>
                    </div>
                    <div>
                        <h2>GRU</h2>
                        <img src="src/assets/plane.svg" alt="" />
                        <h2>SFO</h2>
                    </div>
                    <div>
                        <span className='time'>17:00</span>
                        <span className='time'>04:48</span>
                    </div>
                </div>

            </div>
            <div className='mid'>
                <div className="info-name">
                    <span>Passageiro</span>
                    <span>Assento</span>
                </div>
                <div className="info-value">
                    <span>Pedro Ribeiro</span>
                    <span>30E</span>
                </div>
            </div>
            <div className='bottom'>
                <div className="left">
                    <div className="info-block">
                        <span>Embarque</span>
                        <span className='boarding-time'>16:15</span>
                    </div>
                    <div className="info-block">
                        <span>Terminal</span>
                        <span className='value'>2</span>
                    </div>
                    <div className="info-block">
                        <span>Portão</span>
                        <span className='value'>15</span>
                    </div>
                </div>
                <div className="right">
                    <img src="src/assets/qrcode.svg" alt="" className='qr-code'/>
                    <span>Grupo de embarque: 3</span>
                </div>
            </div>
            <div className='warning'><span>Atenção: </span>o portão fecha as 16:45</div>
        </div>
    )
}
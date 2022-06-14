import Lee from './Lee_2.jpg'
import './Info.css'
import Email from './Icon.png'
import linkedin from './linkedin.png'

export default function Leepic(){
    return(
        <div className='top'>
            <img src={Lee} alt="Lee Drennan" className='top--leePic' />
            <h1 className='top--leeName'>Lee Drennan</h1>
            <h2 className='top--occupation'>Frontend Developer</h2>
            <h3 className='top--email'>leedrennan279@gmail.com</h3>
            <div className='top--btn-selection'>
                <button className='top--email-btn'>
                    <img src={Email} alt='email_icon' className='top--email-icon'/>
                    Email
                </button>
                <button className='top--linkedIn-btn'>
                    <img src={linkedin} alt='email_icon' className='top--linkedin-icon'/>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}
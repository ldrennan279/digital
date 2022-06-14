import './Footer.css'
import facebook from './Facebook Icon.png'
import twitter from './Twitter Icon.png'
import git from './GitHub Icon.png'

export default function Footer(){
    return (
        <div className='footer--section'>
            <div className='footer--img-section'>    
                <img src={facebook} alt="Facebook link" className='img1' />
                <img src={twitter} alt="Facebook link" className='img2' />
                <img src={git} alt="Facebook link" className='img3' />
            </div>    
        </div>
    )
}
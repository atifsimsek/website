import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'



const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer'>
                <BsLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" rel='noreferrer'>
                <FaGithub />
            </a>
            <a href="https://twitter.com/" target="_blank" rel='noreferrer'>
                <BsWhatsapp />
            </a>

        </div>
    )
}

export default HeaderSocials
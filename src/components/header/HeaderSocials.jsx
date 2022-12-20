import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'



const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a href="https://www.linkedin.com/in/at%C4%B1f-%C5%9Fim%C5%9Fek-179b07177/" target="_blank" rel='noreferrer'>
                <BsLinkedin />
            </a>
            <a href="https://github.com/atifsimsek" target="_blank" rel='noreferrer'>
                <FaGithub />
            </a>
            <a href="https://twitter.com/atifsimsek_" target="_blank" rel='noreferrer'>
                <IoLogoTwitter />
            </a>

        </div>
    )
}

export default HeaderSocials
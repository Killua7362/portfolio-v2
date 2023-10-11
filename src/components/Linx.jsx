

import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { SiMyanimelist, SiGmail } from 'react-icons/si'
const Linx = () => {
    return (
              <div className='flex pt-2 gap-2'>
                <a href="https://github.com/Killua7362" target="_blank" rel="noopener noreferrer" className='text-text'>
                  <FaGithub size={23} />
                </a>
                <a href="https://twitter.com/Killua7362" target="_blank" rel="noopener noreferrer" className='text-text'>
                  <FaTwitter size={23} />
                </a>
                <a href="https://www.linkedin.com/in/killua7362/" target="_blank" rel="noopener noreferrer" className='text-text'>
                  <FaLinkedin size={23} />
                </a>
                <a href="mailto:bhat7362@gmail.com" className='text-text'>
                  <SiGmail size={23} />
                </a>
                <a href="https://www.instagram.com/___killuaa/" target="_blank" rel="noopener noreferrer" className='text-text'>
                  <FaInstagram size={23} />
                </a>
                <a href="https://myanimelist.net/profile/Killua7362" target="_blank" rel="noopener noreferrer" className='text-text'>
                  <SiMyanimelist size={25} />
                </a>
              </div>
      );
}
 
export default Linx;
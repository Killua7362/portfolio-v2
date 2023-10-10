

import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { SiMyanimelist, SiGmail } from 'react-icons/si'
const Linx = () => {
    return (
              <div className='flex pt-2 gap-2'>
                <a href="https://github.com/Killua7362" target="_blank" rel="noopener noreferrer" className='text-black'>
                  <FaGithub size={23} />
                </a>
                <a href="https://twitter.com/Killua7362" target="_blank" rel="noopener noreferrer" className='text-black'>
                  <FaTwitter size={23} />
                </a>
                <a href="https://www.linkedin.com/in/killua7362/" target="_blank" rel="noopener noreferrer" className='text-black'>
                  <FaLinkedin size={23} />
                </a>
                <a href="mailto:bhat7362@gmail.com" className='text-black'>
                  <SiGmail size={23} />
                </a>
                <a href="https://www.instagram.com/___killuaa/" target="_blank" rel="noopener noreferrer" className='text-black'>
                  <FaInstagram size={23} />
                </a>
                <a href="https://myanimelist.net/profile/Killua7362" target="_blank" rel="noopener noreferrer" className='text-black'>
                  <SiMyanimelist size={25} />
                </a>
              </div>
      );
}
 
export default Linx;
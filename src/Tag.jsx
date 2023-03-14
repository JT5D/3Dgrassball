import { Logo } from '@pmndrs/branding'
import { FaGithub } from 'react-icons/fa'

export default function Tag() {
  return (
    <div className="copy">
      <span>
        <a target="_blank" href="https://github.com/jt5d/3dgrassball">
          <Logo />
        </a>
      </span>

      <span>
        Made with 🧡 by{' '}
        <a target="_blank" href="https://twitter.com/TheIMCLab">
          JT5D
        </a>
      </span>

      <span>
        <a target="_blank" href="https://github.com/imclab">
          <FaGithub size={40} />
        </a>
      </span>
    </div>
  )
}

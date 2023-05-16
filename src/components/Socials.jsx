import {
  ImInstagram,
  ImFacebook,
  ImTwitter
} from 'react-icons/im';

export default function Socials() {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className='flex gap-x-4'>
        <li>
          <a href="https://www.instagram.com/euphoria_.weddings/" target='_blank'><ImInstagram /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/euphoria_.weddings/" target='_blank'><ImFacebook /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/euphoria_.weddings/" target='_blank'><ImTwitter /></a>
        </li>
      </ul>
    </div>
  )
}
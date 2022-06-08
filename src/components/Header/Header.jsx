import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="apple"/>
      <div>
        <ul>
          <li className="mark-1">Aas</li>
          <li className="mark-2">asdassad</li>
          <li className="mark-3">asdsadasd</li>
          <li className="mark-4">asdsa</li>
          <li className="mark-5">asdasd</li>
        </ul>
      </div>
    </header>
  )
}

export default Header;

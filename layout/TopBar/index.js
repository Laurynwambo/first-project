import React from 'react'
import FavPages from './FavPages'
import LanguageSwitcher from './LanguageSwitcher'
import Actions from './Actions'
import UserMenu from './UserMenu'
import style from './style.module.scss'

const TopBar = () => {
  return (
    <div className={style.topbar}>
      <div className="mr-4">
        <FavPages />
      </div>
      <div className="ml-auto mr-4 d-none d-sm-block">
        <LanguageSwitcher />
      </div>
      <div className="mr-4 d-none d-sm-block">
        <Actions />
      </div>
      <div className="">
        <UserMenu />
      </div>
    </div>
  )
}

export default TopBar

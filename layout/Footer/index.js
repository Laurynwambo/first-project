import React from 'react'
import style from './style.module.scss'

const Footer = ({ copyrightText }) => {
  return (
    <div className={style.footer}>
      <div className={style.footerInner}>
        <p className="mb-0">{copyrightText}</p>
      </div>
    </div>
  )
}

export default Footer

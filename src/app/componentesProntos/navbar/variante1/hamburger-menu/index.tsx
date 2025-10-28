'use client'

import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import './index.css'
import PageName from '../../../../types/PageName'
import Link from 'next/link'

export default function HamburgerMenu(props: { pages: PageName[] }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
        <nav className="navbar">
            <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} size={28} />
            </div>

    
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <ul>
            {props.pages.map((page, index) => (
                <li key={index}>
                    <Link href={page.url}>{page.name}</Link>
                    <span className="divider"></span>
                </li>
            ))}
            </ul>
        </div>

        {/* OVERLAY --> parte que fica por cima de tudo*/}
        {isOpen && <div className="overlay" onClick={() => setOpen(false)} />}
        </nav>
    </>
  )
}

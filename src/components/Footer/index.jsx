import React from "react";
import logoImg from "../../styles/img/1.png"


const Footer = () => {
    return (
        <footer className='footer'>
            <li className='foot_line'></li>
            <ul className='footer_1'>

                <li className='foot_logo'>

                    <img src={logoImg} alt='first' />
                    <div className='foot_title'>
                        <li>CUstom caps</li>
                        <li className='auff'> Магазин кепок</li>
                    </div>

                </li>

                <li className='icon_foot'>
                    <div className='ploc'>

                    </div>
                    <div className='ploc'>

                    </div>
                    <div className='ploc'>

                    </div>
                </li>
            </ul>
            <li className='media'>
                © Copyright 2019 - Lift Media
            </li>

        </footer>
    )
}

export default Footer
import {Link} from 'react-router-dom';
import style from './Header.module.css';
import Logo from '../imagens/viagens.jpg';
import Lupa from '../imagens/lupa.png'

 function Header(){
    return(
        <div>
            <header className={style.header}>
                <Link to='/'>
                    <img src={Logo} alt="Logo" className={style.logo}/>
                </Link>

                <nav className={style.menu}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/GrandCanyon'>GrandCanyon</Link></li>
                        <li><Link to='/Escocia'>Escócia</Link></li>
                        <li><Link to='/Muralha'>Muralha da China</Link></li>
                        <li><Link to='/Aruba'>Aruba</Link></li>
                    </ul>
                </nav>

                <div className={style.busca}>
                    <input type="text" /><img src={Lupa} alt="Lupa" className={style.lupa}/>
                </div>
            </header>
        </div>
    )
}

export default Header;
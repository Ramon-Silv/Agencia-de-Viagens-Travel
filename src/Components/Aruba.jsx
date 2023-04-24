import style from './Aruba.module.css';
import Logo from '../imagens/viagens.jpg';

function Aruba(){
    return(
        <div>
            <section className={style.aruba}>
            <div className={style.card}>
                    <h2>Venha Explorar esse lugar incrível Aruba!</h2>
                    <p>Praias paradisíacas, mar cristalino, hotéis requintados, cassinos e programações para toda a família são alguns dos atrativos de Aruba.</p>
                    <img src={Logo} alt="Logo" />
                </div>
            </section>
        </div>
    )
}

export default Aruba;
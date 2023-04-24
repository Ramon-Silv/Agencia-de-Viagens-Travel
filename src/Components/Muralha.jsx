import style from './Muralha.module.css';
import Logo from '../imagens/viagens.jpg';

function Muralha(){
    return(
        <div>
            <section className={style.muralha}>
            <div className={style.card}>
                    <h2>Venha Explorar esse lugar incrível Muralha da China!</h2>
                    <p>É a mais longa estrutura construída pelo homem. Em 1987, a Organização das Nações Unidas (ONU) classificou o monumento como Patrimônio Histórico Mundial, protegendo-o contra os projetos de construção civil permitidos pelas leis chinesas. Tem 21.196 Km de extensão e também é considerada uma das 7 maravilhas do mundo.</p>
                    <img src={Logo} alt="Logo" />
                </div>
            </section>
        </div>
    )
}

export default Muralha;
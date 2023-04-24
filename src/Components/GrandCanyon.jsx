import style from './GrandCanyon.module.css';
import Logo from '../imagens/viagens.jpg';

function GrandCanyon(){
    return(
        <div>
            <section className={style.canyon}>
                <div className={style.card}>
                    <h2>Venha Explorar esse lugar incrível Grand Canyon!</h2>
                    <p>O Grand Canyon fica no estado do Arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é o passei mais procurado por quem visita Las Vegas, que fica no estado vizinho, Nevada.</p>
                    <img src={Logo} alt="Logo" />
                </div>
            </section>
        </div>
    )
}

export default GrandCanyon;
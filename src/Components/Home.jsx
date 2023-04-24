import style from './Home.module.css';
import Mala from '../imagens/mala.jpg'

function Home(){
    return(
        <div>
            <section>
                <img src={Mala} alt="mala" />
                <div className={style.texto}>
                    <h1>Encontre aqui a viagem <br /> dos seus sonhos!!!</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem suscipit commodi et ducimus nostrum, aut mollitia similique, est quo aliquam explicabo enim illo, eos veniam iste eaque optio omnis quia.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio asperiores earum ipsum dolore veniam.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;
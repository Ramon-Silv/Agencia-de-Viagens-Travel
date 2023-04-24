import style from './Rodape.module.css';
import Insta from '../imagens/insta.jfif';
import TikTok from '../imagens/tiktok.png';
import Face from '../imagens/face.jfif';
import Whats from '../imagens/whats.png';

function Rodape(){
    return(
        <div>
            <footer>
                <p>Siga-nos em nossas redes sociais</p>
                <div className={style.redes}>
                    <img src={Insta} alt="Instagram" />
                    <img src={Face} alt="Facebook" />
                    <img src={TikTok} alt="TikTok" />
                    <img src={Whats} alt="WhatsApp" />
                </div>
                <p>Telefone de contato: (11) 9555 - 3355</p>
            </footer>
        </div>
    )
}

export default Rodape;
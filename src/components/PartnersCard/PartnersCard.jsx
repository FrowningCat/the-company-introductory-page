import './ParthersCard.css';
import { userOne } from './data';

import mail from '../../assets/mail.png';
import telephone from '../../assets/telephone.png';

export default function parthersCard() {
    function WayToTeach({ description }) {
        return (
            <>
                <text>{description}</text>
                <br />
                <br />
            </>
        );
    }

    return (
        <div className="parthersCard">
            <header className="parthersCard__header">
                <div className="parthersCard__header__return">
                    <text className="parthersCard__header__buttonText">
                        Назад
                    </text>
                </div>
                <div className="parthersCard__header__userCard">
                    <div className="parthersCard__header__userCard__foto"></div>
                    <div className="parthersCard__header__userCard__text">
                        <div className="parthersCard__header__userCard__text__name">
                            Артур Королёв
                        </div>
                        <div className="parthersCard__header__userCard__text__type">
                            Партнер
                        </div>
                    </div>
                </div>
                <div className="parthersCard__header__exit">
                    <text className="parthersCard__header__buttonText">
                        Выход
                    </text>
                </div>
            </header>
            <main className="parthersCard__main">
                <div className="parthersCard__main__textInfo">
                    {userOne.map((way) => (
                        <WayToTeach key={way.description} {...way} />
                    ))}
                </div>
                <div className="parthersCard__main__textContact">
                    <div className="parthersCard__main__textContact__block">
                        <img src={telephone} alt="telephone png"></img>
                        +7 (954) 333-44-55
                    </div>
                    <div className="parthersCard__main__textContact__block">
                        <img src={mail} alt="png"></img>
                        sykfafkar@gmail.com
                    </div>
                </div>
            </main>
        </div>
    );
}

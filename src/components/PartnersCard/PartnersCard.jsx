import './ParthersCard.css';

export default function parthersCard() {
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
        </div>
    );
}

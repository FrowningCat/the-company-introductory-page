import './OurTeam.css';

import { Link } from 'react-router-dom';

export default function ourTeam() {
    return (
        <div className="ourTeam">
            <div className="ourTeam__header">
                <div className="ourTeam__header__titleBlock">
                    <div className="ourTeam__header__titleBlock__title">
                        Наша команда
                    </div>
                    <div className="ourTeam__header__titleBlock__description">
                        Это опытные специалисты, хорошо разбирающиеся во всех
                        задачах, которые ложатся на их плечи, и умеющие находить
                        выход из любых, даже самых сложных ситуаций.
                    </div>
                </div>
                <Link to={'/'}>
                    <div className="ourTeam__header__button">
                        <text className="ourTeam__header__button__text">
                            Выход
                        </text>
                    </div>
                </Link>
            </div>
        </div>
    );
}

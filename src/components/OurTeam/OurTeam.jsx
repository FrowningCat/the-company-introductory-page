import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './OurTeam.css';
import like from '../../assets/like.png';

export default function ourTeam() {
    const [users, setUsers] = useState([]);

    const f = async () => {
        const res = await fetch('https://reqres.in/api/users/');
        const json = await res.json();
        setUsers(json.data);
    };

    useEffect(() => {
        f();
    }, []);

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
            <div className="ourTeam__userBlock">
                <div className="ourTeam__userBlock__user">
                    {users.length &&
                        users.map((user) => {
                            return (
                                <>
                                    <Link to={'/parthersCard'}>
                                        <div
                                            className="ourTeam__userBlock__user__info"
                                            key={user.id}
                                        >
                                            <div>
                                                <img
                                                    className="ourTeam__userBlock__user__info__avatar"
                                                    key={user.avatar}
                                                    src={user.avatar}
                                                />
                                            </div>
                                            {user.first_name}
                                            <div className="ourTeam__userBlock__user__info__like">
                                                <img
                                                    src={like}
                                                    alt="like png"
                                                ></img>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

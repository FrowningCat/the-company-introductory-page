import './SignUp.css';

import { Link } from 'react-router-dom';
import eye from '../../assets/eye.png';

export default function signUp() {
    function eyeClick() {
        let password = document.getElementById('password');
        if (password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }
    function eyeClick2() {
        let passwordСheck = document.getElementById('passwordСheck');
        if (passwordСheck.getAttribute('type') == 'password') {
            passwordСheck.setAttribute('type', 'text');
        } else {
            passwordСheck.setAttribute('type', 'password');
        }
    }
    function registrationButton() {
        const passwordСheck = document.getElementById('passwordСheck').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const regName = /^[a-zA-Z\s]+$|^[а-яА-Я\s]+$/;
        const regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
        let nameScss = document.getElementById('inputOne');
        let emailScss = document.getElementById('inputEmail');
        let errorScss1 = document.getElementById('errorName');
        let errorScss2 = document.getElementById('errorEmail');
        if ((passwordСheck == password) & (passwordСheck != '')) {
            if (regName.test(name) === false) {
                nameScss.setAttribute(
                    'class',
                    'registration__dataEntry__block__inputFalls'
                );
                errorScss1.setAttribute(
                    'class',
                    'registration__dataEntry__block__input__errorTextBlock'
                );
            } else {
                errorScss1.setAttribute(
                    'class',
                    'registration__dataEntry__block__input__errorTextNone'
                );
                nameScss.setAttribute(
                    'class',
                    'registration__dataEntry__block__input'
                );
                if (regEmail.test(email) === false) {
                    emailScss.setAttribute(
                        'class',
                        'registration__dataEntry__block__inputFalls'
                    );
                    errorScss2.setAttribute(
                        'class',
                        'registration__dataEntry__block__input__errorTextBlock'
                    );
                } else {
                    errorScss2.setAttribute(
                        'class',
                        'registration__dataEntry__block__input__errorTextNone'
                    );
                    emailScss.setAttribute(
                        'class',
                        'registration__dataEntry__block__input'
                    );
                }
            }
        } else {
            alert('Пароль не совпал');
        }
    }

    return (
        <div className="registration">
            <form className="registration__dataEntry">
                <div className="registration__dataEntry__title">
                    Регистрация
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Имя
                    </div>
                    <div
                        className="registration__dataEntry__block__input"
                        id="inputOne"
                    >
                        <input
                            className="registration__dataEntry__block__input__text"
                            required
                            type="text"
                            id="name"
                        ></input>
                        <text
                            className="registration__dataEntry__block__input__errorTextNone"
                            id="errorName"
                        >
                            Ошибка
                        </text>
                    </div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Электронная почта
                    </div>
                    <div
                        className="registration__dataEntry__block__input"
                        id="inputEmail"
                    >
                        <input
                            className="registration__dataEntry__block__input__text"
                            required
                            id="email"
                            type="email"
                        ></input>
                        <text
                            className="registration__dataEntry__block__input__errorTextNone"
                            id="errorEmail"
                        >
                            Ошибка
                        </text>
                    </div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Пароль
                    </div>
                    <div className="registration__dataEntry__block__input">
                        <input
                            className="registration__dataEntry__block__input__text"
                            required
                            type="password"
                            id="password"
                            pattern="[a-z0-9@/\A-Z]"
                        ></input>
                        <img
                            onClick={() => eyeClick()}
                            src={eye}
                            alt="eye img"
                            className="registration__dataEntry__block__input__eye"
                        />
                    </div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Подтвердите пароль
                    </div>
                    <div className="registration__dataEntry__block__input">
                        <input
                            className="registration__dataEntry__block__input__text"
                            required
                            type="password"
                            id="passwordСheck"
                            pattern="[a-z0-9@/\A-Z]"
                        ></input>
                        <img
                            onClick={() => eyeClick2()}
                            src={eye}
                            alt="eye img"
                            className="registration__dataEntry__block__input__eye"
                        />
                    </div>
                </div>
            </form>
            <div
                className="registration__button"
                onClick={() => registrationButton()}
            >
                <Link to={'/ourTeam'}>
                    <div className="registration__button__text">
                        Зарегестрироваться
                    </div>
                </Link>
            </div>
        </div>
    );
}

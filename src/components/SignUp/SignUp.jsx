import './SignUp.css';

import eye from '../../assets/eye.png';

export default function signUp() {
    return (
        <div className="registration">
            <div className="registration__dataEntry">
                <div className="registration__dataEntry__title">
                    Регистрация
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Имя
                    </div>
                    <div className="registration__dataEntry__block__input">
                        <input className="registration__dataEntry__block__input__text"></input>
                    </div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Электронная почта
                    </div>
                    <div className="registration__dataEntry__block__input">
                        <input className="registration__dataEntry__block__input__text"></input>
                    </div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Пароль
                    </div>
                    <div className="registration__dataEntry__block__input">
                        <input className="registration__dataEntry__block__input__text"></input>
                        <img
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
                        <input className="registration__dataEntry__block__input__text"></input>
                        <img
                            src={eye}
                            alt="eye img"
                            className="registration__dataEntry__block__input__eye"
                        />
                    </div>
                </div>
            </div>
            <div className="registration__button">
                <div className="registration__button__text">
                    Зарегестрироваться
                </div>
            </div>
        </div>
    );
}

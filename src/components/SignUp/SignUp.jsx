import './SignUp.css';

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
                    <div className="registration__dataEntry__block__input"></div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Электронная почта
                    </div>
                    <div className="registration__dataEntry__block__input"></div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Пароль
                    </div>
                    <div className="registration__dataEntry__block__input"></div>
                </div>
                <div className="registration__dataEntry__block">
                    <div className="registration__dataEntry__block__title">
                        Подтвердите пароль
                    </div>
                    <div className="registration__dataEntry__block__input"></div>
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

import icon from '../../img/Icon.svg'
import style from './Header.module.scss'
export const Header = () => {
    return <header className={style.header}>
            <img className={style.header__logo} src={icon} alt="logo" />
                <div className={style.header__box}>
                    <h1 className={style.title_first}>
                        <span className={style.title_first__main}>ТУРЫ НА ВОЗДУШНОМ ШАРЕ</span>
                        <span className={style.title_first__sub}>незабываемое приключение ждет вас</span>
                    </h1>
                    <a href="src/components/Header/Header#" className={`${style.btn} ${style.btn_animated}`}>наш каталог</a>
                </div>
        </header>

}
import style from './SectionAbout.module.scss'
import {BsArrowRight} from "react-icons/bs";
import balloon1 from '../../img/pexels-3389955 1.png'
import balloon2 from '../../img/pexels-4136222.png'
import balloon3 from '../../img/pexels-4136801 1.png'

export const SectionAbout = () => {

    return (
        <div className={style.about}>
            <h2 className={style.title_secondary}>
                НЕВЕРОЯТНОЕ ОЩУЩЕНИЕ СВОБОДЫ
            </h2>
            <div className={style.about_wrapper}>
                <div className={style.about_items}>
                    <h3 className={style.about_title}>ПОЗВОЛЬТЕ СЕБЕ ПРИКЛЮЧЕНИЕ</h3>
                    <p className={style.about_desc}>Задача организации, в особенности же дальнейшее развитие различных
                        форм
                        деятельности влечет за собой процесс внедрениям и модернизации соответствующий условий
                        активизации. Таким образом начало повседневной работы по формированию позиции влечет.</p>
                    <h3 className={style.about_title}>ВВЕРХ НА 6000 МЕТРОВ НАД УРОВНЕМ МОРЯ</h3>
                    <p className={style.about_desc}>Задача организации, в особенности же дальнейшее развитие различных
                        форм
                        деятельности влечет за собой процесс внедрения и модернизации соответствующий условий
                        активизации. Таким образом начало повседневной работы по формированию позиции влечет.</p>
                    <div className={style.about_more}>Узнать больше</div>{BsArrowRight}
                </div>
                <div className={style.about_images}>
                    <img src={balloon1} alt="balloon1"/>
                    <img src={balloon2} alt="balloon2"/>
                    <img src={balloon3} alt="balloon3"/>
                </div>
            </div>
        </div>
    )
}
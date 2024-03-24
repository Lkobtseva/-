import React from "react";
import iskri from "../../images/iskri.svg";
import logo from "../../images/logo.svg";
import koster from "../../images/koster.svg";
import zakat from "../../images/zakat.svg";
import left from "../../images/left.svg";
import right from "../../images/right.svg";
import galery1 from "../../images/galery1.svg";
import galery2 from "../../images/galery2.svg";
import galery3 from "../../images/galery3.svg";
import galery4 from "../../images/galery4.svg";
import galery5 from "../../images/galery5.svg";
import galery6 from "../../images/galery6.svg";
import galery7 from "../../images/galery7.svg";
import galery8 from "../../images/galery8.svg";
import galery9 from "../../images/galery9.svg";
import galery10 from "../../images/galery10.svg";
import logo2 from "../../images/logo2.svg";
import koster2 from "../../images/koster2.svg";

const MainPage = ({ goQuestions }) => {
  return (
    <>
      <div className="main-page">
        <img src={iskri} className="iskri" />
        <img src={koster} className="koster" />
        <img src={zakat} className="zakat" />
        <div className="main__block">
          <img src={logo} className="main__logo" />
          <div className="main__text-block">
            <h1 className="main__header">ШКОЛА ВЫЖИВАНИЯ</h1>
            <p className="main__p">
              открой для себя тайну леса и своих возможностей
            </p>
            <p className="main__p2">
              Школа Выживания - это не просто проект. Это место, в котором ты
              обретаешь нового себя, становишься частью большого комьюнити и
              узнаёшь, что нет предела твоим возможностям.
            </p>
          </div>
        </div>

        <section className="about__block">
          <div className="block__section">
            <h2 className="about__title">О ПРОЕКТЕ</h2>
            <p className="about__text">
              Выездной спортивно-туристический проект Студенческого совета РЭУ
              им. Г.В. Плеханова, организуемый в содружестве с другими
              университетами.
            </p>
            <p className="about__text">
              Каждый год «Школа Выживания» бросает вызов, чтобы проверить себя
              на прочность, и каждый год участники соглашаются на него. А все
              это для того, чтобы после прохождения массы испытаний, 200 человек
              объединились одной мыслью, одной фразой, одной песней: «Дальше
              действовать будем мы!»
            </p>
            <img className="about__image" src={left} alt="Left" />
          </div>

          <div className="block__section">
            <img className="about__image" src={right} alt="Right" />
            <div>
              <h2 className="about__title2">ЧТО ТЕБЯ ЖДЕТ?</h2>
              <ul className="about__text">
                <li>испытание на стойкость </li>
                <li>сможешь бросить вызов себе </li>
                <li>узнаешь все секреты Школы Выживания </li>
                <li>незабываемые эмоции</li>
              </ul>
            </div>
          </div>
        </section>
        <img className="logo2" src={logo2}></img>
        <section className="gallery__block">
          <h3 className="gallery__title"> Школа Выживания</h3>
          <div className="gallery">
            <img src={galery2} alt="Image 2" className="gallery__image" />
            <img src={galery1} alt="Image 1" className="gallery__image" />
            <img src={galery3} alt="Image 3" className="gallery__image" />
            <img src={galery4} alt="Image 4" className="gallery__image" />
            <img src={galery5} alt="Image 5" className="gallery__image" />
            <img src={galery6} alt="Image 6" className="gallery__image" />
            <img src={galery7} alt="Image 7" className="gallery__image" />
            <img src={galery8} alt="Image 8" className="gallery__image" />
            <img src={galery9} alt="Image 9" className="gallery__image" />
            <img src={galery10} alt="Image 10" className="gallery__image" />
          </div>
          <h4 className="gallery__text">ГАЛЕРЕЯ</h4>
        </section>
        <section>
          <img className="koster2" src={koster2}></img>
          <h5 className="otziv__title">
            УЧАСТНИКИ ОБ ИХ ОПЫТЕ ШКОЛЫ ВЫЖИВАНИЯ
          </h5>
          <div className="otziv__block">
            <div className="otziv">
              <p className="Name">Мирзалиева Диана</p>
              <p className="text">
                "Школа Выживания 2020— проект, который заставил меня верить в
                то, что есть на планете хорошие люди, которые будут стоять за
                тебя горой, а ты в с свою очередь— за них. Школа Выживания -
                проект, который погрузил в ту самую атмосферу, дав понять,
                насколько тяжело было когда-то нашим дедушкам, бабушкам,
                прадедушкам и прабабушкам. Сказать, что это самые лучшие три дня
                в лесу — ничего не сказать, потому что эмоции, охватывающие на
                протяжении этих трёх дней, не передать никакими словами. Спасибо
                за это всем организаторам!"
              </p>
            </div>
            <div className="otziv">
              <p className="Name">Соколов Максим</p>
              <p className="text">
                Школа Выживания - это явно нечто большее, чем просто проект. Это
                действительно очень сплотило наш коллектив. Проект переносит
                тебя в непривычные условия. Когда ты находишься там, то
                забываешь обо всей этой городской суете, о долгах по работе и
                обо всех проблемах. Есть только ты, природа и люди, с которыми
                ты безумно сильно сблизился и которые за такой короткий
                промежуток времени стали тебе как родные. Это явно лучшее, что
                со мной случалось! Надеюсь, традиция уезжать в лес ещё надолго
                со мной останется.
              </p>
            </div>
          </div>
        </section>
        <footer className="footer1">
          <h6 className="Next">дальше действовать будешь ты!</h6>
          <button onClick={goQuestions} className="button">
            подать анкету
          </button>
          <p className="footer__p">© ШКОЛА ВЫЖИВАНИЯ 2022</p>
        </footer>
      </div>
    </>
  );
};

export default MainPage;

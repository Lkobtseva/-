import React, { useEffect, useState } from "react";
import back from "../../images/back.svg";

const Form = ({ handleSelectForm, sendDataToBackend }) => {
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState("");

  const [answers, setAnswers] = useState({
    reasons: "",
    expectations: "",
    team_experience: "",
    teamwork: "",
    physical_training: "",
    health_problems: "",
    hike_experience: "",
    priorities: "",
    curation: "",
    rejection: "",
    organization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSelectForm(answers);
    setSubmited(true);
  };
  
  useEffect(() => {
    if (submited) {
      sendDataToBackend(answers);
      setSubmited(false);
    }
  }, [answers, sendDataToBackend]);

  return (
    <div className="Form">
      <img
        src={back}
        style={{
          position: "fixed",
          height: "100vh",
          zIndex: "0",
          right: 0,
          left: 0,
          opacity: 0.5,
        }}
      />
      <form onSubmit={handleSubmit} className="survival-school-form">
        <h2 className="p">Ответь на вопросы ниже</h2>

        <div>
          <label htmlFor="reasons">
            1. Назови причину, почему ты решил подать анкету на Школу Выживания?
          </label>
          <input
            type="text"
            id="reasons"
            name="reasons"
            value={answers.reasons}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="expectations">
            2. Как ты представляешь себе этот проект? Какие есть ожидания от
            него?
          </label>
          <input
            id="expectations"
            name="expectations"
            value={answers.expectations}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="team_experience">
            3. Опиши свой опыт работы в команде
          </label>
          <input
            id="team_experience"
            name="team_experience"
            value={answers.team_experience}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="teamwork">
            4. Что для тебя важно при работе в команде и что недопустимо?
          </label>
          <input
            type="text"
            id="teamwork"
            name="teamwork"
            value={answers.teamwork}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="physical_training">
            5. Оцени свою физическую подготовку (от 1 до 10)
          </label>
          <input
            type="range"
            id="physical_training"
            name="physical_training"
            min="1"
            max="10"
            value={answers.physical_training}
            onChange={handleChange}
            className="slider"
          />
          <output>{answers.physical_training}</output>
        </div>
        <div>
          <label htmlFor="health_problems">
            6. Есть ли у тебя какие-либо проблемы со здоровьем?
          </label>
          <input
            type="text"
            id="health_problems"
            name="health_problems"
            value={answers.health_problems}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="hike_experience">
            7. Есть ли у тебя походный опыт? Если да, опиши его.
          </label>
          <input
            id="hike_experience"
            name="hike_experience"
            value={answers.hike_experience}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="priorities">
            8. Представь, что ты стал/а участником проекта, расставь по
            приоритетам всю свою активность (учеба, хобби, проекты, работа и т.
            д.)
          </label>
          <input
            id="priorities"
            name="priorities"
            value={answers.priorities}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="curation">
            9. Проходишь ли ты сейчас отбор на кураторство?
          </label>
          <input
            type="text"
            id="curation"
            name="curation"
            value={answers.curation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rejection">
            10. Что тебя может заставить отказаться от участия в Школе
            Выживания?
          </label>
          <input
            id="rejection"
            name="rejection"
            value={answers.rejection}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="organization">
            11. Если бы ты организовывал/а свою собственную Школу Выживания, что
            бы там было?
          </label>
          <input
            id="organization"
            name="organization"
            value={answers.organization}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

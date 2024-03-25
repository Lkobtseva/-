import React, { useEffect, useState } from "react";
import back from "../../images/back.svg";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSelectForm, sendDataToBackend }) => {
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [answersForm, setAnswersForm] = useState({
    reasons: "",
    expectations: "",
    team_experience: "",
    teamwork: "",
    physical_training: "1",
    health_problems: "",
    hike_experience: "",
    priorities: "",
    curation: "",
    rejection: "",
    organization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswersForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    const storedAnswers = localStorage.getItem("answersForm");
    if (storedAnswers) {
      setAnswersForm(JSON.parse(storedAnswers));
    }
  }, []);

  const handleBack = () => {
    navigate("/questions");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = Object.keys(answersForm).filter(
      (key) => answersForm[key].trim() === ""
    );
    if (emptyFields.length > 0) {
      setError("Заполнте все поля");
    } else {
      handleSelectForm(answersForm);
      setSubmited(true);
      setError("");
    }
  };

  useEffect(() => {
    if (submited) {
      sendDataToBackend(answersForm);
      setSubmited(false);
    }
  }, [answersForm, sendDataToBackend]);

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
          <textarea
            id="reasons"
            name="reasons"
            value={answersForm.reasons}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="expectations">
            2. Как ты представляешь себе этот проект? Какие есть ожидания от
            него?
          </label>
          <textarea
            id="expectations"
            name="expectations"
            value={answersForm.expectations}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="team_experience">
            3. Опиши свой опыт работы в команде
          </label>
          <textarea
            id="team_experience"
            name="team_experience"
            value={answersForm.team_experience}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="teamwork">
            4. Что для тебя важно при работе в команде и что недопустимо?
          </label>
          <textarea
            id="teamwork"
            name="teamwork"
            value={answersForm.teamwork}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
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
            value={answersForm.physical_training}
            onChange={handleChange}
            className="slider"
          />
          <output>{answersForm.physical_training}</output>
        </div>
        <div>
          <label htmlFor="health_problems">
            6. Есть ли у тебя какие-либо проблемы со здоровьем?
          </label>
          <textarea
            id="health_problems"
            name="health_problems"
            value={answersForm.health_problems}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="hike_experience">
            7. Есть ли у тебя походный опыт? Если да, опиши его.
          </label>
          <textarea
            id="hike_experience"
            name="hike_experience"
            value={answersForm.hike_experience}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="priorities">
            8. Представь, что ты стал/а участником проекта, расставь по
            приоритетам всю свою активность (учеба, хобби, проекты, работа и т.
            д.)
          </label>
          <textarea
            id="priorities"
            name="priorities"
            value={answersForm.priorities}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="curation">
            9. Проходишь ли ты сейчас отбор на кураторство?
          </label>
          <textarea
            id="curation"
            name="curation"
            value={answersForm.curation}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="rejection">
            10. Что тебя может заставить отказаться от участия в Школе
            Выживания?
          </label>
          <textarea
            id="rejection"
            name="rejection"
            value={answersForm.rejection}
            onChange={handleChange}
            rows={4}
            style={{ resize: "none" }}
          />
        </div>
        <div>
          <label htmlFor="organization">
            11. Если бы ты организовывал/а свою собственную Школу Выживания, что
            бы там было?
          </label>
          <textarea
            id="organization"
            name="organization"
            rows={4}
            style={{ resize: "none" }}
            value={answersForm.organization}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handleBack}>Назад</button>
            <button onClick={handleSubmit} type="submit">
              Отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React, { useState, useRef } from "react";
import back from "../../images/back.svg";
const Questions = ({ goForm, handleSelectQuestions }) => {
  const [answers, setAnswers] = useState({
    name: "",
    university: "",
    high_school: "",
    passport_series: "",
    passport_number: "",
    group_number: "",
    vk: "",
    phone_number: "",
    icon: null,
  });
  const [showRHEUFields, setShowRHEUFields] = useState(false);
  const [errors, setErrors] = useState({});
  const passportNumberRef = useRef(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    console.log("Выбран файл:", file);
    setAnswers((prevState) => ({
      ...prevState,
      icon: file,
    }));
  };

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));

    if (name === "passport_series" && value.length === 4) {
      passportNumberRef.current.focus();
    }
  };

  const handleUniversityChange = (event) => {
    const { value } = event.target;
    setAnswers((prevState) => ({
      ...prevState,
      university: value,
      high_school: "",
    }));
    setShowRHEUFields(value === "РЭУ");
  };

  const validateVKLink = (link) => {
    return (
      link.startsWith("https://vk.com/") ||
      link.startsWith("http://vk.com/") ||
      link.startsWith("vk.com/") ||
      link.startsWith("https://m.vk.com/") ||
      link.startsWith("m.vk.com/")
    );
  };

  const validatePhoneNumber = (number) => {
    return /^\+7\d{10}$/.test(number);
  };

  const handleSubmit = () => {
    const errors = {};
    if (answers.name.trim() === "") {
      errors.name = "Заполните ФИО";
    }
    if (answers.university.trim() === "") {
      errors.university = "Выберите ВУЗ";
    }
    if (answers.group_number.trim() === "") {
      errors.group_number = "Заполните номер группы";
    }
    if (showRHEUFields && answers.high_school.trim() === "") {
      errors.high_school = "Выберите Высшую Школу";
    }

    if (answers.university.trim() === "РЭУ") {
      if (showRHEUFields && answers.high_school.trim() === "") {
        errors.high_school = "Выберите Высшую Школу";
      }
    } else {
      if (
        answers.passport_series.trim().length !== 4 ||
        answers.passport_series.trim().length !== 6
      ) {
        errors.passport = "Проверьте паспортные данные";
      }
    }

    if (!validateVKLink(answers.vk)) {
      errors.vk = "Введите корректную ссылку на ВК";
    }
    if (!validatePhoneNumber(answers.phone_number)) {
      errors.phone_number = "Введите корректный номер телефона (+7XXXXXXXXXX)";
    }

    if (!answers.icon) {
      errors.icon = "Загрузите фотографию";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      localStorage.setItem("answers", JSON.stringify(answers));
      handleSelectQuestions(answers);
      goForm();
    }
  };

  return (
    <div className="questions">
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
      <div className="questions-container">
        <h2 className="questions-title">АНКЕТА УЧАСТНИКА</h2>
        <div className="block">
          <div className="question-block">
            <label className="question-label">ФИО:</label>
            <input
              type="text"
              name="name"
              value={answers.name}
              onChange={handleAnswerChange}
              className={`question-input ${errors.name && "error-input"}`}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="question-block">
            <label className="question-label">ВУЗ:</label>
            <select
              name="university"
              value={answers.university}
              onChange={handleUniversityChange}
              className={`question-select ${
                errors.university && "error-input"
              }`}
            >
              <option value="">Выберите ВУЗ</option>
              <option value="РЭУ">РЭУ</option>
              <option value="РАНХиГС">РАНХиГС</option>
              <option value="ГУУ">ГУУ</option>
              <option value="РГУ им. Косыгина">РГУ им. Косыгина</option>
              <option value="Финансовый Университет">
                Финансовый Университет
              </option>
            </select>
            {errors.university && (
              <p className="error-message">{errors.university}</p>
            )}
          </div>
          {showRHEUFields && (
            <div className="question-block">
              <label className="question-label">Выберите Высшую Школу:</label>
              <select
                name="high_school"
                value={answers.high_school}
                onChange={handleAnswerChange}
                className={`question-select ${
                  errors.high_school && "error-input"
                }`}
              >
                <option value="">Выберите Высшую Школу</option>
                <option value="ВШКМиС">ВШКМиС</option>
                <option value="ВШЭиБ">ВШЭиБ</option>
                <option value="ВШКИ">ВШКИ</option>
                <option value="ВШП">ВШП</option>
                <option value="ВШМ">ВШМ</option>
                <option value="ИПАМ">ИПАМ</option>
                <option value="ФБ “Капитаны”">ФБ “Капитаны”</option>
                <option value="СФТМ “ВШ Форсайт”">СФТМ “ВШ Форсайт”</option>
                <option value="ВШСГН">ВШСГН</option>
                <option value="ФПШБ “Интеграл”">ФПШБ “Интеграл”</option>
                <option value="ВИШ “НМиТ”">ВИШ “НМиТ”</option>
              </select>
              {errors.high_school && (
                <p className="error-message">{errors.high_school}</p>
              )}
            </div>
          )}
          {!showRHEUFields && (
            <div className="question-block">
              <label className="question-label">Паспортные данные:</label>
              <div className="passport-inputs">
                <input
                  type="integer"
                  name="passport_series"
                  value={answers.passport_series}
                  onChange={handleAnswerChange}
                  className={`passport-input ${
                    errors.passport && "error-input"
                  }`}
                  maxLength="4"
                  placeholder="Серия"
                />
                <input
                  ref={passportNumberRef}
                  type="integer"
                  name="passport_number"
                  value={answers.passport_number}
                  onChange={handleAnswerChange}
                  className={`passport-input ${
                    errors.passport && "error-input"
                  }`}
                  maxLength="6"
                  placeholder="Номер"
                />
                {errors.passport && (
                  <p className="error-message">{errors.passport}</p>
                )}
              </div>
            </div>
          )}

          <div className="question-block">
            <label className="question-label">Номер группы:</label>
            <input
              type="text"
              name="group_number"
              value={answers.group_number}
              onChange={handleAnswerChange}
              className={`question-input ${
                errors.group_number && "error-input"
              }`}
            />
            {errors.group_number && (
              <p className="error-message">{errors.group_number}</p>
            )}
          </div>
          <div className="question-block">
            <label className="question-label">Ссылка в ВК:</label>
            <input
              type="text"
              name="vk"
              value={answers.vk}
              onChange={handleAnswerChange}
              className={`question-input ${errors.vk && "error-input"}`}
            />
            {errors.vk && <p className="error-message">{errors.vk}</p>}
          </div>
          <div className="question-block">
            <label className="question-label">Номер телефона:</label>
            <input
              type="text"
              name="phone_number"
              placeholder="+7.........."
              value={answers.phone_number}
              onChange={handleAnswerChange}
              className={`question-input ${
                errors.phone_number && "error-input"
              }`}
            />
            {errors.phone_number && (
              <p className="error-message">{errors.phone_number}</p>
            )}
          </div>
          <div className="question-block">
            <label className="question-label">Твоя фотография:</label>
            <input
              style={{ color: "black" }}
              type="file"
              accept="image/*"
              name="icon"
              onChange={handlePhotoChange}
              className="question-input"
            />
            {errors.icon && <p className="error-message">{errors.icon}</p>}
          </div>
        </div>
        <button onClick={handleSubmit} className="next-button">
          Далее
        </button>
      </div>
    </div>
  );
};

export default Questions;

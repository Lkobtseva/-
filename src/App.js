import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Questions from "./components/Questions/Questions";
import Form from "./components/Form/Form";

function App() {
  const [formAnswers, setFormAnswers] = useState({});
  const [questionAnswers, setQuestionAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  function goQuestions() {
    navigate("/questions");
  }
  function goCheck() {
    navigate("/checking");
  }
  function goForm() {
    navigate("/form");
  }

  const handleSelectQuestions = (questionAnswers) => {
    setQuestionAnswers(questionAnswers);
  };
  const handleSelectForm = (formAnswers) => {
    setFormAnswers(formAnswers);
  };

  const sendDataToBackend = async () => {
    const combinedAnswers = { ...questionAnswers, ...formAnswers };
    const formData = new FormData();

    Object.entries(combinedAnswers).forEach(([key, value]) => {
      formData.set(key, value);
    });
    console.log(formData);
    try {
      const response = await fetch("https://shv-back.itc-hub.ru/api/v1/form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Data successfully sent to backend");
        navigate("/");
      } else {
        console.error("Error sending data to backend:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage goQuestions={goQuestions} goCheck={goCheck} />}
      />
      <Route
        path="/questions"
        element={
          <Questions
            goForm={goForm}
            handleSelectQuestions={handleSelectQuestions}
          />
        }
      />
      <Route
        path="/form"
        element={
          <Form
            sendDataToBackend={sendDataToBackend}
            handleSelectForm={handleSelectForm}
          />
        }
      />
    </Routes>
  );
}

export default App;

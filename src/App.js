import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Questions from "./components/Questions/Questions";
import Form from "./components/Form/Form";

function App() {
  const [formAnswers, setFormAnswers] = useState({});
  const [questionAnswers, setQuestionAnswers] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
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

    try {
      const response = await fetch("https://shv-back.itc-hub.ru/api/v1/form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          navigate("/");
        }, 2000); 
      } else {
        console.error("Error sending data to backend:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
    localStorage.removeItem("answers");
    localStorage.removeItem("answersForm");
  };

  return (
    <div>
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
      {showSuccessMessage && (
        <div style={{ 
          position: "fixed", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          background: "white", 
          padding: "20px", 
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
          borderRadius: "20px",
          border:"2px solid black",
          zIndex: 10,
          color: "black",
          fontSize: "30px",
          textAlign:"center"
        }}>
          Ваша анкета отправлена
        </div>
        
      )}
    </div>
  );
}

export default App;

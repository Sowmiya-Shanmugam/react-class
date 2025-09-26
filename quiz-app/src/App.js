import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
             "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
        );
        const data = await res.json();

        if (data && data.results && data.results.length > 0) {
          const formatted = data.results.map((q) => {
            const options = [...q.incorrect_answers, q.correct_answer];
            options.sort(() => Math.random() - 0.5);
            return {
              question: decodeHTML(q.question),
              correct: decodeHTML(q.correct_answer),
              options: options.map(decodeHTML),
            };
          });
          setQuestions(formatted);
          setChosenAnswers(new Array(data.results.length).fill(null));
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleAnswer = (opt) => {
    if (chosenAnswers[index]) return;
    const newAnswers = [...chosenAnswers];
    newAnswers[index] = opt;
    setChosenAnswers(newAnswers);

    if (opt === questions[index].correct) {
      setScore((prev) => prev + 1);
      toast.success(" Correct!", { position: "top-center" });
    } else {
      toast.error(" Wrong!", { position: "top-center" });
    }
  };

  const skipQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    }
  };

  const nextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    }
  };

  const submitQuiz = () => {
    setSubmitted(true);
  };

  const getGrade = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 85) return "A+ 🏆";
    if (percentage >= 70) return "A ⭐";
    if (percentage >= 55) return "B 👍";
    if (percentage >= 40) return "C 🙂";
    return "F 😢";
  };

  if (loading) return <h2 className="loading">Loading…</h2>;
  if (!questions.length) return <h2 className="loading">No questions found 😕</h2>;

  const q = questions[index];

  return (
    <div className="App">
      <h1 className="title">Quiz App</h1>

      {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar on Right */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h3>Questions</h3>
        <div className="question-list">
          {questions.map((_, i) => (
            <button
              key={i}
              className={`q-num ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {submitted ? (
        <div className="container">
          <h2>Quiz Finished!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
          <h3>Grade: {getGrade()}</h3>
          <button onClick={() => window.location.reload()} className="next-btn">
            Restart
          </button>
          <ToastContainer />
        </div>
      ) : (
        <div className="container">
          <h3>
            Question {index + 1} / {questions.length}
          </h3>
          <p className="question">{q.question}</p>
          <div className="options">
            {q.options.map((opt, i) => {
              let cls = "option-btn";
              if (chosenAnswers[index]) {
                if (opt === q.correct) cls += " correct";
                else if (opt === chosenAnswers[index]) cls += " wrong";
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className={cls}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="actions">
            {index < questions.length - 1 && (
              <>
                {chosenAnswers[index] && (
                  <button onClick={nextQuestion} className="next-btn">
                    Next
                  </button>
                )}
                {!chosenAnswers[index] && (
                  <button onClick={skipQuestion} className="skip-btn">
                    Skip
                  </button>
                )}
              </>
            )}

            {index === questions.length - 1 && (
              <button onClick={submitQuiz} className="submit-btn">
                Submit Quiz
              </button>
            )}
          </div>

          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;
 
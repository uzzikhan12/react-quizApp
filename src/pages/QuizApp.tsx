import { useState } from "react";

function QuizApp() {
    let questions = [
        {
          question: "HTML Stands For _________",
          options: [
            "Anchor Text Language",
            "HTML",
            "Case Cading Style Sheet",
            "HyperText markup language",
          ],
          correctAns: "HyperText markup language",
        },
        {
          question: "CSS Stands For _________",
          options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
          ],
          correctAns: "Casecading Style Sheet",
        },
        {
          question: "JS Stands For _________",
          options: ["Java Style", "Java Script", "Script", "Script Src"],
          correctAns: "Java Script",
        },
        {
          question: "DOM Stands For _________",
          options: ["Document Object Model", "html", "Css", "Java"],
          correctAns: "Document Object Model",
        },
        {
          question: "RAM Stands For _________",
          options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
          correctAns: "Random Access Memory",
        },
        {
          question: "ROM Stands For _________",
          options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
          ],
          correctAns: "Read Only Memory",
        },
      ]
    
      const [index,setIndex] = useState(0);
      const [score,setScore] = useState(0);
      const [selectVal,setSelectVal] = useState("");
      const [showRes,setShowRes] = useState(false);
      const [quiz,setQuiz] = useState(true);

      let correctVal = questions[index].correctAns;
      
      function checkAns() {
        if (questions.length == index + 1){
            setShowRes(true);
            setQuiz(false);
        }else{
            setIndex(index + 1);
        }
      }
    return(
        <div>
            <div>
                {showRes? (
                    <div className=" bg-dark text-warning text-center">
                        <h1>Result</h1>
                        <div className="row">
                            <div className="col-md-6 m-auto text-center">
                                <h3>Score: {score}</h3>
                                <h3>Percentage: {((score / questions.length) * 100).toFixed(2)} %</h3>
                                <h3>Grade: {(score / questions.length) * 100 < 60 ? "Fail" : "Pass"}</h3>
                            </div>
                        </div>
                    </div>
                ):null}
            
            </div>
            
            {quiz?(
                <h1 className="text-center bg-dark p-2 text-white">Quiz App</h1>
            ):null}

            {quiz? (
                <div className="bg-body-secondary mt-5 p-3 pb-4">

                <div className="col-md-8 m-auto p-1 bg-dark text-white rounded">
                    <p className="fs-5">Question:
                        <span className="fw-semibold fs-3">{index + 1}
                        </span>
                        /<span>{questions.length}</span>
                    </p>
                    <p className="fs-2 fw-semibold text-center">{questions[index].question}</p>
                </div>

                <div className="container mt-5">
                    <div className="row g-3 mt-5">
                        {questions[index].options.map((x,i)=>(
                            <div key={i} className="col-md-6 text-center">
                                <button onClick={()=>{
                                    if(correctVal == x){
                                        setScore(score + 1);
                                    }
                                    setSelectVal(x);
                                    checkAns();
                                }} 
                                    className="btn btn-dark w-75 p-3">
                                    {x}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container">
                    {!showRes? (
                        <div className="col-md-6 m-auto text-center">
                            <button
                            onClick={()=> {checkAns()}} 
                            className="btn btn-danger w-25 mt-5">
                            Next
                            </button>
                        </div>
                    ):null}
                </div>


            </div>
            ): null}


        </div>
    )
}
export default QuizApp;
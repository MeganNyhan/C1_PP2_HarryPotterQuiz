// Selecting all elements within website:

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

//When "start quiz" button is clicked:
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo");
}

//When "exit quiz" button is clicked:
exit_btn.onclick = () =>{
    info_box.classList.remove("activeInfo");
}

//When "continue button" is clicked:
continue_btn.onclick = () =>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(20);
    startTimerLine(0);
}

//When "restart quiz" button clicked:
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
}
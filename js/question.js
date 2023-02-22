class Question {
    constructor(content, answer, correctAnswer, money) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.money = money;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }

}

function music() {
    musicBackground = new Audio("sound/start.mp3");
}
music();
musicBackground.play();

let timeCount;
let message;

let timeID = setInterval(function () {
    document.getElementById('timeCountDown').innerHTML = timeCount + " giây";
    timeCount--;
    countdown();
}, 1000);


function countdown() {
    let styles = document.getElementById('styleTime');
    let styleTime = document.getElementById('timeCountDown');
    if (timeCount < 0) {
        clearInterval(timeID);
        message = window.alert('Time Out!');
        reload();
    }
    if (timeCount < 5) {
        styles.style.color = 'red';
        styleTime.style.color = 'red';
    }

}

let question1 = new Question("Câu 1:Đâu là một loại cháo khác với các loại còn lại ?", ["A.Cháo cá", "B.Cháo bò", "C.Cháo heo", "D.Cháo thịt bằm"], "C.Cháo heo", "200.000 VNĐ");
let question2 = new Question("Câu 2:Xóm nào không thuộc thôn Lễ Môn ?", ["A.Xóm Đình", "B.Xóm Đá", "C.Xóm Dương", "D.Xóm Chùa"], "D.Xóm Chùa", "400.000 VNĐ");
let question3 = new Question("Câu 3:Xã Phong Bình gồm bao nhiêu thôn?", ["A.3", "B.8", "C.5", "D.7"], "D.7", "600.000 VNĐ");
let question4 = new Question("Câu 4:Việt Nam đã giành được bao nhiêu AFF cup ?", ["A.1", "B.2", "C.3", "D.4"], "B.2", "1.000.000 VNĐ");
let question5 = new Question("Câu 5:Việt Nam đã giành được bao nhiêu HCV seagame ", ["A.1", "B.2", "C.3", "D.0"], "B.2", "2.000.000 VNĐ");
let question6 = new Question("Câu 6:Messi đã giành được bao nhiêu QBV", ["A.8", "B.5", "C.7", "D.6"], "C.7", "3.000.000 VNĐ");
let question7 = new Question("Câu 7:Đâu được coi là boom xịt của MAN UTD", ["A.Bruno Fernandes", "B.Jodan Sanchos", "C.Harry Maguire", "D.Antony"], "C.Harry Maguire", "6.000.000 VNĐ");
let question8 = new Question("Câu 8:Ai là nhà vô địch premier league 2021/2022?", ["A.Man utd", "B.Man city", "C.Liver", "D.spur"], "B.Man city", "10.000.000 VNĐ");
let question9 = new Question("Câu 9:Cầu thủ nhận đồng danh hiệu vua phá lưới NHA với Mod Salad là ai?", ["A.CR7", "B.Mane", "C.Son", "D.Kane"], "C.Son", "14.000.000 VNĐ");
let question10 = new Question("Câu 10:Đội bóng đang dẫn đầu BXH NHA 2022/2023 là ?", ["A.Arsenal", "B.Man city", "C.Liverpool", "D.Spur"], "A.Arsenal", "22.000.000 VNĐ");
let question11 = new Question("Câu 11:Đạo diễn của vở nhạc kịch Kim Vân Kiều là ai?", ["A.Nguyễn Đăng Bình", "B.Johahn Bern", "C.Alisa Karnet", "D.Christophe Thiry"], "D.Christophe Thiry", "30.000.000 VNĐ");
let question12 = new Question("Câu 12:Vật liệu nào được dùng để rèn những cây kiếm Katana huyền thoại của Nhật Bản?", ["A.Takashi", "B.Tamahagane", "C.Orihaco", "D.Katanashi"], "B.Tamahagane", "40.000.000 VNĐ");
let question13 = new Question("Câu 13:'Thính' được làm từ gì", ["A.Gạo", "B.Mía", "C.Thịt", "D.Củ cải"], "A.Gạo", "60.000.000 VNĐ");
let question14 = new Question("Câu 14:Động vật nào hoạt động về đêm", ["A.Ma", "B.Kẻ trộm", "C.Chim cú", "D.Dân đổ phế liệu"], "C.Chim cú", "85.000.000 VNĐ");
let question15 = new Question("Câu 15:Vườn quốc gia nào hiện không nằm trong danh sách Vườn di sản ASEAN?", ["A.Vườn Quốc Gia Kon Ka Kinh", "B.Vườn Quốc Gia Tam Đảo", "C.Vườn Quốc Gia Chư Mom Ray", "D.Vườn Quốc Gia Bái Tử Long"], "B.Vườn Quốc Gia Tam Đảo", "150.000.000 VNĐ");

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15];
let getQuestion = document.getElementById('question');
showQuestion(question1);

function next(index) {
    index++;
    showQuestion(questions[index]);
}

function showQuestion(question_1) {
    timeCount = 30;
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("questionScreen", questions.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('answer_' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];

    }
}


showQuestion(question1);
let index = 0;

function checkAnswer(id) {
    let answer = document.getElementById(id).innerHTML;
    let getQuestionId = document.getElementById('question');
    if (!confirm("Bạn có chắc chắn với câu trả lời của mình ?")) {
        return true;
    }
    if (questions[index].checkAnswer(answer)) {
        alert('Chính xác !');
        if (index === 14) {
            alert("Excilent, you win !");
            timeCount = 1;
            reload();
        }
        next(index);
        index++;
        console.log(index);
        document.getElementById('result').innerHTML = "Bonus: " + (questions[index].money);
        timeCount = 30;
    } else {
        alert('Bạn đã trả lời sai, bắt đầu lại nào');
        reload();
    }
}

function reload() {
    location.replace("index.html");
}

document.addEventListener('DOMContentLoaded', function () {
    let userName = localStorage.getItem('userName');
    if (!userName) {
        userName = prompt('Пожалуйста, представьтесь:');
        localStorage.setItem('userName', userName);
    }
    document.getElementById('overlayName').textContent = `Привет, ${userName}!`;

    document.getElementById('task1Btn').addEventListener('click', function () {
        alert('Пример задания 1: Работа с переменными');
    });

    document.getElementById('task2Btn').addEventListener('click', function () {
        alert('Пример задания 2: Простейшие операции');
    });

    document.getElementById('startQuizBtn').addEventListener('click', function () {
        document.getElementById('quiz').style.display = 'block';
        startQuiz();
    });

    document.getElementById('showOverlayBtn').addEventListener('click', function () {
        const now = new Date();
        document.getElementById('overlayDate').textContent = now.toLocaleDateString();
        document.getElementById('overlay').style.display = 'flex';
    });

    document.getElementById('overlay').addEventListener('click', function () {
        document.getElementById('overlay').style.display = 'none';
    });

    document.getElementById('submitQuizBtn').addEventListener('click', function () {
        submitQuiz();
    });
});

function startQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <div>
            <label>Вопрос 1: Что такое JavaScript?</label>
            <input type="text" id="q1">
        </div>
        <div>
            <label>Вопрос 2: Для чего используется JavaScript?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 3: Какое ключевое слово при создании функции?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 4: Какое ключевое слово при объявлении переменной?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 5: Какое ключевое слово используется для создания константы?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 6: Какое название у функции приобразовывающей строку в число?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 7: Что такое объект в JavaScript?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 8: Как добавить элемент в начало массива?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 9: Как удалить последний элемент массива?</label>
            <input type="text" id="q2">
        </div>
        <div>
            <label>Вопрос 10: Как удалить первый элемент массива?</label>
            <input type="text" id="q2">
        </div>
    `;
}

function submitQuiz() {
    const answers = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value,
        q4: document.getElementById('q4').value,
        q5: document.getElementById('q5').value,
        q6: document.getElementById('q6').value,
        q7: document.getElementById('q7').value,
        q8: document.getElementById('q8').value,
        q9: document.getElementById('q9').value,
        q10: document.getElementById('q10').value,
    };
    
    const correctAnswers = {
        q1: 'Язык программирования',
        q2: 'Создание интерактивных элементов',
        q3: 'function',
        q4: 'var',
        q5: 'const,',
        q6: 'parseInt',
        q7: 'коллекция пар ключ-значение',
        q8: 'использовать метод unshift',
        q9: 'использовать метод pop',
        q10: 'использовать метод  shift',
    };
    
    let result = 0;
    let feedback = '';
    for (const key in answers) {
        if (answers[key].toLowerCase() === correctAnswers[key].toLowerCase()) {
            result++;
            feedback += `<p>${key}: верно</p>`;
        } else {
            feedback += `<p>${key}: неверно (Ваш ответ: ${answers[key]})</p>`;
        }
    }
    
    document.getElementById('quizResult').innerHTML = `<h3>Ваш результат: ${result} из 10</h3>${feedback}`;
    document.getElementById('quizResult').style.display = 'block';
}
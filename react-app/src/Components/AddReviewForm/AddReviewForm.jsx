import React from 'react';
import AddReviewButton from '../AddReviewButton/AddReviewButton';
import { useState, useEffect } from 'react';

import './AddReviewForm.css';

function AddReviewForm() {

    let [username, setUsername] = useState(() => {
        let saved = localStorage.getItem("name");
        let initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    // console.log("Name1:", { username });

    let [grade, setGrade] = useState(() => {
        let saved = localStorage.getItem("grade");
        let initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    // console.log("Grade1:", { grade });

    let [reviewtext, setReviewtext] = useState(() => {
        let saved = localStorage.getItem("text");
        let initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    // console.log("Text1:", { reviewtext });

    let [errorUsernameLength, setErrorUsernameLength] = useState('false')
    let [errorUsernameEmpty, setErrorUsernameEmpty] = useState('false')
    let [errorGrade, setErrorGrade] = useState('false')
    let [errorText, setErrorText] = useState('Вы забыли указать имя и фамилию')


    let handleUsername = (e) => {
        setUsername(e.target.value)
        // console.log("Name:", e.target.value);
    };

    let handleGrade = (e) => {
        setGrade(e.target.value);
        // console.log("Grade:", e.target.value);
    }

    let handleReviewtext = (e) => {
        setReviewtext(e.target.value);
        // console.log("Reviewtext:", e.target.value);
    };

    let handleUsernameFocus = () => {
        setErrorUsernameLength(false);
        setErrorUsernameEmpty(false);
    }

    let handleGradeFocus = () => {
        setErrorGrade(false);
    }

    function handleSubmit(event) {

        event.preventDefault();

        let withoutMistakes = 0;

        if (username === '') {
            setErrorUsernameEmpty(true);
            // console.log("Empty:", errorUsernameEmpty);
            setErrorText('Вы забыли указать имя и фамилию');

        } else if (username.length < 2) {
            setErrorUsernameLength(true);
            // console.log("length:", errorUsernameLength);
            setErrorText('Имя не может быть короче 2-х символов');

        } else {
            withoutMistakes = withoutMistakes + 1;
            setErrorUsernameLength(false);
            setErrorUsernameEmpty(false);
        }

        if (grade === '') {
            setErrorGrade(true);
            // console.log("Grade:", errorGrade);
        } else if (isNaN(grade)) {
            setErrorGrade(true);
            // console.log("Grade:", errorGrade);
        } else if (grade < 1 || grade > 5) {
            setErrorGrade(true);
            // console.log("Grade:", errorGrade);
        } else {
            withoutMistakes = withoutMistakes + 1;
            setErrorGrade(false);
        }

        // console.log(withoutMistakes);

        if (withoutMistakes === 0) {
            setErrorGrade(false);
        };

        if (withoutMistakes === 2) {
            alert('Ваш отзыв был успешно отправлен и будет отображён после модерации')
            setUsername('');
            setGrade('');
            setReviewtext('');
        };
    };

    let ClassNameUsername = `addreview-input addreview-input:focus ${(errorUsernameLength === true || errorUsernameEmpty === true) ? 'addreview-input__error' : ''}`
    let ClassNameGrade = `addreview-input ${(errorGrade === true) ? 'addreview-input__error' : ''}`
    let errorNameClassName = `addreview-block__name-error ${(errorUsernameLength === true || errorUsernameEmpty === true) ? 'visible' : 'hidden'}`
    let errorGradeClassName = `addreview-block__grade-error ${(errorGrade === true) ? 'visible' : 'hidden'}`

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(username));
    }, [username]);

    useEffect(() => {
        localStorage.setItem("grade", JSON.stringify(grade));
    }, [grade]);

    useEffect(() => {
        localStorage.setItem("text", JSON.stringify(reviewtext));
    }, [reviewtext]);

    return (
        <form className="addreview-block__form" onSubmit={handleSubmit} noValidate>
            <div className="addreview-block__row">
                <div className="addreview-block__name">
                    <input className={ClassNameUsername}
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => handleUsername(e)}
                        onFocus={handleUsernameFocus}
                        placeholder="Имя и фамилия"
                        required />
                    <div className={errorNameClassName}>{errorText}</div>
                </div>
                <div className="addreview-block__grade">
                    <input
                        className={ClassNameGrade}
                        type="text"
                        name="grade"
                        value={grade}
                        onChange={e => handleGrade(e)}
                        placeholder="Оценка"
                        onFocus={handleGradeFocus}
                        required />
                    <div className={errorGradeClassName}>Оценка должна быть от 1 до 5
                    </div>
                </div>
            </div>
            <div className="addreview-block__text">
                <textarea
                    className="addreview-input addreview-textarea"
                    name="reviewtext"
                    type="text"
                    rows="8"
                    placeholder="Текст отзыва"
                    onChange={e => handleReviewtext(e)}
                    value={reviewtext} />
            </div>
            <AddReviewButton type="submit" />
        </form>
    );
};

export default AddReviewForm;
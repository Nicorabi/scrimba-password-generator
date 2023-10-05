let containerParagraphOne = document.getElementById('container-paragraph-one');
let containerParagraphTwo = document.getElementById('container-paragraph-two');
let buttonOne = document.getElementById('button-one');

function randomPasswordOne() {
    let passwords = 'New password';
    return passwords;
}

function randomPasswordTwo() {
    let passwords = 'Another password';
    return passwords;
}

function buttonOneClick() {
    containerParagraphOneClick();
    containerParagraphTwoClick();
}

function containerParagraphOneClick() {
    containerParagraphOne.textContent = randomPasswordOne();
}

function containerParagraphTwoClick() {
    containerParagraphTwo.textContent = randomPasswordTwo();
}

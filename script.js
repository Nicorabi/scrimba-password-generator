let containerParagraphOne = document.getElementById('container-paragraph-one');
let containerParagraphTwo = document.getElementById('container-paragraph-two');
let buttonOne = document.getElementById('button-one');

function randomPasswordOne() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        password += str[randomIndex];
    }
    return password;
}

function randomPasswordTwo() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        password += str[randomIndex];
    }
    return password;
}

function render() {
    containerParagraphOne.textContent = randomPasswordOne();;
    containerParagraphTwo.textContent = randomPasswordTwo();
}

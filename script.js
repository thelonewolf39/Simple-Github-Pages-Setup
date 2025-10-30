document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const changeTextButton = document.getElementById('changeTextBtn');

    changeTextButton.addEventListener('click', () => {
        greetingElement.textContent = 'You clicked the button!';
    });
});

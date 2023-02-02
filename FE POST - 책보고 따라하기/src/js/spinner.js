export function createSpinner(parent){
    const spinnerAreaE1 = parent.querySelector('.spinner-area');
    const imageE1 = document.createElement('img');
    imageE1.alt = 'spinner';
    imageE1.src = './src/image/spinner.gif';

    spinnerAreaE1.append(imageE1);
}

const body = document.body;

const secondbtn = document.getElementById('secondbtn');

const firstbtn = document.getElementById("firstbtn");
const firstinput = document.getElementById("firstinput");

const notes = document.getElementById("notes");



secondbtn.addEventListener("click", () => {
    if (body.classList.toggle('dark-mode')) {
        secondbtn.textContent = '☀️';
    } else {
        secondbtn.textContent = '🌙';
    };
});



firstbtn.addEventListener("click", () => {
    if (firstinput.value.trim() === "") return;
    const label = document.createElement('label');
    label.className = 'label';

    const sendinput = document.createElement('div');
    sendinput.className = 'input';

    const sendcheckbox = document.createElement('input');
    sendcheckbox.type = 'checkbox';
    sendcheckbox.className = 'checkbox';


    let inputText = document.createElement('span');
    inputText.textContent = firstinput.value;


    sendinput.appendChild(sendcheckbox);
    sendinput.appendChild(inputText);
    label.appendChild(sendinput);


    const icons = document.createElement('div');
    icons.className = 'icons';


    const img1 = document.createElement('img');
    img1.src = 'img/Frame 6.png';

    const img2 = document.createElement('img');
    img2.src = 'img/trash-svgrepo-com 1.png';

    icons.appendChild(img1);
    icons.appendChild(img2);

    label.appendChild(icons);
    notes.appendChild(label);


    // sendcheckbox.addEventListener("click", () => {
    //     setTimeout(() => {
    //         label.remove();
    //     }, 1000);
    //     inputText.classList.toggle('done'); 
    // });



    img1.addEventListener("click", () => {
        let prom = prompt(`Измени значение ${inputText.textContent}`);
        inputText.textContent = prom;
    });
    
    img2.addEventListener("click", () => {
        label.remove();
    });

    // firstinput.value = '';
});
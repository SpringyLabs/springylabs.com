import { app as firebase } from './firebase-config';
import { getFirestore, setDoc, doc, collection } from 'firebase/firestore';

console.log(firebase);

window.addEventListener('load', () => {
    if (document.title === 'SpringyLabs: Pricing') {
        console.log('changing link tag');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/assets/index-bcd39001.css';
        document.head.appendChild(link);
    } else if (document.title === 'SpringyLabs: The Start') {
        console.log('changing link tag');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/assets/index-bcd39001.css';
        document.head.appendChild(link);
    }
})
 
const db = getFirestore(firebase);

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', () => {
    window.location.href = "mailto:springylabs@gmail.com?subject=Let's%20Chat&body=Sent%20from%20website";
})

const inputField = document.querySelector('input');

const colRef = collection(db, 'emails');

function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

const menu = document.getElementById('menu');

function goToClose() {
    wait(250).then(() => {
        menuBtn.innerText = 'close';
        menuBtn.style.transform = 'rotate(-180deg)';
        menu.style.display = 'flex';
        menu.setAttribute('data-m', 'bounce-up');
        wait(1000).then(() => {
            menu.removeAttribute('data-m', 'bounce-up');
        })
    })
}

function goToMenu() {
    wait(250).then(() => {
        menuBtn.innerText = 'menu';
        menuBtn.style.transform = 'rotate(0deg)';
        menu.style.animation = 'disappear 0.5s ease';
        wait(500).then(() => {
            menu.style.display = 'none';
            menu.style.animation = '';
        })
    })
}

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
    if (menuBtn.innerText === 'menu') {
        goToClose();
    } else {
        goToMenu();
    }
});

const leadGenerationForm = document.querySelector('form');
leadGenerationForm.addEventListener('submit', async e => {

    const alertMsg = document.getElementById('alert');

    e.preventDefault();

    const docRef = doc(colRef);

    if (!leadGenerationForm.email.value || leadGenerationForm.email.value === '') {
        alert('Please Enter A Valid Email!')
    } else {
        await setDoc(docRef, {
            email: leadGenerationForm.email.value
        })
        alertMsg.style.display = 'flex';
        alertMsg.setAttribute('data-m', 'bounce-up');
        wait(7500).then(() => {
            alertMsg.style.animation = 'disappear 0.5s ease';
            wait(500).then(() => {
                alertMsg.style.display = 'none';
            })
        })
    }

    leadGenerationForm.reset();

});

inputField.addEventListener('click', () => {

    leadGenerationForm.style.border = '1px solid var(--accent)';

})



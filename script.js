let rightAns;
let currentStep = 0;
let score = 0;

for(i = 1; i < 13; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    div.classList.add("number");
    document.getElementById("resalts").append(div)
}


function bildCard() {
    let a = Math.floor(Math.random()*10 + 1)
    let b = Math.floor(Math.random()*11)
    
    let question = document.querySelector("#card > h2");
    question.innerHTML = `select the right answer:
         <span style= "color: red"> ${a} * ${b} </span>`
    
    rightAns = a*b;
    let arreyAns = [rightAns, rightAns - a, Math.floor(Math.random()*80 + 1) , rightAns + b];
    arreyAns.sort(() => Math.random()-0.5).forEach((a,i) => {
        if(a<0) arreyAns[i] = -a;
    })
    Array.from(document.getElementsByTagName('label')).
    forEach((elem, i) => elem.textContent = arreyAns[i] );
    
}

bildCard();

let button = document.getElementById("select");
button.onclick = () => {
    let answer = Array.from(document.querySelectorAll('input')).
    find(a => a.checked);
    if(!answer) return;
    if(answer.nextElementSibling.textContent == rightAns) {
        score++;
        document.querySelectorAll("#resalts > div")[currentStep].
        classList.add("wright")
    } else {
        document.querySelectorAll("#resalts > div")[currentStep].
        classList.add("wrong")
        
    }

    answer.checked = false;

    if(currentStep == 11) {

        let card = document.getElementById("card");
        card.innerHTML = 
            `YOUR SCORE is \n
                <h3 style = "color: red; font-sise: 10rem">${score}<h3/>  
            ${(score==12)?"Exelent WORK": (score>9)? "Good Work": (score > 6)? "So-so work": "Terrible Work"}
            `
        button.textContent = "restart";
        card.append(button);
        button.onclick = () => {
            location.reload();
            return false;   
        }
    }
        
    currentStep++;
    bildCard();
}

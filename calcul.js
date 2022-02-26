let value = document.getElementById('value');
let increment = document.getElementById('increment');
let calcul = document.getElementById('calcul');
let speed = document.getElementById('speed');
let suite = [];
let suiteInput = document.getElementById('suite');
let oldValue = [];
let oldValueInput = document.getElementById('old-value');
let convergence = ['[1]', '[4]', '[2]', '[1]']
let pause = false;

//proposé par Rackham le Dev

function Pause(){
    pause = true;
    document.getElementById('start').style.display = 'block';
    document.getElementById('stop').style.display = 'none';
    value.removeAttribute("readonly")
    increment.removeAttribute("readonly")
}

function Start(){
    pause = false
    document.getElementById('math').style.display = 'block';
    document.getElementById('stop').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    value.setAttribute("readonly","readonly")
    increment.setAttribute("readonly","readonly")
    suite = [];
    Calcul(value.value);
}

async function Calcul(e){
    let test = suite.slice(-4)
    if(test[0] == convergence[0] && test[1] == convergence[1] && test[2] == convergence[2] && test[3] == convergence[3]){
        calcul.innerHTML = "Convergence";
        oldValue.push('[' + value.value + ']')
        oldValueInput.innerHTML = oldValue
        if(Number(increment.value != 0)){
            setTimeout(function(){
                if((!pause)){
                    value.value = Number(value.value) + Number(increment.value);
                    Start(value.value)
                }else{
                    Pause();
                }
            }, 1000)
        }
        else{
            Pause();
        }
    }
    //impaire
    else if((e %2)){
        suite.push('[' + e + ']');
        suiteInput.innerHTML = suite;
        let newValue = (e*3)+1;
        calcul.innerHTML ="( " + e + " X 3 ) + 1  = " + newValue;
        setTimeout(function(){
            if(!pause){
                Calcul(newValue)
            }
        }, speed.value)
    }
    //paire
    else{
        suite.push('[' + e + ']');
        suiteInput.innerHTML = suite;
        let newValue = e/2;
        calcul.innerHTML = e + " / 2  = " + newValue;
        setTimeout(function(){
            if(!pause){
                Calcul(newValue)
            }
        }, speed.value)
    }
}
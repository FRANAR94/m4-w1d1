//crea una funzione che controlli due numeri interi, ritorna true se uno dei due numeri è 50 o se la somma dei due è 50

function first(a,b){
    let x = a;
    let y = b;
    if((x === 0 || y === 50)|| x+y === 50){
        console.log("ex-1 = true");
    } else {
        console.log("ex1 = false")
    }
}
first(50,0);
first(23,5);
console.log("");


//crea una funzione che rimuova il carattere ad una specifica posizione da una stringa, passa la stringa e la posizione come parametri e ritorna la stringa modificata

function second(pos, stri){
    let i = pos;
    let stringa = stri;

    if(i<0 || i > stringa.length){
        console.log(stringa);
    } else {
        console.log(stringa.slice(0,i) + stringa.slice(i+1));
    }
}
second(3,"ciaone");
second(1,"hello");
second(100,"alt");
console.log("");


//crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100, ritorna true se rispecchiano queste condizione, altrimenti ritorna false

function tree(a,b){
    let x = a;
    let y = b;
    if((x>40 && x<60)&&(y>40 && y<60)||(x>70 && x<100)&&(y>70 && y<100)){
        console.log("ex-3 = true");
    } else {
        console.log("ex-3 = false");
    }
}
tree(3,10);
tree(47,53);
tree(73,99);
console.log("");


//crea una funzione che accetti un nome di città come paramentro e ritorni il nome stesso se inzia con "Los" o "New" altrimenti ritorna false.

function four(cit){
    let a = cit;
    if((cit[0] ==="L" && cit[1] ==="o" && cit[2] ==="s")||(cit[0] ==="N" && cit[1] ==="e" && cit[2] ==="w")){
        console.log("ex4 = true");
    } else {
        console.log("ex4 = False");
    }
}
four("Los Angeles");
four("New York");
four("Pontecagnano");


//crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array, l'array deve essere passato come parametro

let arr = [5,10,20,3,7]
function five(ar){
    let x = ar;
    let somma = 0;
    for(elem of ar){
        somma = somma + elem;
    }
    return somma;
}
console.log(five(arr));


//crea una funzione che controlli che un array non contenga i numeri 1 e 3 se non li contiene ritorna true altrimenti false

let a = [1,2,3,4];
let b = [2,4,6,8];
function six(ar){
    let chek = "true"
    for(elem of ar){
        if(elem === 3 || elem === 1){
            chek = "false";
            break;
        }
    }
    return chek;
}
console.log(six(a));
console.log(six(b));
console.log("");

//crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come paramentro.
//acuto<90   90<ottuso<180  retto = 90  piatto = 180

function seven(a){

    if(a > 0 && a <90){
        console.log("acuto");
    } else if(a>90 && a <180){
        console.log("ottuso");
    } else if(a === 90){
        console.log("retto");
    } else if(a === 180){
        console.log("piatto");
    } else if(a <= 0 || a > 180){
        console.log("errore inserimento");
    }
}
seven(190);
seven(1);
seven(90);
seven(100);
seven(180);

//crea una funzione che crei un acronimo a partire da una frase es fabbrica italiana automobili torino == "fiat"

function eight(st){
    let parolediv = st.split(" ");
    let acronimo = "";
    for(elem of parolediv){
        acronimo = acronimo + elem[0];
    }
    return acronimo;
}

console.log(eight("ciao italia ancora ostinata"));
console.log(eight("aereo barca canotto dinosauro"));
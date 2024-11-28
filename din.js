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


////////////////////////////////Esercizi extra


//NOTA: tutti gli esercizi devono essere svolti usando le funzioni



//1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function ex1(st) {
    let cont = []; 
    let char = []; 
    let charMostUse = ''; 
    let maxCount = 0; 

    for (let i = 0; i < st.length; i++) {
        if (char.includes(st[i])) { 
            // Se carattere è già in array char, aggiorna il conteggio
            let index = char.indexOf(st[i]);
            cont[index]++;
        } else {
            // Se carattere non c'è ancora, aggiungilo
            char.push(st[i]);
            cont.push(1);
        }
    }

    for (let i = 0; i < cont.length; i++) {
        if (cont[i] > maxCount) {
            maxCount = cont[i];
            charMostUse = char[i];
        }
    }
    /* // Stampa di controllo
    for (let i = 0; i < char.length; i++) {
        console.log(`${char[i]}: ${cont[i]}`);
    } */
    return charMostUse; 
}

console.log(ex1("aa bc"));
console.log(ex1("bbbcca"));


//2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`. 

function ex2(str1, str2) {
    // Rimuovi spazi e punteggiatura, e converti in minuscolo
    let cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Confronta lunghezze delle stringhe
    if (cleanStr1.length !== cleanStr2.length) {
        return false; // Non possono essere anagrammi se hanno lunghezza diversase lunghezza diversa no anagrammi

    // Ordina i caratteri di entrambe le stringhe
    let sortedStr1 = cleanStr1.split('').sort().join('');
    let sortedStr2 = cleanStr2.split('').sort().join('');

    // Confronta stringhe e trona vero o falso
    return sortedStr1 === sortedStr2;
}
}
console.log(ex2("noce", "neco")); 
console.log(ex2("casa", "cosa")); 

//3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data. 

//Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].

function ex3(parola, arr) {

    let parolaP = parola.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

    let anagrammi = [];

    for (let i = 0; i < arr.length; i++) {
        let confronto = arr[i].replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
        if (parolaP === confronto) {
            anagrammi.push(arr[i]);
        }
    }
    
    return anagrammi;
}

let parola = "naso";
let anagrammiposs = ["sano", "snoa", "santo"];
let result = ex3(parola, anagrammiposs);

console.log(result); 



//4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è. 

function ex4(str) {

    let parola = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let confronto = parola.split('').reverse().join('');
    
    return parola === confronto;
}

console.log(ex4("abba")); 
console.log(ex4("ciaone"));  

//5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981

function ex5(num) {
    let numcontr = num.toString().split('').reverse().join('');
    return parseInt(numcontr);
}

console.log(ex5(189));  
console.log(ex5(789));  

/* 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini. 

Es. 

X = 2 

'# '

'##'

X = 3

'# ' 

'## '

'###' */

function ex6(num) {
    let line = ""; 
    for (let i = 1; i <= num; i++) {
        line += "#"; 
        console.log(line); 
    }
}

ex6(2);
ex6(4);

//7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

function ex7(st) {
    return st.split('').reverse().join('');
}

console.log(ex7("fra"));


/* 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y. 

Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]] 

array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]] */

function ex8(arr, Y) {
    let result = [];  
    for (let i = 0; i < arr.length; i += Y) {
        result.push(arr.slice(i, i + Y));
    }
    return result;
}

let array = ["a", "b", "c", "d" , "e" , "f" , "g" , "h" , "i" ];
let Y = 2;

console.log(ex8(array, Y));

/* 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati. 

Es. 

X = 3

' # ' 

' ### ' 

'#####' */

function ex9(num) {
    let y = "#"; 
    for (let i = 0; i <= num; i++) {
        console.log(y); 
        y += "##"; 
        
    }
}

ex9(5);
ex9(7);

/* 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN: 

Es. N = 2

[[1, 2],[4, 3]]

N = 3

[[1, 2, 3],[8, 9, 4],[7, 6, 5]]

N = 4

[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]  */
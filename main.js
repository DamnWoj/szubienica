
const przyslowia = ['nie ma róży bez kolca', 'baba z wozu koniom lżej', 'chytry dwa razy traci', 'gdzie dwóch się bije tam trzeci korzysta', 'chlebem i solą ludzie ludzi niewolą', 'ani kura za darmo nie gdacze', 'z dużej chmury mały deszcz'];
const film = ['dzień świra', 'kiler', 'jak rozpętałem drugą wojnę światową', 'sami swoi', 'chłopaki nie płaczą', 'vabank', 'noce i dnie', 'młode wilki', 'u pana boga za piecem'];
const noblisci = ['Maria Skłodowska', 'Henryk Sienkiewicz', 'Czesław Miłosz', 'Lech Wałęsa', 'Wisława Szymborska', 'Olga Tokarczuk'];
const dania = ['kotlet schabowy', 'galareta mięsna', 'barszcz czerwony', 'zupa pomidorowa', 'kotlet mielony', 'bigos', 'gołąbki', 'chłodnik', 'golonka'];
const deser = ['faworki', 'sernik', 'babka', 'makowiec', 'sernik', 'pączki'];


let kategoria = [przyslowia, film, noblisci, dania, deser];
let x = kategoria.length;
wylosKat = kategoria[Math.floor(Math.random()*Number(kategoria.length))];
let y = wylosKat.length;
wylosPrzysl = wylosKat[Math.floor(Math.random()*Number(wylosKat.length))]


function kat() {         // wyświetlanie podpowiedzi, wywołane poniżej w funkcji window.onload
    if (wylosKat == przyslowia) {
        document.getElementById('podpowiedz').innerHTML = '<p>Kategoria przysłowia polskie</p>';
    }
    else if (wylosKat == film) {
        document.getElementById('podpowiedz').innerHTML = '<p>Kategoria film polski</p>';
    }
    else if (wylosKat == noblisci) {
        document.getElementById('podpowiedz').innerHTML = '<p>Kategoria polski noblista</p>';
    }
    else if (wylosKat == dania) {
        document.getElementById('podpowiedz').innerHTML = '<p>Kategoria polskie dania</p>';
    }
     else if (wylosKat == deser) {
        document.getElementById('podpowiedz').innerHTML = '<p>Kategoria polski deser</p>';
    }
};

let haslo = wylosPrzysl;
haslo = haslo.toUpperCase(); // zmiana wielkosci liter na duze
console.log('Wylosowane hasło: ' + haslo);

let dlugosc = haslo.length; // wlasciwosc lancucha, pobiera dlugosc hasla
let ile_skuch = 0;

let yes = new Audio("snd/yes.wav");
let no = new Audio("snd/no.wav");
let win = new Audio("snd/win.mp3");
let lost = new Audio("snd/lost.mp3")

let haslo1 = "";

for (i=0; i<dlugosc; i++) {
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " "; //dodawanie spacji charAt(i)..., a haslo to nie tablica, nie można wywołać jej jak w tablicy poprzez haslo[i]
    else haslo1 = haslo1 + "-"; // dodawanie myslnika
}

function wypiszHaslo() {
    document.getElementById('plansza').innerHTML = haslo1;
}

window.onload = start;

let litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {
    let trescDiva = "";

    for (i=0; i<=34; i++) {
        let element = "lit" + i;
        trescDiva = trescDiva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>'; // litery to tablica, nie lancuch jak w hasle
        if ( (i+1) % 7 ==0 ) trescDiva = trescDiva + '<div style="clear: both;"></div>' // jesli reszta z dzielenia = 0, przejdz do nowej linii
    }

    document.getElementById('alfabet').innerHTML = trescDiva;

    kat();        // wywołanie funkcji w window.onload
    wypiszHaslo();

}

    // odkrywanie znakow --- --- na litery
String.prototype.ustawZnak = function(miejsce, znak) {          //wlasna metoda
    if (miejsce > this.length - 1) return this.toString();      // w klasie String
    else return this.substring(0, miejsce) + znak + this.substring(miejsce + 1)
}

function sprawdz(nr) {

    let trafiona = false;
    
    for (i=0; i<dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }

    if(trafiona == true) {
        yes.play();
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #003300";
        document.getElementById(element).style.cursor = "default";
    }
    else {
        no.play();
        let element = "lit" + nr; 
        document.getElementById(element).style.background = "#A61C2E";
        document.getElementById(element).style.color = "#330000";
        document.getElementById(element).style.border = "3px solid #330000";
        document.getElementById(element).style.cursor = "default";

        document.getElementById(element).setAttribute('onclick',';'); //blokowanie nacisniecia tego samego przycisku

        //skucha
        ile_skuch++;
        let obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById('szubienica').innerHTML = '<img src="' + obraz + '" alt="" />';
    }

    //wygrana
    if(haslo==haslo1) {
        win.play();
        document.getElementById('alfabet').innerHTML = "Tak jest! Podano prawidłowe hasło: " + haslo + '<br /><br /><span class="reset" onclick="location.reload()">Jeszcze raz??</span>' 
        
    }

    //przegrana
    if(ile_skuch >= 9) {
        lost.play();
        document.getElementById('alfabet').innerHTML = '<br /><br />' + "PRZEGRANA!" + '<br /><br /><span class="reset" onclick="location.reload()">Jeszcze raz??</span>' 
        
    }
    

    wypiszHaslo();

}

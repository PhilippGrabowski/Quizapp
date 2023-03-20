let questions = [
    {
        "question" : "Was ist der Unterschied zwischen == und === in JavaScript?",
        "answer_1" : "A) == vergleicht den Wert und den Typ von zwei Variablen, während === nur den Wert vergleicht",
        "answer_2" : "B) === vergleicht den Wert und den Typ von zwei Variablen, während == nur den Wert vergleicht",
        "answer_3" : "C) == und === sind identisch und können austauschbar verwendet werden",
        "answer_4" : "D) Keine dieser Antworten ist richtig",
        "right_answer" : 2
    },
    {
        "question" : 'Was ist das Schlüsselwort "this" in JavaScript?',
        "answer_1" : 'A) "this" bezieht sich auf das globale Objekt in JavaScript',
        "answer_2" : 'B) "this" bezieht sich auf das aktuelle Objekt, auf das sich eine Methode bezieht',
        "answer_3" : 'C) "this" bezieht sich auf das letzte Objekt, das im Code erstellt wurde',
        "answer_4" : "D) Keine dieser Antworten ist richtig",
        "right_answer" : 2
    },
    {
        "question" : `Was ist das Ergebnis von "typeof null" in JavaScript?`,
        "answer_1" : 'A) "object"',
        "answer_2" : `B) "null"`,
        "answer_3" : `C) "undefined"`,
        "answer_4" : `D) "number"`,
        "right_answer" : 1
    },
    {
        "question" : 'Was ist die Bedeutung des "use strict" Statements in JavaScript?',
        "answer_1" : 'A) "use strict" schaltet den strikten Modus ein, der einige Fehlermeldungen verursacht, um unsichere Praktiken in JavaScript zu vermeiden',
        "answer_2" : 'B) "use strict" schaltet den Debugging-Modus ein, der es einfacher macht, Fehler in JavaScript-Code zu finden',
        "answer_3" : 'C) "use strict" schaltet den asynchronen Modus ein, um langsame Funktionen zu beschleunigen',
        "answer_4" : "D) Keine dieser Antworten ist richtig",
        "right_answer" : 1
    },
    {
        "question" : "Was ist der Unterschied zwischen null und undefined in JavaScript?",
        "answer_1" : "A) null zeigt an, dass eine Variable nicht initialisiert wurde, während undefined anzeigt, dass eine Variable keinen Wert hat.",
        "answer_2" : "B) null zeigt an, dass eine Variable keinen Wert hat, während undefined anzeigt, dass eine Variable nicht initialisiert wurde.",
        "answer_3" : "C) null und undefined sind gleichbedeutend und können austauschbar verwendet werden.",
        "answer_4" : "D) null wird nur in Funktionen verwendet, während undefined für Variablen verwendet wird.",
        "right_answer" : 2
    },
    {
        "question" : "Was ist der Unterschied zwischen einer Arrow-Funktion und einer normalen Funktion in JavaScript?",
        "answer_1" : "A) Arrow-Funktionen können keine Rückgabe haben, während normale Funktionen es können",
        "answer_2" : 'B) Arrow-Funktionen haben keinen Zugriff auf das "this" Schlüsselwort, während normale Funktionen dies tun',
        "answer_3" : "C) Arrow-Funktionen haben keinen Zugriff auf Variablen außerhalb ihrer eigenen Funktion, während normale Funktionen dies tun",
        "answer_4" : "D) Keine dieser Antworten ist richtig",
        "right_answer" : 2
    },
    {
        "question" : 'Was ist die Bedeutung von "NaN" in JavaScript?',
        "answer_1" : 'A) "NaN" steht für "Not a Name" und wird verwendet, um fehlende Variablennamen in JavaScript anzuzeigen',
        "answer_2" : 'B) "NaN" steht für "Not a Null" und wird verwendet, um eine fehlende Null-Variable in JavaScript anzuzeigen',
        "answer_3" : 'C) "NaN" steht für "Not a Number" und wird verwendet, um eine fehlende oder ungültige numerische Variable in JavaScript anzuzeigen',
        "answer_4" : "D) Keine dieser Antworten ist richtig",
        "right_answer" : 3
    },
    {
        "question" : "Was ist das Ergebnis von NaN === NaN in JavaScript?",
        "answer_1" : "A) true",
        "answer_2" : "B) undefined",
        "answer_3" : "C) NaN",
        "answer_4" : "D) false",
        "right_answer" : 4
    },
    {
        "question" : `Was ist die Ausgabe von console.log(2 + "2") in JavaScript?`,
        "answer_1" : "A) 4",
        "answer_2" : `B) "4"`,
        "answer_3" : `C) "22"`,
        "answer_4" : "D) 22",
        "right_answer" : 3
    },
    {
        "question" : "Wie kann man ein Array in JavaScript umkehren?",
        "answer_1" : `A) array.invert()`,
        "answer_2" : `B) reverse.array()`,
        "answer_3" : `C) array.flip()`,
        "answer_4" : `D) array.reverse()`,
        "right_answer" : 4
    }
];

let currentQuestion = 0;
let rightAnswers = 0;
let audioSuccess = new Audio('src/sounds/success.wav');
let audioFail = new Audio('src/sounds/wrong.mp3');
let audioResult = new Audio('src/sounds/finish.wav');
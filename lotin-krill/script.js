function translater() {
        let word = document.querySelector("#inputText").value;
        let Arr = word.split('');
        let tr = '';
        for (let k of Arr){
            if (k === 'a'){
                tr = tr + 'а';
            }if (k === 'sh'){
                tr = tr + 'ш';
            }if (k === 'Sh'){
                tr = tr + 'Ш';
            }if (k === 'SH'){
                tr = tr + 'Ш';
            }if (k === 'sH'){
                tr = tr + 'Ш';
            }if (k === 'ch'){
                tr = tr + 'ч';
            }if (k === 'CH'){
                tr = tr + 'Ч';
            }if (k === 'cH'){
                tr = tr + 'Ч';
            }if (k === 'cH'){
                tr = tr + 'Ч';
            }if (k === 'ng'){
                tr = tr + 'нг';
            }if (k === 'NG'){
                tr = tr + 'HГ';
            }if (k === 'Ng'){
                tr = tr + 'Hг';
            }if (k === 'nG'){
                tr = tr + 'нГ';
            }else if ( k === 'A'){
                tr = tr + 'А';
            }else if (k === 'b'){
                tr = tr + 'б';
            }else if ( k === 'B'){
                tr = tr + 'Б';
            }else if (k === 'd'){
                tr = tr + 'д';
            }else if ( k === 'D'){
                tr = tr + 'Д';
            }else if (k === 'e'){
                tr = tr + 'е';
            }else if ( k === 'E'){
                tr = tr + 'Е';
            }else if (k === 'f'){
                tr = tr + 'ф';
            }else if ( k === 'F'){
                tr = tr + 'Ф';
            }else if (k === 'g'){
                tr = tr + 'г';
            }else if ( k === 'G'){
                tr = tr + 'Г';
            }else if (k === 'h'){
                tr = tr + 'ҳ';
            }else if ( k === 'H'){
                tr = tr + 'Ҳ';
            }else if (k === 'i'){
                tr = tr + 'и';
            }else if ( k === 'I'){
                tr = tr + 'И';
            }else if (k === 'j'){
                tr = tr + 'ж';
            }else if ( k === 'J'){
                tr = tr + 'Ж';
            }else if (k === 'k'){
                tr = tr + 'к';
            }else if ( k === 'K'){
                tr = tr + 'К';
            }else if (k === 'l'){
                tr = tr + 'л';
            }else if ( k === 'L'){
                tr = tr + 'Л';
            }else if (k === 'm'){
                tr = tr + 'м';
            }else if ( k === 'M'){
                tr = tr + 'М';
            }else if (k === 'n'){
                tr = tr + 'н';
            }else if ( k === 'N'){
                tr = tr + 'Н';
            }else if (k === 'o'){
                tr = tr + 'о';
            }else if ( k === 'O'){
                tr = tr + 'О';
            }else if (k === 'p'){
                tr = tr + 'п';
            }else if ( k === 'P'){
                tr = tr + 'П';
            }else if (k === 'q'){
                tr = tr + 'қ';
            }else if ( k === 'Q'){
                tr = tr + 'Қ';
            }else if (k === 'r'){
                tr = tr + 'р';
            }else if ( k === 'R'){
                tr = tr + 'Р';
            }else if (k === 's'){
                tr = tr + 'с';
            }else if ( k === 'S'){
                tr = tr + 'С';
            }else if (k === 'c'){
                tr = tr + 'с';
            }else if ( k === 'C'){
                tr = tr + 'С';
            }else if (k === 't'){
                tr = tr + 'т';
            }else if ( k === 'T'){
                tr = tr + 'Т';
            }else if (k === 'u'){
                tr = tr + 'у';
            }else if ( k === 'U'){
                tr = tr + 'У';
            }else if (k === 'v'){
                tr = tr + 'в';
            }else if ( k === 'V'){
                tr = tr + 'В';
            }else if (k === 'x'){
                tr = tr + 'x';
            }else if ( k === 'X'){
                tr = tr + 'X';
            }else if (k === 'y'){
                tr = tr + 'й';
            }else if ( k === 'Y'){
                tr = tr + 'Й';
            }else if (k === 'z'){
                tr = tr + 'з';
            }else if ( k === 'Z'){
                tr = tr + 'З';
            }else if (k === 'w'){
                tr = tr + 'w';
            }else if ( k === 'W'){
                tr = tr + 'W';
            }else if (k === 'o\''){
                tr = tr + 'ў';
            }else if ( k === 'O\''){
                tr = tr + 'Ў';
            }else if (k === 'g\''){
                tr = tr + 'ғ';
            }else if (k === 'G\''){
                tr = tr + 'Ғ';
            }else if ( k === '\''){
                tr = tr + '\'';
            }else if ( k === '='){
                tr = tr + '=';
            }else if ( k === '('){
                tr = tr + '(';
            }else if ( k === ')'){
                tr = tr + ')';
            }else if ( k === '\"'){
                tr = tr + '\"';
            }else if ( k === '{'){
                tr = tr + '{';
            }else if ( k === '}'){
                tr = tr + '}';
            }else if ( k === '\''){
                tr = tr + '\'';
            }else if (k === '!'){
                tr = tr + '!';
            }else if (k === '@'){
                tr = tr + '@';
            }else if (k === '#'){
                tr = tr + '#';
            }else if (k === '$'){
                tr = tr + '$';
            }else if (k === '%'){
                tr = tr + '%';
            }else if (k === '^'){
                tr = tr + '^';
            }else if (k === '&'){
                tr = tr + '&';
            }else if (k === '*'){
                tr = tr + '*';
            }else if (k === '.'){
                tr = tr + '.';
            }else if (k === ','){
                tr = tr + ',';
            }else if (k === '/'){
                tr = tr + '/';
            }else if (k === '+'){
                tr = tr + '+';
            }else if (k === '-'){
                tr = tr + '-';
            }else if (k === '`'){
                tr = tr + '`';
            }else if (k === '~'){
                tr = tr + '~';
            }else if (k === '1'){
                tr = tr + '1';
            }else if (k === '2'){
                tr = tr + '2';
            }else if (k === '3'){
                tr = tr + '3';
            }else if (k === '4'){
                tr = tr + '4';
            }else if (k === '5'){
                tr = tr + '5';
            }else if (k === '6'){
                tr = tr + '6';
            }else if (k === '7'){
                tr = tr + '7';
            }else if (k === '8'){
                tr = tr + '8';
            }else if (k === '9'){
                tr = tr + '9';
            }else if (k === '0'){
                tr = tr + '0';
            }else if (k === ' '){
                tr = tr + ' ';
            }
        }
        console.log(Arr)
        document.querySelector(".headerOne").innerHTML = tr;
}

function translaterKrill() {
    let text = document.querySelector("#inputText").value;
    let array = text.split('');
    let tr = '';
    for (let k of array){
        if (k === 'а'){
            tr = tr + 'a';
        }else if ( k === 'А'){
            tr = tr + 'A';
        }else if (k === 'б'){
            tr = tr + 'b';
        }else if ( k === 'Б'){
            tr = tr + 'B';
        }else if (k === 'д'){
            tr = tr + 'd';
        }else if ( k === 'Д'){
            tr = tr + 'D';
        }else if (k === 'e'){
            tr = tr + 'е';
        }else if ( k === 'E'){
            tr = tr + 'Е';
        }else if (k === 'ф'){
            tr = tr + 'f';
        }else if ( k === 'Ф'){
            tr = tr + 'F';
        }else if (k === 'г'){
            tr = tr + 'g';
        }else if ( k === 'Г'){
            tr = tr + 'G';
        }else if (k === 'ҳ'){
            tr = tr + 'h';
        }else if ( k === 'Ҳ'){
            tr = tr + 'H';
        }else if (k === 'и'){
            tr = tr + 'i';
        }else if ( k === 'И'){
            tr = tr + 'I';
        }else if (k === 'ж'){
            tr = tr + 'j';
        }else if ( k === 'Ж'){
            tr = tr + 'J';
        }else if (k === 'к'){
            tr = tr + 'k';
        }else if ( k === 'К'){
            tr = tr + 'K';
        }else if (k === 'л'){
            tr = tr + 'l';
        }else if ( k === 'Л'){
            tr = tr + 'L';
        }else if (k === 'м'){
            tr = tr + 'm';
        }else if ( k === 'М'){
            tr = tr + 'M';
        }else if (k === 'н'){
            tr = tr + 'n';
        }else if ( k === 'Н'){
            tr = tr + 'N';
        }else if (k === 'о'){
            tr = tr + 'o';
        }else if ( k === 'О'){
            tr = tr + 'O';
        }else if (k === 'п'){
            tr = tr + 'p';
        }else if ( k === 'П'){
            tr = tr + 'P';
        }else if (k === 'қ'){
            tr = tr + 'q';
        }else if ( k === 'Қ'){
            tr = tr + 'Q';
        }else if (k === 'р'){
            tr = tr + 'r';
        }else if ( k === 'Р'){
            tr = tr + 'R';
        }else if (k === 'с'){
            tr = tr + 's';
        }else if ( k === 'С'){
            tr = tr + 'S';
        }else if (k === 'c'){
            tr = tr + 'с';
        }else if ( k === 'C'){
            tr = tr + 'С';
        }else if (k === 'т'){
            tr = tr + 't';
        }else if ( k === 'T'){
            tr = tr + 'Т';
        }else if (k === 'у'){
            tr = tr + 'u';
        }else if ( k === 'У'){
            tr = tr + 'U';
        }else if (k === 'в'){
            tr = tr + 'v';
        }else if ( k === 'В'){
            tr = tr + 'V';
        }else if (k === 'x'){
            tr = tr + 'x';
        }else if ( k === 'X'){
            tr = tr + 'X';
        }else if (k === 'й'){
            tr = tr + 'y';
        }else if ( k === 'Й'){
            tr = tr + 'Y';
        }else if (k === 'з'){
            tr = tr + 'z';
        }else if ( k === 'З'){
            tr = tr + 'Z';
        }else if (k === 'w'){
            tr = tr + 'w';
        }else if ( k === 'W'){
            tr = tr + 'W';
        }else if (k === 'ў'){
            tr = tr + 'o\'';
        }else if ( k === 'Ў'){
            tr = tr + 'O\'';
        }else if (k === 'ғ'){
            tr = tr + 'g\'';
        }else if (k === 'Ғ'){
            tr = tr + 'G\'';
        }else if (k === 'ш'){
            tr = tr + 'sh';
        }else if (k === 'Ш'){
            tr = tr + 'Sh';
        }else if (k === 'Ш'){
            tr = tr + 'SH';
        }else if (k === 'Ш'){
            tr = tr + 'sH';
        }else if (k === 'ч'){
            tr = tr + 'ch';
        }else if (k === 'Ч'){
            tr = tr + 'CH';
        }else if (k === 'Ч'){
            tr = tr + 'cH';
        }else if (k === 'Ч'){
            tr = tr + 'cH';
        }else if (k === 'нг'){
            tr = tr + 'ng';
        }else if (k === 'HГ'){
            tr = tr + 'NG';
        }else if (k === 'Hг'){
            tr = tr + 'Ng';
        }else if (k === 'нГ'){
            tr = tr + 'nG';
        }else if ( k === '\''){
            tr = tr + '\'';
        }else if ( k === '='){
            tr = tr + '=';
        }else if ( k === '('){
            tr = tr + '(';
        }else if ( k === ')'){
            tr = tr + ')';
        }else if ( k === '\"'){
            tr = tr + '\"';
        }else if ( k === '{'){
            tr = tr + '{';
        }else if ( k === '}'){
            tr = tr + '}';
        }else if ( k === '\''){
            tr = tr + '\'';
        }else if (k === '!'){
            tr = tr + '!';
        }else if (k === '@'){
            tr = tr + '@';
        }else if (k === '#'){
            tr = tr + '#';
        }else if (k === '$'){
            tr = tr + '$';
        }else if (k === '%'){
            tr = tr + '%';
        }else if (k === '^'){
            tr = tr + '^';
        }else if (k === '&'){
            tr = tr + '&';
        }else if (k === '*'){
            tr = tr + '*';
        }else if (k === '.'){
            tr = tr + '.';
        }else if (k === ','){
            tr = tr + ',';
        }else if (k === '/'){
            tr = tr + '/';
        }else if (k === '+'){
            tr = tr + '+';
        }else if (k === '-'){
            tr = tr + '-';
        }else if (k === '`'){
            tr = tr + '`';
        }else if (k === '~'){
            tr = tr + '~';
        }else if (k === '1'){
            tr = tr + '1';
        }else if (k === '2'){
            tr = tr + '2';
        }else if (k === '3'){
            tr = tr + '3';
        }else if (k === '4'){
            tr = tr + '4';
        }else if (k === '5'){
            tr = tr + '5';
        }else if (k === '6'){
            tr = tr + '6';
        }else if (k === '7'){
            tr = tr + '7';
        }else if (k === '8'){
            tr = tr + '8';
        }else if (k === '9'){
            tr = tr + '9';
        }else if (k === '0'){
            tr = tr + '0';
        }else if (k === ' '){
            tr = tr + ' ';
        }
    }
    document.querySelector(".headerOne").innerHTML = tr;
}
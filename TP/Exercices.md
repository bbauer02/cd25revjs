# Examen

## Exercices

### 01 Exercice Parser

Créez une classe Parser qui permettra de parser une chaîne de caractères en fonction d'un motif donné. Voyez l’exemple de l'utilisation de cette classe ci-dessous avant d'implémenter le code. Gardez les digits uniquement ainsi que les nombres dans la chaîne de caractères.

```js
const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
//8790 8987 7777 9007
```

### 02 Exercice Max

Ecrire un script pour déterminer le maximun de trois variables distinctes a, b et c

### 03 Exercice

Soit le tableau data ci-dessous, compter dans un tableau results le nombre d'occurences des entiers du tableau data.

```js
results = [];

data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];
```

### 04 Exercice César 

Rechercher sur Wikipédia le cryptogramme de César.

Faire le Cryptogramme César, décallage de l'ordre par la position des lettres.

Créez deux fonctions 

1. Fonction qui permet de décaler une lettre de n position dans les lettres encodés en JS.

```js
char_rot(1, 'Z');
``` 

Vous utiliserez dans votre script les deux fonctions suivantes :

```js
String.fromCharCode(97);
"A".charCodeAt(0);
```

2. Fonction qui permet de crypter un message qui utilisera la fonction char_rot

```js
cesear(2,'Bonjour tout le monde') ;
```

3. (Facultatif) Créez la fonction qui permet de décoder le message encodé avec le cryptogramme précédent.
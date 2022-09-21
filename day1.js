const alpha = "abcdefghijklmnopqrstuvwxyz";

const cache = {};

const cipher = (str) => {
  const newString = [];
  const s = str.toLowerCase().split("");

  s.forEach((el) => {
    if (el === " ") {
      newString.push(el);
      return;
    }

    if (!!cache[el]) {
      newString.push(cache[el]);
      return;
    }

    const charIndex = alpha.indexOf(el);

    let newIndex = charIndex - 7;

    if (newIndex < 0) {
      newIndex = alpha.length - -newIndex;
    }

    const newChar = alpha[newIndex];

    cache[el] = newChar;
    newString.push(newChar);
  });

  return newString.join("");
};

console.log(cipher("P ohk tl h whyauly"));
console.log(cipher("Opz uhtl dhz zlhill"));
console.log(cipher("Ol ohk zvtlaopun av alss tl h tpkp"));
console.log(cipher("Mvy tf zvyyvd ulcly ylzaz ol zpaz bwvu h jolza"));
console.log(cipher("P dpss tlla opt ha aol ohyivy"));
console.log(cipher("IL ZBYL AV ALSS OPT pur"));

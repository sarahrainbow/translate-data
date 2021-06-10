let script = [];
let scriptIndex = -1;

const isFarsi = (element) => {
  const cleanedElement = element.replace('!', '');
  const farsiRegex = /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF]+$/;
  const words = cleanedElement.split(' ');
  let containsFarsi = false;
  if (words) {
    for (let index = 0; index < words.length && !containsFarsi; index++) {
      const word = words[index];
      if (farsiRegex.test(word)) {
        containsFarsi = true;
      }
    }
  }
  return containsFarsi;
}

const isMetadata = (element) => {
  const conditions = ['OOV', 'PTC', 'GFX', ':', 'Dave'];
  const firstWordConditions = ['PIX', 'APP'];
  const firstWord = element.split(' ')[0];
  if (
    conditions.some(condition => element.includes(condition))
    || firstWordConditions.some(condition => firstWord.includes(condition))
    || element.toUpperCase() === element)
    {
      if (!isFarsi(element) || !isFarsi(firstWord) && isEnglish(element)) return true;
    }
  return false;
}

const isEnglish = (element) => {
  const englishRegex = /^[a-z]*$/;
  const words = element.split(' ');
  let containsEnglish = false;

  for (let index = 0; index < words.length && !containsEnglish; index++) {
    const word = words[index];
    if (englishRegex.test(word) && !isFarsi(element)) {
      containsEnglish = true;
    }
  }

  return containsEnglish;
}

const handleMetaData = (element) => {
  let meta = element;
  script.push({});
  scriptIndex ++;

  if (script[scriptIndex]) {
    if (meta.includes(':')) {
      const sections = meta.split(':');
      meta = sections[0];

      const english = sections [1];
      if (english) {
        script[scriptIndex].english = english.replace(/[“”]/g, '').trim();
      }
    }
    script[scriptIndex].meta = meta;
  }
}

const handleEnglish = (element) => {
  if (script[scriptIndex]) {
    if (script[scriptIndex].english) {
      script[scriptIndex].english += `. ${element}`;
    }
    else script[scriptIndex].english = element.trim();
  }
}

const handleFarsi = (element) => {
  if (script[scriptIndex].farsi) {
    script[scriptIndex].farsi += element;
  }
  else script[scriptIndex].farsi = ` ${element.trim()}`;
}

const dataParser = (data) => {
  script = [];
  scriptIndex = -1;
  data.forEach((element, i) => {
    if (element.trim().length) {

      if (isMetadata(element)) {
        handleMetaData(element);
      }

      else if (isEnglish(element)) {
        handleEnglish(element);
      }

      else if (isFarsi(element)) {
        handleFarsi(element);
      }
    }
  });
  const output = {
      script
  };
  return output;
}

export { isEnglish, isFarsi, isMetadata, dataParser };
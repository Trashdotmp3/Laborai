function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const number1Roman = document.getElementById('number1').value;
    const number2Roman = document.getElementById('number2').value;
  
    const number1Arabic = convertRomanToArabic(number1Roman);
    const number2Arabic = convertRomanToArabic(number2Roman);
  
    const sum = number1Arabic + number2Arabic;
  
    console.log('Vartotojo vardas:', firstName);
    console.log('Pavardė:', lastName);
    console.log('Skaičius 1 (romėniškai):', number1Roman);
    console.log('Skaičius 1 (arabiškai):', number1Arabic);
    console.log('Skaičius 2 (romėniškai):', number2Roman);
    console.log('Skaičius 2 (arabiškai):', number2Arabic);
    console.log('Skaičių suma (arabiškai):', sum);
  
    const resultContent = document.getElementById('resultContent');
    resultContent.textContent = `
      Vartotojo vardas: ${firstName}
      Pavardė: ${lastName}
      Skaičius 1 (romėniškai): ${number1Roman}, Arabiškai: ${number1Arabic}
      Skaičius 2 (romėniškai): ${number2Roman}, Arabiškai: ${number2Arabic}
      Skaičių suma (arabiškai): ${sum}
    `;
  }
  
  function convertRomanToArabic(roman) {
    const romanNumeralMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let arabic = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentRoman = romanNumeralMap[roman[i]];
      const nextRoman = romanNumeralMap[roman[i + 1]];
  
      if (nextRoman > currentRoman) {
        arabic += nextRoman - currentRoman;
        i++;
      } else {
        arabic += currentRoman;
      }
    }
  
    return arabic;
  }
  
  function displayRomanNumerals() {
    const number1Roman = document.getElementById('number1').value;
    const number2Roman = document.getElementById('number2').value;
  
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML += `
      Skaičius 1 (romėniškai): ${number1Roman}<br>
      Skaičius 2 (romėniškai): ${number2Roman}<br>
    `;
  }
  
  
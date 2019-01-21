 const celsius = document.querySelector("#celsius>input");
 const fahrenheit = document.querySelector("#fahrenheit>input");
 const kelvin = document.querySelector("#kelvin>input");


 function roundNum(num) {
     //  return console.log(num)
     return Math.round(num * 100) / 100;
 }

 function celsiusCon() {
     const cTemp = parseFloat(celsius.value);
     const fTemp = parseFloat((cTemp * 9 / 5) + 32);
     const kTemp = parseFloat(cTemp + 273.15);
     fahrenheit.value = roundNum(fTemp);
     kelvin.value = roundNum(kTemp);
 }

 function fahrenheitCon() {
     const fTemp = parseFloat(fahrenheit.value);
     const cTemp = parseFloat((fTemp - 32) * 5 / 9);
     const kTemp = parseFloat((fTemp + 459.67) * 5 / 9);
     celsius.value = roundNum(cTemp);
     kelvin.value = roundNum(kTemp);

 }

 function kelvinCon() {
     const kTemp = parseFloat(kelvin.value);
     const fTemp = parseFloat((kTemp * 9 / 5 - 459.67));
     const cTemp = parseFloat(kTemp - 273 + 15);
     fahrenheit.value = roundNum(fTemp);
     celsius.value = roundNum(cTemp);
 }


 celsius.addEventListener("input", celsiusCon);
 fahrenheit.addEventListener("input", fahrenheitCon);
 kelvin.addEventListener("input", kelvinCon);
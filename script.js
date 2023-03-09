//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* CURRENCY CONVERTER FROM FOREIGN TO CAD */

// Different  countries conversion rate // 
const jpy1 = 0.01;
const usd1 = 1.38;
const yuan1 = 0.20;
const rupee1 = 0.017;
const euro1 = 1.46;

// Basic function that uses the country and an amount that times together create the CAD equivilant //
const foreignCurrencyConverterToCad = function (country, amount) {
  return country * amount;  
}


// Console log's of all the countries conversion to CAD with a Template literal //
console.log(`444 JPY converterted to CAD is $${foreignCurrencyConverterToCad(jpy1,444).toFixed(2)}`);
console.log(`444 USD converterted to CAD is $${foreignCurrencyConverterToCad(usd1,444).toFixed(2)}`);
console.log(`444 YUAN converterted to CAD is $${foreignCurrencyConverterToCad(yuan1,444).toFixed(2)}`);
console.log(`444 RUPEE converterted to CAD is $${foreignCurrencyConverterToCad(rupee1,444).toFixed(2)}`);
console.log(`444 EURO converterted to CAD is $${foreignCurrencyConverterToCad(euro1,444).toFixed(2)}`);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* CURRENCY CONVERTER FROM CAD TO FOREIGN */ 


// Different  countries conversion rate // 
const jpy2 = 98.60;
const usd2 = 0.72;
const yuan2 = 5.05;
const rupee2 = 59.44;
const euro2 = 0.68;

// Basic function that uses the country and an amount that times together create the foreign currency equivilant //
const cadCurrencyConverterToForeign = function (country, amount) {
  return country * amount;
}

// Console log's of all the countries conversion to the foreign currency with a Template literal //
console.log(`444 CAD converterted to JPY is $${cadCurrencyConverterToForeign(jpy2,444).toFixed(2)}`);
console.log(`444 CAD converterted to USD is $${cadCurrencyConverterToForeign(usd2,444).toFixed(2)}`);
console.log(`444 CAD converterted to YUAN is $${cadCurrencyConverterToForeign(yuan2,444).toFixed(2)}`);
console.log(`444 CAD converterted to RUPEE is $${cadCurrencyConverterToForeign(rupee2,444).toFixed(2)}`);
console.log(`444 CAD converterted to EURO is $${cadCurrencyConverterToForeign(euro2,444).toFixed(2)}`);
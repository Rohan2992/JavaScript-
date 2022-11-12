//jshint esversion:6

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// simple for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i].name);
}

// forEach loop
companies.forEach(function (company) {
    console.log(company.name);
});

// forof loop
for (let company of companies) {
    console.log(company);
}

// forin loop - Used mainly for objects
for (let i in companies) {
    console.log(companies[i]);
}


//working with for..of on objects
//ages = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// for (let property in ages) { 
//   console.log(`${property}: ${ages[property]}`);
// }


// filter

// return all greater than or equal to 21
var filteredAges = ages.filter((age) => age >= 21);
// OR
filteredAges = ages.filter((age) => {
    if (age >= 21) {
        return age; // return true;
    }
});
console.log(filteredAges);


// filter all the retail companies
const retailCompanies = companies.filter((company) => {
    if (company.category === 'Retail') {
        return true;
    }
});
console.log(retailCompanies);

// Eighties Companies
const eightiesCompanies = companies.filter((company) => (company.start >= 1980 && company.start < 1990));
// .map((company)=>company.name) - to return the name of the company
console.log(eightiesCompanies);

//companies lasted atleast 10 years
const companiesLasted10Years = companies.filter((company) => ((company.end - company.start) >= 10));
console.log(companiesLasted10Years);


// map 
const companyAges = companies.map((company) => {
    return `[${company.start} - ${company.end}]`;
});
console.log(companyAges);

//chaining of filter and map
const companyNames = companies.filter(company => company.start >= 1990).map((company) => {
    return company.name;
});
console.log(companyAges);


// Sort
var sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    }
    else {
        return -1;
    }
});
// .map((company) => { return company.name; });
console.log(sortedCompanies);

sortedCompanies = companies.sort((c1, c2) => ((c1.start > c2.start) ? 1 : -1));
console.log(sortedCompanies);

sortedCompanies = companies.sort(function (c1, c2) {
    return c1.start - c2.start;
});

sortedCompanies = companies.sort((a, b) => (a.start - b.start)); // for ascending order
sortedCompanies = companies.sort((a, b) => (b.start - a.start)); // for descending order
console.log(sortedCompanies);


//reduce
const reducedAges = ages.reduce((add2, age) => (add2 + age), 0);
console.log(reducedAges);

const getTotalYears = companies.reduce((total, company) => { return (company.end - company.start) + total; }, 0);
console.log(getTotalYears);


//chaining
const chaining = ages.
    map((age) => age * 2)
    .filter((age) => age >= 40)
    .sort((a, b) => a - b) //for ascending order
    .reduce((a, b) => a + b, 0);


console.log(chaining);
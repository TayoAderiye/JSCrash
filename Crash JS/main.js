const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
    
}

// forEach

companies.forEach(company => {
    console.log(company.name)
})

// filter

// Get 21 and older

// let canDrink = []

// for(let i = 0 ; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i])
//     }
// }


const canDrink = ages.filter(age => {
    return age >= 21
})

const retailCompanies = companies.filter(retailCompany => retailCompany.category === "Retail")

console.log(canDrink)
console.log(retailCompanies)

// Get 80s Company
const company80 = companies.filter(x => x.start >= 1980 && x.start <= 1990)

// Get company that lasted 10 years or more
const company10yrs = companies.filter(x => {
   return x.end - x.start >= 10
})

console.log(company80)
console.log(company10yrs)


// map
// Create array of Company names

const companyNames = companies.map(x => {
    return x.name
})

const testMap = companies.map(x => {
    return `${x.name} [${x.start} - ${x.end}]`
})

console.log(testMap)


const agesSqaure = ages.map(age => Math.sqrt(age))
const agesTimesTwo = ages.map(age => age * 2)


const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);


console.log(ageMap)

// sort

// Sort companies by start years
const sortedCompaniess = companies.sort(function(c1, c2){
    if (c1.start > c2.start){
        return 1
    } else {
        return -1
    }
})

const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1 ))
console.log(sortedCompanies)


// sort ages
const sortAges = ages.sort((a,b) => a-b)

console.log(sortAges)

// reduce

// let ageSums = 0
// for(let i=0; i< ages.length; i++){
//     ageSum += ages[i]
// }

const ageSumss = ages.reduce(function(total, age){
    return total + age
},0)

const ageSum = ages.reduce((total, age) => total + age, 0)

// console.log(ageSum)


// Get total years for all companies

const totalYearss = companies.reduce((total, company) => total + (company.end - company.start), 0)

const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start)
},0)

console.log(totalYears);

// Combine Methods

const combined = ages
    .map(age => age* 2)
    .filter(age => age >= 40)
    //sort from lowest to highest
    .sort((a,b) => a-b)
    .reduce((total, age) => total + age , 0)



console.log(combined)
// console.log('this is rest countries')

const lodeCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getcountriesHTML(country));
    // console.log(countriesHTML)
    const countri = document.getElementById('countries')
    countri.innerHTML= countriesHTML.join(' ')
}

const getcountriesHTML = country =>{
    return `
    <div>
        <img src="${country.flags.png}" alt="">
        <h2>Name : ${country.name.common}</h2>
        <p>Area : ${country.area}</p>
    </div>
    `
}

lodeCountries();
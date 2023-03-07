const requestURL = 'https://huairanimrod.github.io/fronttEnd/chamber/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
  })

function displayCompanies(company){
    // Create elements to add to the document  
  let card = document.createElement("section");
  let image = document.createElement("img");
  let h2 = document.createElement("h4");
  let location = document.createElement("p");
  let telf = document.createElement("p");
  let website = document.createElement("a");
  let membership = document.createElement("p");

    h2.textContent = company.name;
    location.textContent = company.location;
    telf.textContent = company.telf;
    website.textContent = company.website;
    membership.textContent = company.membership;

   // build link
   website.setAttribute('href', company.website)

   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
   image.setAttribute('src', company.logourl);
   image.setAttribute('alt', company.name);
   image.setAttribute('loading','lazy');

   // Add/append the section(card) with the h2 element
   card.appendChild(image);
   card.appendChild(h2);
   card.appendChild(location);
   card.appendChild(telf);
   card.appendChild(membership);
   card.appendChild(website);
   

   // Add/append the existing HTML div with the cards class with the section(card)
   document.querySelector('div.cards').appendChild(card);
}

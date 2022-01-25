//Build an html elements Header part
document.body.innerHTML += `
<div id="mainContainer" class="main-container"></div>`;

const getData = async () => {
  try {
    let data = await fetch("https://api.openbrewerydb.org/breweries");
    data = await data.json();
    data.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  
  <div class="card text-center">
  <div class="card-header">
  <h4 class="card-title">${obj.name}</h4>
  </div>
  <div class="card-body">
    <p class="type"> It's a <b>${obj.brewery_type} </b>Brewery</p>
    <p class="address">Address : ${obj.street}, ${obj.city}, ${obj.state}</p>
   
    <p class="contact"><i class="fa fa-phone"></i> : ${obj.phone}</p>
    
  </div>
  <div class="card-footer ">
  <a class="link" href="${obj.website_url}" class="btn btn-primary">Visit Website</a>
 
  </div>
</div>
  `;
};

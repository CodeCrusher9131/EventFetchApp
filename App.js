let url = "https://kontests.net/api/v1/all";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((contests) => {
    console.log(contests);
    let ihtml = "";
    for (let item in contests) {
      console.log(contests[item]);
      ihtml +=
        `<div class="card card-img-top" style="width: 18rem; margin-top: 12px;">
        <img src="${getRandomImageUrl()}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text">Status is: ${contests[item].status} </p>
            <p class="card-text">Site: ${contests[item].site} </p>
            <p>Starts at: ${contests[item].start_time}</p>
            <p>Ends at: ${contests[item].end_time}</p>
            <a href="${contests[item].url}" class="btn btn-primary">Visit the Event</a>
          </div>
        </div>`;
    }
    cardcontainer.innerHTML = ihtml;
  })
  .catch((error) => {
    console.error(error);
  });

// Function to get a random image URL
function getRandomImageUrl() {
  // Define an array of image URLs
  var imageUrls = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2t0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1619597455322-4fbbd820250a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2t0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2t0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFja2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhY2tlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1509479200622-4503f27f12ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhY2tlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    // Add more image URLs as needed
  ];

  // Generate a random index between 0 and imageUrls.length
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  // Return the randomly selected image URL
  return imageUrls[randomIndex];
}

// Example usage
var cardElements = document.getElementsByClassName("card");

// Loop through the card elements and assign a random image URL to each
for (var i = 0; i < cardElements.length; i++) {
  var card = cardElements[i];
  var image = card.querySelector(".card-img-top");
  // Set the 'src' attribute of the image element to a random image URL
  image.src = getRandomImageUrl();
}
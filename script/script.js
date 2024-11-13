const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

 let template = "";

 const team = document.getElementById("team");

 for(let value of teamMembers){
    template += 
    `<div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="/assets/${value.img}" class="img-fluid rounded-start" alt="${value.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${value.name}</h5>
            <p class="card-text">${value.role}</p>
            <p class="email">${value.email}</p>
          </div>
        </div>
      </div>
    </div>`
 }

 team.innerHTML = template;
nascondiroba();

function nascondiroba() {
    if (sessionStorage.getItem("username") != null || localStorage.getItem("username") != null) {


        areaUtenteBuilder();

        if (sessionStorage.getItem("tipo") == "A" || localStorage.getItem("tipo") == "A") {
            adminBuilder();
        }
        modalBuilder();
        logOutButton();


    } else {
        loginBuilder();

    }

}




function logOut() {
    localStorage.clear();
    sessionStorage.clear();
    //redirection alla home
    window.location.assign('/');
}


function logOutButton() {

    let li = document.createElement('li');
    li.setAttribute("class", "nav-item ms-auto ms-lg-0");
    li.setAttribute("data-bs-toggle", "modal");
    li.setAttribute("data-bs-target", "#logoutModal");
    li.setAttribute("id", "logOut");

    let span = document.createElement("span");
    span.setAttribute("class", "nav-link logout bi bi-person-circle");

    // span.setAttribute("href", "/");
    span.textContent = " Esci";

    let navbarElement = document.querySelector("#navbar");

    li.appendChild(span);
    navbarElement.appendChild(li);

    let logoutModale = document.querySelector("#logoutModal");


    li.addEventListener("click", function() {

        logoutModale.style.display = 'block';
    });


    // li.addEventListener('click', logOut);

}


function areaUtenteBuilder() {

    let li = document.createElement('li');
    li.setAttribute("id", 'areaUtente');
    li.setAttribute("class", "nav-item ms-auto ms-lg-0");

    let a = document.createElement("a");
    a.setAttribute("class", "nav-link");
    a.setAttribute("href", "areaUtente");
    a.textContent = "Area Utente";
    let navbarElement = document.querySelector("#navbar")
    if (window.location.pathname == "/areaUtente") {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
    }

    li.appendChild(a)
    navbarElement.appendChild(li);

}

function adminBuilder() {

    let li = document.createElement('li');
    li.setAttribute("id", 'areaAmministratore');
    li.setAttribute("class", "nav-item ms-auto ms-lg-0");

    let a = document.createElement("a");
    a.setAttribute("class", "nav-link");
    a.setAttribute("href", "dashboard");
    a.setAttribute('id', 'areaAdmin');
    a.textContent = "Area Admin";
    if (window.location.pathname == "/dashboard" || window.location.pathname == "/paginaIns" || window.location.pathname == "/adminView") {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
    }
    let navbarElement = document.querySelector("#navbar")

    li.appendChild(a)
    navbarElement.appendChild(li);

}

function loginBuilder() {

    let li = document.createElement('li');
    li.setAttribute("id", 'login');
    li.setAttribute("class", "nav-item ms-auto ms-lg-0");

    let a = document.createElement("a");
    a.setAttribute("class", "nav-link");
    a.setAttribute("href", "/login");
    a.textContent = "Accedi";
    if (window.location.pathname == "/login" || window.location.pathname == "/signup") {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
    }

    let navbarElement = document.querySelector("#navbar")

    li.appendChild(a)
    navbarElement.appendChild(li);

}

function modalBuilder() {
    let htmlCode = '';

    htmlCode += `
  <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
          <div class="modal-header bg-danger">
              <h2 class="h1 modal-title fs-5 text-white text-bg-danger" id="titoloModale">Log Out</h2>
              <button type="button" class="btn-close text-bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="contenutoModale">
              <p class="lead">Sei sicuro di voler uscire?</p>

              <p id="error" class="lead text-danger"></p>
          </div>
          <div class="modal-footer">
         
          <button id="logoutBottone" type="button" class="btn btn-danger" data-bs-dismiss="modal">Si</button>
          </div>
        </div>
    </div>
  </div>`


    // <button id="remove" type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Annulla</button>

    let divLog = document.querySelector("#modLogout");

    divLog.innerHTML = htmlCode;

    let btnLogout = document.querySelector("#logoutBottone");



    let logoutModale = document.querySelector("#logoutModal");

    var closeButtons = document.querySelectorAll('.btn-close');

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            logoutModale.style.display = "none";
        });
    };

    // let remove = document.querySelector("#remove");

    // remove.addEventListener("click", function() {
    //     logoutModale.style.display = "none";
    // });


    // btnLogout.addEventListener("click", logOut);
    
    btnLogout.addEventListener("click", 

      async function logiOut() {
        const toastLiveExample = document.querySelector('.toast');
        const bernardo = new bootstrap.Toast(toastLiveExample)
        bernardo.show();
        await new Promise(resolve => setTimeout(resolve, 1000)); // wait 3 seconds
        localStorage.clear();
        sessionStorage.clear();
        window.location.assign('/');
      }



    );




    

    // btnLogout.addEventListener('click', () => {
    //     const bernardo = new bootstrap.Toast(toastLiveExample)

    //     bernardo.onShown = logOut;
    //     bernardo.show();
    // })




}
window.onload = () => {
  let divMosquito = document.getElementById('mosquito-control'),
    divPets = document.getElementById('pet-shampoos'),
    divPublic = document.getElementById('public-health-insecticides'),
    divApplication = document.getElementById('application-equipment'),
    divAgricultural = document.getElementById('agricultural-insecticides');
  document.getElementById('para-mosquito-control').onclick = function () {
    if (divMosquito.classList.contains('auto-height')) {
      divMosquito.classList.remove('auto-height');
    } else {
      document.getElementById('mosquito-control').classList.add("auto-height");
    }
    divPets.classList.remove("auto-height");
    divPublic.classList.remove("auto-height");
    divApplication.classList.remove("auto-height");
    divAgricultural.classList.remove("auto-height");
  }
  document.getElementById('para-pet-shampoos').onclick = function () {
    if (divPets.classList.contains('auto-height')) {
      divPets.classList.remove('auto-height');
    } else {
      document.getElementById('pet-shampoos').classList.add("auto-height");
    }
    divMosquito.classList.remove("auto-height");
    divPublic.classList.remove("auto-height");
    divApplication.classList.remove("auto-height");
    divAgricultural.classList.remove("auto-height");
  }
  document.getElementById('para-public-health-insecticides').onclick = function () {
    if (divPublic.classList.contains('auto-height')) {
      divPublic.classList.remove('auto-height');
    } else {
      document.getElementById('public-health-insecticides').classList.add("auto-height");
    }
    divPets.classList.remove("auto-height");
    divMosquito.classList.remove("auto-height");
    divApplication.classList.remove("auto-height");
    divAgricultural.classList.remove("auto-height");
  }
  document.getElementById('para-application-equipment').onclick = function () {
    if (divApplication.classList.contains('auto-height')) {
      divApplication.classList.remove('auto-height');
    } else {
      document.getElementById('application-equipment').classList.add("auto-height");
    }
    divPets.classList.remove("auto-height");
    divMosquito.classList.remove("auto-height");
    divPublic.classList.remove("auto-height");
    divAgricultural.classList.remove("auto-height");
  }
  document.getElementById('para-agricultural-insecticides').onclick = function () {
    if (divAgricultural.classList.contains('auto-height')) {
      divAgricultural.classList.remove('auto-height');
    } else {
      document.getElementById('agricultural-insecticides').classList.add("auto-height");
    }
    divPets.classList.remove("auto-height");
    divMosquito.classList.remove("auto-height");
    divApplication.classList.remove("auto-height");
    divPublic.classList.remove("auto-height");
  }

  var addresses = [],
    navAddresses1 = document.getElementById('1-route'),
    navAddresses2 = document.getElementById('2-route'),
    navAddresses3 = document.getElementById('3-route'),
    navAddresses4 = document.getElementById('4-route'),
    navAddresses5 = document.getElementById('5-route'),
    navAddresses6 = document.getElementById('6-route'),
    navAddresses7 = document.getElementById('7-route');

  addresses = [navAddresses1, navAddresses2, navAddresses3, navAddresses4, navAddresses5, navAddresses6, navAddresses7]

  for (let j = 0; j < addresses.length; j++) {
    const navAddress = addresses[j];
    navAddress.addEventListener('click', () => {
      window.location.reload();
    });
  }

  var navbarToggleBtn = document.getElementById('navbar-toggle'),
      navbar = document.getElementById('navbarMenuHeroC');

  navbarToggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
    navbarToggleBtn.classList.toggle('is-active');
  });

  console.log('success')
}

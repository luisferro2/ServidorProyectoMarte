visible = 1;

function cambiarDatos() {
  t1 = document.getElementById("Datos1");
  t2 = document.getElementById("Datos2");
  if(visible == 1) {
    visible = 2;
    t1.style.display = 'none';
    t2.style.display = 'inline-table';
  } else {
    visible = 1;
    t1.style.display = 'inline-table';
    t2.style.display = 'none';
  }
}
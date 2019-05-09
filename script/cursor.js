$(document).ready(function(){ //Quand la page est chargé, lance la fonction
  window.addEventListener('contextmenu', function (event) { //si clic droit pressé
      event.preventDefault(); //empêche l'événement entré en paramètre
  });

  $(document).on('dragstart', function () { //si on traine une image
    return false; //empêche l'image d'être trainer
  });

  const cursor = document.querySelector('.cursor1'); //récupère la balise dont la classe est cursor1
  $(document).on('mousemove', e => { //si souris bouge, récupère l'élément souris
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX -10)+"px;"); //change les coordonnées d'un div par coordonnées curseur
  });

  var expand = "expand1"; //nom d'une classe
  $(document).on('click', () => { //si clic
    cursor.classList.add(expand); //ajoute class "expand" à div

    setTimeout(() => { //minuteur de 500ms
      cursor.classList.remove(expand); //retire class "expand" à div
    }, 500);
  });

  $('area').on('mouseenter', () => { //si la souris entre la balise area
    $('#c').attr('class', 'cursor2'); //change attribut class à div #c par cursor2
    expand = "expand2";
  });

  $('area').on('mouseleave', () => { //si la souris entre la balise area
    $('#c').attr('class', 'cursor1'); //change attribut class à div #c par cursor1
    expand = "expand1";
  });
});

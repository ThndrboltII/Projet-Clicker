$(document).ready(function(){
  window.addEventListener('contextmenu', function (event) {
      event.preventDefault();
  });

  $(document).on('dragstart', function () {
    return false;
  });

  const cursor = document.querySelector('.cursor1');
  $(document).on('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX -10)+"px;");
  });

  var expand = "expand1";
  $(document).on('click', () => {
    cursor.classList.add(expand);

    setTimeout(() => {
      cursor.classList.remove(expand);
    }, 500);
  });

  $('area').on('mouseenter', () => {
    $('#c').attr('class', 'cursor2');
    expand = "expand2";
  });

  $('area').on('mouseleave', () => {
    $('#c').attr('class', 'cursor1');
    expand = "expand1";
  });
});

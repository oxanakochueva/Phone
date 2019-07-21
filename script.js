//без маски переход по инпутам
function moveCursor(prev,current,to){
    if (current.getAttribute &&
      current.value.length==current.getAttribute('maxlength')) {
        to.focus()
      } else if(event.which == 8 || event.which == 46 && to.value.length == '') {
        prev.focus()
      }
}

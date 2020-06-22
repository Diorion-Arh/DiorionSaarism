var button = document.getElementById('copy_link');
button.addEventListener('click', function () {
  //нашли наш контейнер
  var ta = document.getElementById('text_post'); 
  //производим его выделение
  var range = document.createRange();
  range.selectNode(ta); 
  window.getSelection().addRange(range); 
 
  //пытаемся скопировать текст в буфер обмена
  try { 
    document.execCommand('copy'); 
  } catch(err) { 
    console.log('Can`t copy, boss'); 
  } 

  alert('текст успешно скопирован');
  //очистим выделение текста, чтобы пользователь "не парился"
  window.getSelection().removeAllRanges();
});
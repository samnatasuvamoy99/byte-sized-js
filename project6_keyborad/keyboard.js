const insert =document.getElementById('insert');

// sare windom me addeventlistener laga na he 
 window.addEventListener('keydown' , (e) =>{
     insert.innerHTML =
     ` 
     <div class='color'>
      <table>
  
  <tr>
    <td> key</td>
    <td>keycode</td>
    <td>Code</td>
  </tr>
  <tr>
    <td>${e.key === " "  ?"space" : "e.key"}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
     `;
 });
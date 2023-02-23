window.addEventListener('load', posElem, false);
function posElem(EO) {
  EO = EO || window.event;
  let elems = document.getElementsByTagName('img');
 
  for (let i = elems.length - 1; i >= 0; i--) {
    let elem = elems[i];
 
    elem.style.top = elem.offsetTop + 'px';
    elem.style.left = elem.offsetLeft + 'px';
    elem.style.position = 'absolute';
    elem.onmousedown = imgMouseDown;
    elem.onmouseup = imgMouseUp;
  };
 
 
  function imgMouseDown(EO) {
    EO = EO || window.event;
    EO.preventDefault();
 
    let dounShiftCoordX = EO.pageX - EO.target.offsetLeft;
    let dounShiftCoordY = EO.pageY - EO.target.offsetTop;
 
 
    window.onmousemove = imgMouseMove;
 
    function imgMouseMove(EO) {
      EO = EO || window.event;
      EO.preventDefault();
 
      EO.target.style.top = (EO.pageY - dounShiftCoordY) + 'px';
      EO.target.style.left = (EO.pageX - dounShiftCoordX) + 'px';
 
      const cont = document.getElementById('img-container');
      const pic = EO.target;
      cont.appendChild(pic);
 
 
 
    }
  }
 
  function imgMouseUp(EO) {
    EO.preventDefault();
 
    window.onmousemove = null; 
 
  }
 
 
};
/*function showCoords(e)
{
    console.log("event is fired on "+e.currentTarget.id+" X="+e.x+" Y="+e.y+
    " offsetX="+e.offsetX+" offsetY="+e.offsetY+" clientX="+e.clientX+" clienty="+e.clientY+
    " screenX="+e.screenX+" screenY="+e.screenY);
}
function clearCoor()
{
    console.log()
}
document.getElementById('ok').addEventListener('click', function()
{
    alert('OK')
}
)
document.getElementById('cancel').addEventListener('click', function()
{
    alert('cancel')
}
)
document.getElementById('no').addEventListener('click', function()
{
    alert('No')
}
)*/
/*document.getElementById('ok').addEventListener('click', function (e)
{
    let noElemement = document.getElementById('no')
    if(noElemement.classList.contains('toggleOn'))
    {
        noElemement.classList.replace('toggleOn', 'toggleOff')
    }
    else if(noElemement.classList.contains('toggleOff'))
    {
        noElemement.classList.replace('toggleOff', 'toggleON')
    }
    else
    {
        noElemement.classList.add('toggleON')
    }
}
)*/

var cancelElement = document.getElementById('cancel')
cancelElement.addEventListener('mouseover', function (e)
{
    cancelElement.innerHTML = `
        <div class = "container-col">
            <div class = "flex-item">
                no 1 
            </div>
            <div class = "flex-item">
                no 2 
            </div>
        </div>    
    `
}
)
cancelElement.addEventListener('mouseleave', function (e)
{
    cancelElement.innerHTML = `
        cancel 
    `
}
)
var margin=20;
document.getElementById('ok').addEventListener('click', function(e)
{
    margin = margin+25
    document.getElementById('cancel').style.marginLeft = `${margin}px`
    document.getElementById('cancel').style.marginRight = `${margin}px`
    document.getElementById('on').style.marginLeft = `${margin}px`
    document.getElementById('on').style.marginRight = `${margin}px`
}
)
var count = 0;
document.getElementById('no').addEventListener('dblclick',function(e){ 
     count++;
     if(count == 1)
     {
        document.getElementById("ok").innerHTML = `Ok`
     }else if(count == 2)
     {
        document.getElementById("ok").innerHTML= `วิชานี้`
     }else if(count == 3)
     {
        document.getElementById("ok").innerHTML = `ง่าย`
     } else if(count == 4)
     {
        document.getElementById("ok").innerHTML = `จริงๆน่ะ`

     }else
     {
        document.getElementById("ok").innerHTML = `ok`
         count = 0
     }

})

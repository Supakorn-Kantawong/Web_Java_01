function showCoords(e)
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
)

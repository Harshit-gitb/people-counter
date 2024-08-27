let counter = Number(document.getElementById('main-counting').textContent);
let incrementBtn = document.getElementById('inc');
let saveBtn = document.getElementById('save');
let resetBtn = document.getElementById('reset');
incrementBtn.addEventListener('click',increment)
saveBtn.addEventListener('click',save)
resetBtn.addEventListener('click',reset)

function increment()
{
    counter += 1; 
    document.getElementById('main-counting').textContent = counter;
}

function save()
{
    let prevEntry =  document.getElementById("saved-entry").textContent
    prevEntry += '-'+counter;   
    document.getElementById("main-counting").textContent = 0;
    document.getElementById("saved-entry").innerHTML = prevEntry
    counter = 0;
  
}
function reset()
{
    counter = 0;
    document.getElementById("main-counting").textContent = counter;
    document.getElementById("main-counting").textContent = 0;
    document.getElementById("saved-entry").textContent = 'previous entry:'     

}
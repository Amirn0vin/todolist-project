let addbtn = document.querySelector('button');
let tasklist = document.querySelector('ul');
let input = document.querySelector('input');
let tasks = [];
addbtn.addEventListener('click', ()=>{
  let text = input.value;
  if(!(input.value === '')){
  let task = createtask(text)
      task.innerHTML +=  '<span class="closebtn"><i class="fa-solid fa-trash"></i></span>'
  tasklist.appendChild(task);
  savetaks(text)
  input.value = ''; }

})
tasklist.addEventListener('click' , (e)=>{
  if(e.target.nodeName === 'I' ){
  e.target.parentElement.parentElement.style.display = 'none';}
  if(e.target.nodeName === 'LI'){
    e.target.classList.toggle('done')
  }
})
function createtask(text){
  let li = document.createElement('li')
  li.textContent = text;
  return li;
}
function savetaks(text){
  tasks.push(text);
  localStorage.setItem('todo' , text);
}
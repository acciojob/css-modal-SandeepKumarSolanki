//your JS code here. If required.

// Get the modal element and buttons
const openModalBtn = document.getElementById('openModal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener("click" , ()=>{
	modal.style.display = 'block';
})

function closeModal(){
	modal.style.display = 'none';
}

closeModalBtn.addEventListener('click' , closeModal);

window.addEventListener('click' , (event)=>{
	if(event.target === modal){
		closeModal();
	}
})



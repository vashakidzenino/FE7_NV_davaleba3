let makeOrder = document.getElementsByClassName('button');

let bl = makeOrder.length;

for(let i = 0; i < bl; i++){
	
	makeOrder[i].addEventListener('click', function(){
		this.classList.toggle('added');
		if (this.classList.contains('added')){
			this.textContent = 'დამატებულია';
		} else {
			this.textContent = 'დამატება';
		}
		
	})
	
}
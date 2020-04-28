let stausChange = document.querySelectorAll('.disappear');
let burgerSelect = document.querySelector('.burgerNav');
burgerSelect.classList.add('hidden');


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger-Icon').onclick = toggleMenu;

    function toggleMenu () {
        for (let item of stausChange) {
            item.classList.toggle('hidden');
            burgerSelect.classList.toggle('hidden');
        }
    }

    document.getElementById('blist').onclick = goToProd;
    document.getElementById('blist').onclick = goToProd;

    function goToProd() {
        for (let item of addClass) {
            item.classList.toggle('hidden');
        };
        miniWhole.classList.toggle('mobile-menu');
    }

    /* დამატების ღილაკი */
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
});
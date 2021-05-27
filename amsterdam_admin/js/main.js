document.addEventListener('DOMContentLoaded', function () {

	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);//при отправке формы переходим в функцию formSend

	async function formSend(e){
		alert('Hello');
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++){
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_phon')) {
				 if (phonTest(input)) {}
				formAddError(input);
				error++;

			
			}else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input){
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input){
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}



});
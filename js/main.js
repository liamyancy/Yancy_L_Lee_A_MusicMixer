(() => {

	let dropZone = document.querySelector('#dropZone'),
		box = document.querySelectorAll('.box'),
		icons = document.querySelector('.icons'),
		animal = document.querySelectorAll('.animal'),
		pauseButtons = document.querySelector('.pauseButton'),
	  	rwButtons = document.querySelector('.rwButton'),
	  	musicBeat = document.querySelectorAll('.musicBeat');

	


	function allowDrag(event) {
		console.log('started dragging an image');

		event.dataTransfer.setData("text/plain", this.id);

		
	}


		function allowDragOver(event) {
		 
		event.preventDefault();
		console.log('dragged over a drop zone');
	
	}


		function allowDrop(event) {
			if (this.children.length > 0) {
				return false;}
			
			console.log('dragged on a drop zone');

			let currentImage = event.dataTransfer.getData("text/plain");

			event.target.appendChild(document.querySelector(`#${currentImage}`));

			let song = document.querySelector(`audio[data-audioref="${currentImage}"]`);


			song.load();

			song.play();

			song.currentTime = 0;

}	
			
		function pauseTrack() {

			
			musicBeat.forEach(sound => {sound.pause();});
		

		}

		function rwTrack() {

			musicBeat.forEach(sound => {sound.currentTime = 0;});
			for (let i = 0; i < animal.length; i++) {
			icons.appendChild(animal[i]);
		}
		musicBeat.forEach(sound => {sound.pause();});
}

animal.forEach(piece => piece.addEventListener('dragstart', allowDrag));

box.forEach(zone => {
	 zone.addEventListener('dragover', allowDragOver);
	 zone.addEventListener('drop', allowDrop);
});

pauseButtons.addEventListener("click", pauseTrack);
rwButtons.addEventListener("click", rwTrack);

})();
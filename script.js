(function () {

var names = ["Nabanita", "Joe", "Joy", "Rahul", "jaita", "jaguar", "sayan", "Dutta", "Gita", "Jim", "JIMMY"];
	for (var i = 0; i < names.length; i++) {
		var firstLetter = names[i].charAt(0).toLowerCase();
		
			if ((firstLetter === 'j')||(firstLetter === 'J')) {
				byeSpeaker.speak(names[i]);
			} else {
				helloSpeaker.speak(names[i]);
  }
}

})();
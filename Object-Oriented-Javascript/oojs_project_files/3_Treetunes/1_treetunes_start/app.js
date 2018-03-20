var playlist = new Playlist();

var hereComesTheSun = new Song("Here comes the Sun", "The Beatles", "2:54");
var gimmeShelter  = new Song("Gimme Shelter", "The Roling Stones", "4:31");

playlist.add(hereComesTheSun);
playlist.add(gimmeShelter);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);


var playButton = document.getElementById('play');
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById('next');
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById('stop');
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
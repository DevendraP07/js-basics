function SongsBook(songs) {
  if (!songs) {
    conosle.error("No songs object list found");
    return;
  }

  this.songs = songs;

  const getNextId = () => {
    let latestId = Number(Object.keys(this.songs).pop());

    return isNaN(latestId) ? 1 : latestId + 1;
  };

  this.add = function (song) {
    const id = getNextId();

    this.songs[id] = song;
    this.songs[id].playing = false;
  };

  this.play = function (id) {
    const ids = Object.keys(this.songs).map(Number); // "1", "2", "3" -> 1, 2, 3

    if (!ids.includes(id)) {
      console.error("Song doesn't exists");
      return;
    }

    for (let id of Object.keys(this.songs)) {
      if (this.songs[id].playing) this.songs[id].playing = false;
    }

    this.songs[id].playing = true;
  };

  this.printPlaying = function () {
    for (let id of Object.keys(this.songs)) {
      if (this.songs[id].playing) console.log("Playing: ", this.songs[id]);
    }
  };

  this.printAll = function () {
    for (let song of Object.values(this.songs)) {
      console.log(song);
    }
  };
}

const sb = new SongsBook({
  1: {
    name: "Sanam re",
    duration: 123,
    playing: false,
  },
  2: {
    name: "O re piya",
    duration: 123,
    playing: false,
  },
  3: {
    name: "Chandrachooda",
    duration: 123,
    playing: false,
  },
});

sb.add({ name: "Lungi dance", duration: 340 });

sb.play(3);

sb.play(4);

sb.play(1);

sb.printPlaying();

console.log("######################################");

sb.printAll();

export default async function handler(req, res) {
  const SoundCloud = require("soundcloud-scraper");
  const client = new SoundCloud.Client();
  const NodeID3 = require("node-id3");
  const data = req.body;
  var songTitle = "";
  var artist = "";
  try {
    const song = await client.getSongInfo(data.url);
    const songSearch = song.title.search("-");
    if (songSearch == -1) {
      artist = song.author.name;
      songTitle = song.title;
    } else {
      const songArray = song.title.split("-");
      artist = songArray[0].trim();
      songTitle = songArray[1].trim();
    }

    const stream = await song.downloadProgressive();
    const chunks = [];
    for await (let chunk of stream) {
      chunks.push(chunk);
    }
    const songbuffer = Buffer.concat(chunks);
    const tags = {
      title: songTitle,
      artist: artist,
    };
    const taggedMP3 = NodeID3.update(tags, songbuffer); //  Returns Buffer

    return res.status(200).send(taggedMP3);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}

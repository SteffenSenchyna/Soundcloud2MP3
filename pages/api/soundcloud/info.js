export default async function handler(req, res) {
  const SoundCloud = require("soundcloud-scraper");
  const client = new SoundCloud.Client();

  const data = req.body;
  var songTitle = "";
  try {
    const song = await client.getSongInfo(data.url);
    const songSearch = song.title.search("-");
    if (songSearch == -1) {
      songTitle = song.title;
    } else {
      const songArray = song.title.split("-");
      songTitle = songArray[1].trim();
    }
    return res.status(200).json({ title: songTitle });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}

export default async function handler(req, res) {
  const ytdl = require("ytdl-core");
  var pathToFfmpeg = require("ffmpeg-static");
  const NodeID3 = require("node-id3");

  const data = req.body;
  var songTitle = "";
  try {
    const metaData = await ytdl.getBasicInfo(data.url, typ);
    console.log(metaData);

    return res.status(200).json({ title: songTitle });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}

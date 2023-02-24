export default async function handler(req, res) {
  const fs = require("fs");
  const ytdl = require("ytdl-core");
  const data = req.body;
  var songTitle = "";
  try {
    const metaData = await ytdl.getBasicInfo(data.url);
    // console.log(metaData);

    console.log(pathToFfmpeg);
    return res.status(200).json({ title: songTitle });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}

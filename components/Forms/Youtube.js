import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import download from "downloadjs";
import {
  Stack,
  Button,
  Dialog,
  CircularProgress,
  TextField,
} from "@mui/material";
function Youtube() {
  const { handleSubmit, reset, control } = useForm({ defaultValues });
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    url: "",
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const JSONdata = JSON.stringify(data);
    const info = "/api/youtube/info";
    const endpoint = "/api/youtube/download";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    try {
      const songInfo = await fetch(info, options)
        .then((response) => response.json())
        .then((songinfo) => {
          return songinfo.title;
        });
      console.log(songInfo);
      setLoading(false);
      //   await fetch(endpoint, options)
      //     .then((response) => response.blob())
      //     .then((blob) => {
      //       download(blob, `${songInfo}.mp3`, "audio/mpeg");
      //     });
      //   setLoading(false);
      //   reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Dialog open={loading}>
        <CircularProgress
          style={{ margin: "20px" }}
          variant="indeterminate"
        ></CircularProgress>
      </Dialog>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row" justifyContent="center">
          <Controller
            name="url"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                style={{ width: "50%" }}
                required
                id="url"
                label="Song URL"
                variant="outlined"
              />
            )}
          />
        </Stack>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button type="submit" startIcon={<DownloadForOfflineIcon />}>
            Download Song
          </Button>
        </Stack>
      </form>
    </>
  );
}
export default Youtube;

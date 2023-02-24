import TabPanel from "../components/Forms/TabPanel";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      flex
    >
      <TabPanel />
    </Grid>
  );
}

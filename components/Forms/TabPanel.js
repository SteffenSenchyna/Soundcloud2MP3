import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
const Soundcloud = dynamic(() => import("./Soundcloud"), {
  ssr: false,
});
const Youtube = dynamic(() => import("./Youtube"), {
  ssr: false,
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      centered="true"
    >
      {value === index && (
        <Box sx={{ p: 4, minWidth: 900 }}>
          <Container>{children}</Container>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "23ch" },
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Soundcloud To MP3" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Soundcloud />
      </TabPanel>
    </Box>
  );
}

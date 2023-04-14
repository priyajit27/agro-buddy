import React, { useContext, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { CropContext } from "../../context/crops";
import CropDetailsQuery from "../../api/models/cropDetailsQuery";
import SearchCard from "./SearchCard";
import "./styles.css";
import { getCropPreview } from "../../../../backend/services/crop.service";

function SearchCrops() {
  const [search, setSearch] = useState("");
  const [cropsData, setCropsData] = useState([]);

  const { getCropDetails } = useContext(CropContext);
  const cropDetails = new CropDetailsQuery();
  // console.log(getCropDetails);
  const format = () => {
    cropDetails.name = search;
  };

  const handleSearch = async () => {
    format();
    if (search) {
      const { data } = await getCropDetails(cropDetails);
      console.log(data);
      setCropsData(data);
    }
  };

  const handleKeyDown = async (event) => {
    format();
    if (search) {
      if (event.key === "Enter") {
        const { data } = await getCropDetails(cropDetails);
        console.log(data);
        setCropsData(data);
      }
    }
  };

  return (
    <Stack p="20px" alignItems="center" justifyContent="center" mt="37px">
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              outline: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "320px" },
            backgroundColor: "cream",
            borderRadius: "50px",
          }}
          height="76px"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Crops"
          type="text"
          onKeyPress={handleKeyDown}
        />

        <Button
          className="search-btn"
          variant="contained"
          sx={{
            textTransform: "none",
            width: { lg: "120px", xs: "70px" },
            fontSize: { lg: "16px", xs: "12px" },
            height: "56px",
            position: "absolute",
            right: "0",
            borderRadius: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <div></div>
    </Stack>
  );
}

export default SearchCrops;

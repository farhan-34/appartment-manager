import React, { useEffect, useRef, useState } from "react";
import { HOC } from "../../components/HOC";
import HouseIcon from "@mui/icons-material/House";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import mapboxgl from "mapbox-gl";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GarageIcon from "@mui/icons-material/Garage";

const mapBoxKey = process.env.MAPBOX_API_KEY;
mapboxgl.accessToken =
  "";

const ApartmentDetail = () => {
  const imageList = [];

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <HOC>
      <div className="grid grid-cols-12 gap-5 justify-evenly">
        <div className="col-span-5 rounded-lg">
          <div>
            <div>
              <img
                className="w-full h-3/4 rounded-lg"
                src={require("../../assets/images/apartImage.jpg")}
                alt="Apartment"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2 h-[50vh] overflow-auto">
              <div>
                <img
                  className="w-full h-full rounded"
                  src={require("../../assets/images/apartImage.jpg")}
                  alt="Apartment"
                />
              </div>
              <div>
                <img
                  className="w-full h-full rounded"
                  src={require("../../assets/images/apartImage.jpg")}
                  alt="Apartment"
                />
              </div>
              <div>
                <img
                  className="w-full h-full rounded"
                  src={require("../../assets/images/apartImage.jpg")}
                  alt="Apartment"
                />
              </div>
              <div>
                <img
                  className="w-full h-full rounded"
                  src={require("../../assets/images/apartImage.jpg")}
                  alt="Apartment"
                />
              </div>
              <div>
                <img
                  className="w-full h-full rounded"
                  src={require("../../assets/images/apartImage.jpg")}
                  alt="Apartment"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7 ">
          <div className="rounded-lg bg-white border p-5">
            <p>Some description in the house for some result</p>
            <p className="mt-4">
              {" "}
              <HouseIcon />{" "}
              <span className="ml-2">
                XYZ street central block, New York, USA
              </span>{" "}
            </p>
            <p className="mt-4 font-extrabold text-lg">
              {" "}
              <AttachMoneyIcon /> <span>$300,000</span>{" "}
            </p>
            <div className="grid grid-cols-12 gap-5 justify-between mt-4">
              <p className="col-span-4">
                {" "}
                <BedIcon /> <span>2</span>
              </p>
              <p className="col-span-4">
                {" "}
                <BathtubIcon /> <span>2</span>
              </p>
              <p className="col-span-4">
                {" "}
                <HouseSidingIcon /> <span>2</span>
              </p>
            </div>
            <div className="grid grid-cols-12 gap-5 justify-between mt-4">
              <p className="col-span-4">
                {" "}
                <SquareFootIcon /> <span>2</span>
              </p>
              <p className="col-span-4">
                {" "}
                <MonitorHeartIcon /> <span>2</span>
              </p>
              <p className="col-span-4">
                {" "}
                <CalendarMonthIcon /> <span>2</span>
              </p>
            </div>
            <div className="grid grid-cols-12 gap-5 justify-between mt-4">
              <p className="col-span-4">
                {" "}
                <LocationCityIcon /> <span>Single Family</span>
              </p>
              <p className="col-span-4">
                {" "}
                <GarageIcon /> <span>2</span>
              </p>
            </div>
            <p className="mt-4">Listed By: ome person</p>
            <p className="mt-4">Last Checked: Date</p>

            <div className="w-fit ml-auto">
                <button className="bg-sky-600 p-4 rounded-lg text-white hover:bg-sky-500">Contact Us</button>
            </div>
          </div>

          <div className="border bg-white relative mt-10 rounded-lg p-4">
            <div ref={mapContainer} className="map-container h-[500px]" />
          </div>

        </div>
      </div>
    </HOC>
  );
};
export default ApartmentDetail;

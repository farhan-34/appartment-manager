import React, { useEffect, useRef, useState } from 'react'
import { HOC } from '../../components/HOC';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import HouseIcon from '@mui/icons-material/House';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import mapboxgl from 'mapbox-gl';


const ApartmentDetail = () => {
    const imageList = [

    ]

    mapboxgl.accessToken = process.env.MAPBOX_API_KEY;
    console.log(process.env.MAPBOX_API_KEY);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <HOC>
            <div className='grid grid-cols-12 gap-5 justify-evenly'>
                <div className='col-span-5 rounded-lg'>
                    <div>
                        <div>
                            <img className='w-full h-3/4 rounded-lg' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                        </div>
                        <div className='flex flex-row overflow-x-scroll my-2 gap-4'>
                            <div>
                                <img className='w-[160px] h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                            </div>
                            <div>
                                <img className='w-[160px] h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                            </div>
                            <div>
                                <img className='w-[160px] h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                            </div>
                            <div>
                                <img className='w-[160px] h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                            </div>
                            <div>
                                <img className='w-[160px] h-full rounded' src={require("../../assets/images/apartImage.jpg")} alt='Apartment' />
                            </div>

                        </div>
                    </div>

                    <div id='map'>
                        <div ref={mapContainer} className="h-[400]" />
                    </div>
                </div>
                <div className='col-span-7 rounded-lg bg-slate-200'>
                    <p>Some description in the house for some result</p>
                    <p> <HouseIcon /> <span className='ml-2'>XYZ street central block, New York, USA</span> </p>
                    <p> <AttachMoneyIcon /> <span>$300,000</span> </p>
                    <div className='grid grid-cols-12 gap-5 justify-between'>
                        <p className='col-span-4'> <BedIcon /> <span>2</span></p>
                        <p className='col-span-4'> <BathtubIcon /> <span>2</span></p>
                        <p className='col-span-4'> <HouseSidingIcon /> <span>2</span></p>
                    </div>
                </div>
            </div>
        </HOC>
    )
}
export default ApartmentDetail
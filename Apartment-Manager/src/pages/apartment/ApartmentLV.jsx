import { Add } from '@mui/icons-material'
import { Fab, Grid } from '@mui/material'
import React from 'react'
import ApartmentCard from './ApartmentCard';

const ApartmentLV = () => {
    const apartmentList = [
        {
            id: 1,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 2,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 3,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 4,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 5,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 6,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 7,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        },
        {
            id: 8,
            title: 'The Central Park North',
            bedrooms: 2,
            bathrooms: 1,
            availability: true,
            capacity: 3,
            amenities: [
                'Carpet',
                'Wifi',
                'Furnished',
                'Air Conditioning',
                'Parking'
            ],
            otherSpaces: [
                'Kitchen',
                'Workspace'
            ],
            rent: 34000,
            pictureUrl: 'src/assets/images/apartImage.jpg'
        }
    ]
    return (
        <>
            <Grid container columnSpacing={2} rowGap={2}>
                {apartmentList.map((apartment) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} xxl={2} key={apartment.id} sx={{ minWidth: 'auto' }}>
                        <ApartmentCard apartment={apartment} />
                    </Grid>
                ))}
            </Grid>
            <Fab color="primary" sx={{ size: { xs: 'medium', md: 'large' } }}>
                <Add />
            </Fab>
        </>
    )
}


export default ApartmentLV
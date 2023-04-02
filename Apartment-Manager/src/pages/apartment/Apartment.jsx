import React from 'react';
import { HOC } from '../../components/HOC';
import ApartmentLV from './ApartmentLV';
import { Box } from '@mui/material';

const Apartment = () => {
  return (
    <HOC>
      <ApartmentLV />
    </HOC>
  )
}

export default Apartment
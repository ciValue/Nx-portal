import Button from '@mui/material/Button';
import React from 'react';

/* eslint-disable-next-line */

export interface CiButtonProps {
  text:string;
}

export function CiButton(props: CiButtonProps){
  return (
    <Button variant="contained">{props.text}</Button>
  )
}


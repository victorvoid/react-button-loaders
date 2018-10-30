import React from 'react'
import { Button } from './style'

export const Wolf = ({ children, className, onClick }) => (
  <Button className={className} onClick={onClick}>
    {children}
  </Button>
)
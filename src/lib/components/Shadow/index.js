import React from 'react'
import { Button } from './style'

export const Shadow = ({ children, className, onClick }) => (
  <Button className={className} onClick={onClick}>
    {children}
  </Button>
)
import React, { ReactNode } from 'react';

interface Props{
children:ReactNode;
}

const Alert = ({children}:Props) => {
  return (
    <div className='alert alert-primary mt-4'>
        {children}
    </div>
  )
}

export default Alert
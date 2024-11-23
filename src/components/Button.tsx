import React, { ReactNode } from 'react'


interface Props{
    children:String;
    color:string;
    onClick:()=>void;

}

export default function Button({children,color,onClick}:Props) {

  return (
    <button className={'btn btn-'+color} onClick={onClick}>{children}</button>
  )
}

import React from 'react'
import { Container } from './styles';

interface IProfileData{
    username:string;
    name:string;
    avatarUrl:string;
    followers:number;
    following:number;
    company?:string;
    location?:string;
    email?:string;
    blog?:string;
}


export default function ProfileData({username, name,avatarUrl,followers,following,company,location,email,blog}:IProfileData) {
  return (
    <Container>
        
    </Container>
  )
}

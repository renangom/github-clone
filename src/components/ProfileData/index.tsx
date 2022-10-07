import React from 'react'
import { Container, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, EmailIcon, LocationIcon, BlogIcon } from './styles';

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
        <Flex>
            <Avatar src={avatarUrl} alt={username} />
            <div>
                <h1>{name}</h1>
                <h2>{username}</h2>
            </div>
        </Flex>
        <Row>
            <li>
                <PeopleIcon />
                <b>{followers}</b>
                <span>followers</span>
                <span></span>
            </li>
            <li>
                <b>{following}</b>
                <span>following</span>
            </li>
        </Row>
        <Column>
            {company && (
                <li>
                    <CompanyIcon />
                    <span>{company}</span>
                </li>
            )}
            {location && (
                <li>
                    <LocationIcon />
                    <span>{location}</span>
                </li>
            )}
            {email && (
                <li>
                    <EmailIcon />
                    <span>{email}</span>
                </li>
            )}
            {blog && (
                <li>
                    <BlogIcon />
                    <span>{blog}</span>
                </li>
            )}
        </Column>
    </Container>
  )
}

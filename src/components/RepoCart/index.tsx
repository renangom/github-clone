import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Topside, RepoIcon, Bottomside,StarIcon,ForkIcon } from './styles'

interface IRepoCart{
    username: string;
    reponame: string;
    description?:string;
    language?:string;
    starts: number;
    forks:number;
}

export default function RepoCart({username, reponame, description, language, starts, forks}:IRepoCart) {
    const languageClass = language ? language.toLowerCase() : 'other';
    return (
    
    <Container>
        <Topside>
            <header>
                <RepoIcon />
                <Link to={`/${username}/${reponame}`}>
                    {reponame}
                </Link>
            </header>
            <p>{description}</p>
        </Topside>
        <Bottomside>
            <ul>
                <li>
                    <div className={`language ${languageClass}`}></div>
                    <span>{language}</span>
                </li>
                <li>
                    <StarIcon />
                    <span>{starts}</span>
                </li>
                <li>
                    <ForkIcon />
                    <span>{forks}</span>
                </li>
            </ul>
        </Bottomside>
    </Container>
  )
}

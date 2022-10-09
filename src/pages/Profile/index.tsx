import React from 'react'
import ProfileData from '../../components/ProfileData'
import RepoCart from '../../components/RepoCart'
import {Container, Main, LeftSide, RightSide, Repos} from './styles'


export default function Profile() {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'renangom'}
            name={'Renan Lopes'}
            avatarUrl={'https://avatars.githubusercontent.com/u/59613580?v=4'}
            followers={887}
            following={7}
            location={'São Paulo, Brazil'}
            email={'renan23eduardo@gmail.com'}
            blog={'linkedin.com/renangom'}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2> Random Repos</h2>
            <div>
              {[1,2,3,4,5,6].map((n) => {
                return (
                  <RepoCart key={n}
                    username={'renangom'}
                    reponame={'github-clone'}
                    description={'Contains all of my YouTube lessons code'}
                    language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                    starts={8}
                    forks={12}
                  />
                )
              })}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  )
}

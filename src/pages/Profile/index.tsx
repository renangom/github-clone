import React from 'react'
import ProfileData from '../../components/ProfileData'
import {Container, Main, LeftSide, RightSide} from './styles'


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
        <RightSide></RightSide>
      </Main>
    </Container>
  )
}

import styled from 'styled-components'

export const Container = styled.main`
  background: #06092b;
  color: #fff;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 3rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  max-width: 10rem;
  height: auto;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  max-width: min(30rem, 100%);
`

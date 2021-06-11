import * as S from './styles'

export const Main = ({
  title = 'React avançado',
  description = 'Typescript, ReactJs, NextJS, Styled Components'
}) => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          alt="Imagem de um átomo e React avançado escrito ao lado"
        />
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="https://image.freepik.com/vetores-gratis/ilustracao-colorida-de-programador-trabalhando_23-2148281410.jpg"
        alt="Uma pessoa sentada em frente ao computador"
      />
    </S.Container>
  )
}

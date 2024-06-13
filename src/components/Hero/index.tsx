import { IconType } from 'react-icons'

import * as S from './styles'

type HeroProps = {
  title: string
  returnLink?: string
  to?: string
  titleIcon?: string
  Icon: IconType
  IconLink?: IconType
}

const Hero = ({
  title,
  returnLink,
  to,
  titleIcon,
  Icon,
  IconLink
}: HeroProps) => (
  <S.ContainerHero>
    <S.ContainerTitle>
      <Icon />
      <S.Title>{title}</S.Title>
    </S.ContainerTitle>
    <S.TextLink to={to as string}>
      {IconLink && <IconLink title={titleIcon} />}
      {returnLink}
    </S.TextLink>
  </S.ContainerHero>
)

export default Hero

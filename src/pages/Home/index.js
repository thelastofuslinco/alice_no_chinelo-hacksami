import { ReactComponent as Ellipse } from "./Ellipse.svg";
import { ReactComponent as Icon1 } from './icon1.svg'
import { ReactComponent as Icon2 } from './icon2.svg'
import { ReactComponent as Icon3 } from './icon3.svg'
import { ReactComponent as Icon4 } from './icon4.svg'
import { ReactComponent as Icon5 } from './icon5.svg'
import { ReactComponent as Icon6 } from './icon6.svg'
import { ReactComponent as IconNotification } from './icon_header_1.svg'
import { ReactComponent as IconHelper } from "./icon_header_2.svg";
import { ReactComponent as Arrow } from "./chevron_right_24px.svg";
import { ReactComponent as Treasure } from "./treasure.svg";
import { ReactComponent as Star } from "./star.svg";

import {
  HeaderProfile,
  SectionHeader,
  Section,
  Title,
  ShortcutGrid,
  BodyText,
  Card,
  Description,
  ShortcutContainer,
  ShotcutIcon,
  ShotcutIconHeader,
  NameText,
  Link,
  LinkWithIcon,
  Container,
  Root,
  TextContainer,
  SubTitle,
  Bagde,
  PopoverNotification,
  PopoverTitle,
  PopoverSubTitle,
  PopoverIconContainer
} from "./index.style";
import { useNavigate } from "react-router";
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { useState } from "react";

const Home = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const navigate = useNavigate();

  const hasNotification = () => {
    return !window.localStorage.getItem("rating");
  }

  const openNotification = () => {
    if (!window.localStorage.getItem("rating")) {
      setIsPopoverOpen(prevState => !prevState);
    }
  }
  
  const ratePartner = () => {
    navigate('/avaliacao/beneficiencia-portuguesa')
  }

  return (
    <Root>
      <SectionHeader>
        <Container>
          <Ellipse />
          <NameText>Olá, Nome apelido!</NameText>
        </Container>
        <Container>
          <Container>
            <Popover
              isOpen={isPopoverOpen}
              positions={['bottom']}
              align="end"
              minWidth={250}
              onClickOutside={() => setIsPopoverOpen(false)}
              reposition={false}
              content={({ position, childRect, popoverRect }) => (
                <ArrowContainer
                  position={position}
                  childRect={childRect}
                  popoverRect={popoverRect}
                  arrowColor={'white'}
                  arrowSize={10}
                >
                  <PopoverNotification onClick={ratePartner}>
                    <PopoverIconContainer>
                      <Star />
                    </PopoverIconContainer>
                    <ShortcutContainer popover>
                      <PopoverTitle>Quer ganhar mais 25 pontos?</PopoverTitle>
                      <PopoverSubTitle>10 minutos atrás</PopoverSubTitle>
                    </ShortcutContainer>
                  </PopoverNotification>
                </ArrowContainer>
              )}
            >
              <ShotcutIconHeader onClick={openNotification}>
                <IconHelper />
                {hasNotification() && <Bagde>1</Bagde>}
              </ShotcutIconHeader>
            </Popover>
          </Container>
          <Container>
            <ShotcutIconHeader>
              <IconNotification />
            </ShotcutIconHeader>
          </Container>
        </Container>
      </SectionHeader>
      <Section>
        <Title>Meus Atalhos</Title>
        <ShortcutGrid>
          <ShortcutContainer>
            <ShotcutIcon>
              <Icon4 />
            </ShotcutIcon>
            <Description>Carteirinha</Description>
          </ShortcutContainer>
          <ShortcutContainer>
            <ShotcutIcon>
              <Icon2 />
            </ShotcutIcon>
            <Description>Como Agendar</Description>
          </ShortcutContainer>
          <ShortcutContainer>
            <ShotcutIcon active>
              <Icon5 />
            </ShotcutIcon>
            <Description>Time de Saúde</Description>
          </ShortcutContainer>
          <ShortcutContainer>
            <ShotcutIcon>
              <Icon1 />
            </ShotcutIcon>
            <Description>Guia do membro</Description>
          </ShortcutContainer>
          <ShortcutContainer>
            <ShotcutIcon>
              <Icon6 />
            </ShotcutIcon>
            <Description>COVID-19</Description>
          </ShortcutContainer>
          <ShortcutContainer>
            <ShotcutIcon>
              <Icon3 />
            </ShotcutIcon>
            <Description>Emergência</Description>
          </ShortcutContainer>
        </ShortcutGrid>
      </Section>
      <Section variant>
        <Title>Conheça melhor a Sami</Title>
        <Card>
          <HeaderProfile>
            <TextContainer>
              <SubTitle>RecompenSami</SubTitle>
              <BodyText>Ganhe pontos e troque por brindes exclusivos</BodyText>
            </TextContainer>
            <Treasure />
          </HeaderProfile>
          <LinkWithIcon>
            <Link href="/health">Quero muitos prêmios</Link>
            <Arrow />
          </LinkWithIcon>
        </Card>
      </Section>
    </Root>
  );
};

export default Home;

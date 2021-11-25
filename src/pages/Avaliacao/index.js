import {
  HeaderProfile,
  Section,
  Link,
  LinkWithIcon,
  Root,
  SubTitle,
  Divider,
  Button,
  TextArea,
  Title,
  ModalTitle,
  ShortcutContainer,
  BodyPoints,
  Points,
  PointsContainer
} from "./index.style";

import { ReactComponent as BpLogo } from "./bp_logo.svg";
import { ReactComponent as Arrow } from "./arrow.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState, useRef } from "react";
import Modal from '../../components/Modal';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const modalRef = useRef(null)
  const navigate = useNavigate();

  const setValue = () => {
    window.localStorage.setItem("rating", true);
    modalRef.current.open();
  }

  const close = () => {
    modalRef.current.close();
    navigate("/profile/points");
  }
  return (
    <Root>
      <Section>
        <LinkWithIcon>
          <Arrow />
          <Link href="/profile">Avaliando Parceiro Clínico</Link>
        </LinkWithIcon>
      </Section>
      <Divider />
      <Section variant>
        <HeaderProfile>
          <SubTitle>A Beneficiência Portuguesa de São Paulo</SubTitle>
          <BpLogo />
        </HeaderProfile>
        <div className="rate">
          <input
            type="radio"
            id="star1"
            name="rate"
            value="1"
            onChange={(e) => setRating(e.target.value)}
          />
          <label htmlFor="star1" title="text">
            1 star
          </label>
          <input
            type="radio"
            id="star2"
            name="rate"
            value="2"
            onChange={(e) => setRating(e.target.value)}
          />
          <label htmlFor="star2" title="text">
            2 stars
          </label>
          <input
            type="radio"
            id="star3"
            name="rate"
            value="3"
            onChange={(e) => setRating(e.target.value)}
          />
          <label htmlFor="star3" title="text">
            3 stars
          </label>
          <input
            type="radio"
            id="star4"
            name="rate"
            value="4"
            onChange={(e) => setRating(e.target.value)}
          />
          <label htmlFor="star4" title="text">
            4 stars
          </label>
          <input
            type="radio"
            id="star5"
            name="rate"
            value="5"
            onChange={(e) => setRating(e.target.value)}
          />
          <label htmlFor="star5" title="text">
            5 stars
          </label>
        </div>
        <TextArea
          cols="30"
          rows="10"
          placeholder="Deixe seu comentário"
          res
          onChange={(e) => setComment(e.target.value)}
        ></TextArea>
        <Button disabled={!comment || !rating} type="button" onClick={setValue}>
          Finalizar
        </Button>
        <Modal ref={modalRef} fade >
          <ModalTitle>Obrigada pela avaliação!</ModalTitle>
          <ShortcutContainer>
            <PointsContainer>
              <BodyPoints>+25</BodyPoints>
              <Points>pontos</Points>
            </PointsContainer>
            <Star />
          </ShortcutContainer>
          <Title>Seu comentário será analisado e em breve estará visível.</Title>
          <Button onClick={close}>Muito bom!</Button>
        </Modal>
      </Section>
    </Root>
  );
};

export default Home;

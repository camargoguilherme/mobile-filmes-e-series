import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Background from '~/components/Background';
import {Container, Poster, Title, Infos, Resume} from './styles';

const FilmeDetail = () => {
  const {title, resume, category, language, date, posterStart} = useSelector(
    (state) => state.filme.show
  );
  return (
    <Background>
      <Container>
        <Poster
          source={{
            uri: posterStart, // 'https://wallpapercave.com/wp/wp5440457.jpg',
          }}
        />
        <Title>{title}</Title>
        <Resume>{resume}</Resume>
        <Infos>{category}</Infos>
        <Infos>{language}</Infos>
        <Infos>{date}</Infos>
      </Container>
    </Background>
  );
};

export default FilmeDetail;

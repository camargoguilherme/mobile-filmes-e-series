import React from 'react';
import {useSelector} from 'react-redux';

import Background from '~/components/Background';
import {Container, Poster, Title, Infos, Resume} from './styles';

const SerieDetail = () => {
  const {title, resume, category, language, date, posterStart} = useSelector(
    (state) => state.serie.show
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
        <Resume numberOfLines={3}>{resume}</Resume>
        <Infos>{category}</Infos>
        <Infos>{language}</Infos>
        <Infos>{date}</Infos>
      </Container>
    </Background>
  );
};

export default SerieDetail;

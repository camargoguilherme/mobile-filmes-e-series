import React, {useState} from 'react';
import {Text} from 'react-native';

import {Container, Button} from './styles';

const ReadMore = ({style, children, numberOfLines, ...rest}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Container>
      <Text
        style={style}
        {...rest}
        numberOfLines={readMore ? 0 : numberOfLines}>
        {children}
      </Text>
      <Button
        style={[style, {color: 'rgba(255, 255, 255, .8)'}]}
        onPress={() => setReadMore(!readMore)}>
        {readMore ? 'Mostrar menos' : 'Mostrar mais'}
      </Button>
    </Container>
  );
};

export default ReadMore;

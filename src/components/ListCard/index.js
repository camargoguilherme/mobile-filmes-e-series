import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Card, Image} from './styles';

export default function ListCard({data, loading, navigate, page, set, get}) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);

  function setToShow(item) {
    dispatch(set(item));
    navigate();
  }
  useEffect(() => {
    if (page === 0) {
      dispatch(get(page + 1));
    }
  }, []);

  useEffect(() => {
    if (search && !loading) {
      console.tron.log(page);
      dispatch(get(page + 1));
      setSearch(false);
    }
  }, [search]);
  const renderItem = ({item, index}) => (
    <Card key={index} onPress={() => setToShow(item)}>
      <Image source={{uri: item.posterStart}} accessibilityLabel={item.title} />
    </Card>
  );
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        numColumns={3}
        renderItem={renderItem}
        extraData={data}
        showsVerticalScrollIndicator={false}
        initialNumToRender={21}
        onEndReached={() => {
          setSearch(true);
        }}
        onEndReachedThreshold={0.01}
      />
    </Container>
  );
}

ListCard.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  get: PropTypes.func.isRequired,
  set: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

ListCard.defaultProps = {
  loading: false,
};

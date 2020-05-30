import React from 'react';
import {useSelector} from 'react-redux';

import Background from '~/components/Background';
import ListCard from '~/components/ListCard';

import {getSeriesRequest, setSerieRequest} from '~/store/modules/serie/actions';

export default function Serie({navigation}) {
  const series = useSelector((state) => state.serie.series);
  const loading = useSelector((state) => state.serie.series.loading);
  const page = useSelector((state) => parseInt(state.serie.series.length / 25));

  return (
    <Background>
      <ListCard
        loading={loading}
        data={series}
        navigate={() => navigation.navigate('SerieDetail')}
        page={page}
        get={getSeriesRequest}
        set={setSerieRequest}
      />
    </Background>
  );
}

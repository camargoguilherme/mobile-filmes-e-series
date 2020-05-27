import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export default styled(LinearGradient).attrs({
  colors: ['rgba(51,51,51, 1)', 'rgba(100,100,100, 1)'],
})`
  flex: 1;
`;

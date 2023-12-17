import LottieView from 'lottie-react-native';
import { lineLottieSyles } from './lineLottieStyles';


export default function LineLottie() {
  return (
    <LottieView 
    style={lineLottieSyles.logoLottie}
    source={require('../../../../assets/lineLottie.json')}
    autoPlay
    loop
    />

  )
}


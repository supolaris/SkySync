import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { logoLottieSyles } from './logoLottieStyles';


export default function LogoLottie() {
  return (
    <LottieView 
    style={logoLottieSyles.logoLottie}
    source={require('../../../../assets/skySyncLogoLottie.json')}
    autoPlay
    loop
    />

  )
}


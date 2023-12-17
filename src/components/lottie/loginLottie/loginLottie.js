import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { loginLottieSyles } from './loginLottieStyles';


export default function LoginLottie() {
  return (
    <LottieView 
    style={loginLottieSyles.logoLottie}
    source={require('../../../../assets/skySyncLogoLottie.json')}
    autoPlay
    loop
    />

  )
}


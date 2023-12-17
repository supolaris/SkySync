import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { userLottieSyles } from './userLottieStyles';


export default function UserLottie() {
  return (
    <LottieView 
    style={userLottieSyles.logoLottie}
    source={require('../../../../assets/user2.json')}
    autoPlay
    loop
    />

  )
}


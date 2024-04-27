import React from 'react';
import { View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import the logo image
import divineLogo from '@/assets/images/divine_logo.png';
import styles from '@/components/common/header/signinheader.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInHeader = () => {
  return (
    <SafeAreaView style={styles.signInHeaderContainer}>

      {/* Logo */}
      <Image
        source={divineLogo}
        style={styles.headerLogo}
      />

    </SafeAreaView>
  );
};

export default SignInHeader;
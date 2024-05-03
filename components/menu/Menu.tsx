import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import styles from './menu.style';
import { COLORS, SIZES } from '@/constants';

const Menu = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      {/* Heading Text */}
      <Text style={styles.headingText}>Personal</Text>

      {/* White Box */}
      <View style={styles.whiteBox}>
        {/* Balances */}
        <TouchableOpacity style={styles.sectionBtn} onPress={() => navigation.navigate('Balances')}>
          <View>
            <Text style={styles.buttonHeading}>Balances</Text>
            <Text style={styles.buttonSubheading}>View your balances</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.themeGreen} />
        </TouchableOpacity>

        {/* Gray Line */}
        <View style={styles.grayLine}></View>

        {/* Purchase History */}
        <TouchableOpacity style={styles.sectionBtn} onPress={() => navigation.navigate('PurchaseHistory')}>
          <View>
            <Text style={styles.buttonHeading}>Purchase history</Text>
            <Text style={styles.buttonSubheading}>View your order history</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.themeGreen} />
        </TouchableOpacity>

        {/* Gray Line */}
        <View style={styles.grayLine}></View>

        {/* Profile */}
        <TouchableOpacity style={styles.sectionBtn} onPress={() => navigation.navigate('Profile')}>
          <View>
            <Text style={styles.buttonHeading}>Profile</Text>
            <Text style={styles.buttonSubheading}>View your profile</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.themeGreen} />
        </TouchableOpacity>
      </View>
      
      {/* Heading Text */}
      <Text style={styles.headingText}>Help</Text>

      {/* White Box */}
      <View style={styles.whiteBox}>
        {/* Contact */}
        <TouchableOpacity style={styles.sectionBtn} onPress={() => navigation.navigate('Balances')}>
          <View>
            <Text style={styles.buttonHeading}>Contact us</Text>
            <Text style={styles.buttonSubheading}>Get in touch with us</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.themeGreen} />
        </TouchableOpacity>

        {/* Gray Line */}
        <View style={styles.grayLine}></View>

        {/* Recharge help */}
        <TouchableOpacity style={styles.sectionBtn} onPress={() => navigation.navigate('PurchaseHistory')}>
          <View>
            <Text style={styles.buttonHeading}>Recharge</Text>
            <Text style={styles.buttonSubheading}>Top up your Divine Mobile SIM card</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.themeGreen} />
        </TouchableOpacity>

      </View>
      
      {/* Heading Text */}
      <Text style={styles.headingText}>Legal</Text>

      {/* White Box */}
      <View style={styles.whiteBox}>
        {/* Contact */}
        <TouchableOpacity style={styles.sectionBtn} onPress={() => navigation.navigate('Balances')}>
          <View>
            <Text style={styles.buttonHeading}>Terms and conditions</Text>
            <Text style={styles.buttonSubheading}>Review the Divine T&C's</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.themeGreen} />
        </TouchableOpacity>

        {/* Gray Line */}
        <View style={styles.grayLine}></View>

        {/* Recharge help */}
        <TouchableOpacity style={styles.sectionBtn} onPress={() => navigation.navigate('PurchaseHistory')}>
          <View>
            <Text style={styles.buttonHeading}>Privancy Policy</Text>
            <Text style={styles.buttonSubheading}>Read standard Divine privacy policy</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.themeGreen} />
        </TouchableOpacity>

      </View>

      {/* Logout Button */}
       <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('LoginScreen')}>
          <View style={styles.iconTxt}>
            <SimpleLineIcons style={styles.icon}
              name="logout" size={20} color={COLORS.text} />
            
            <Text style={styles.txt}>Log out</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={20} color={COLORS.white} />
        </TouchableOpacity>
    </View>
  );
};

export default Menu;

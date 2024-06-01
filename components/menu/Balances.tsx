import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { COLORS } from '@/constants';
import styles from './balances.style';
import { icons } from '@/constants';

const Balances = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <View style={styles.BackBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="angle-left" size={24} style={styles.icon} />
        </TouchableOpacity > 
        <Text style={styles.headText}>My Balances</Text>
      </View>

     
      <View style={styles.boxContainer}>

        <View style={styles.airtimeContainer}>
          {/* Airtime Balance Box */}
          <View style={styles.topPart}>
            <Image source={icons.airtimeBlack} style={styles.icon} /> 
            {/* Airtime Heading */}
              <Text style={styles.mediumText}>Airtime</Text>
          </View>

          <View style={styles.middle}>
            {/* First items in the middle */}
            <View style={styles.balanceBox}>  
              <Text style={styles.balanceLabel}>Airtime Remaining</Text>
              <Text style={styles.balanceAmount}>R50.00</Text>
            </View>

            {/* Airtime Bought */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Airtime Bought</Text>
              <Text style={styles.balanceAmount}>R60.00</Text>
            </View>
            {/* Airtime Used */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Airtime Used</Text>
              <Text style={styles.balanceAmount}>R10.00</Text>
            </View>
            {/* Purchase Again */}
            <View style={styles.purchaseAgain}>
              <TouchableOpacity onPress={() => navigation.navigate('WalletScreen')}>
                <Text style={styles.purchaseText}>Add to Wallet</Text>
              </TouchableOpacity>
              <Text style={styles.divider}>{'  |  '}</Text>
              <TouchableOpacity>
                <Text style={styles.purchaseText}>Purchase Again</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.dataContainer}>
          
          <View style={styles.grayLine}></View>

          <View style={styles.topPart}>
            <Image source={icons.dataBlack} style={styles.icon} /> 
            {/* Airtime Heading */}
              <Text style={styles.mediumText}>Data</Text>
          </View>

          <View style={styles.middle}>
            {/* First items in the middle */}
            <View style={styles.balanceBox}>  
              <Text style={styles.balanceLabel}>Data Remaining</Text>
              <Text style={styles.balanceAmount}>R50.00</Text>
            </View>

            {/* Airtime Bought */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Data Bought</Text>
              <Text style={styles.balanceAmount}>R60.00</Text>
            </View>
            {/* Airtime Used */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Data Used</Text>
              <Text style={styles.balanceAmount}>R10.00</Text>
            </View>
            {/* Purchase Again */}
            <View style={styles.purchaseAgain}>
              <TouchableOpacity>
                <Text style={styles.purchaseText}>Purchase Again</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.voiceContainer}>
          
          <View style={styles.grayLine}></View>

          <View style={styles.topPart}>
            <Image source={icons.voiceBlack} style={styles.icon} /> 
            {/* Airtime Heading */}
              <Text style={styles.mediumText}>Voice</Text>
          </View>

          <View style={styles.middle}>
            {/* First items in the middle */}
            <View style={styles.balanceBox}>  
              <Text style={styles.balanceLabel}>Voice Remaining</Text>
              <Text style={styles.balanceAmount}>R50.00</Text>
            </View>

            {/* Airtime Bought */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Voice Bought</Text>
              <Text style={styles.balanceAmount}>R60.00</Text>
            </View>
            {/* Airtime Used */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Voice Used</Text>
              <Text style={styles.balanceAmount}>R10.00</Text>
            </View>
            {/* Purchase Again */}
            <View style={styles.purchaseAgain}>
              <TouchableOpacity>
                <Text style={styles.purchaseText}>Purchase Again</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>


        <View style={styles.socialContainer}>
          
          <View style={styles.grayLine}></View>

          <View style={styles.topPart}>
            <Image source={icons.socialBlack} style={styles.icon} /> 
            {/* Airtime Heading */}
              <Text style={styles.mediumText}>Social</Text>
          </View>

          <View style={styles.middle}>
            {/* First items in the middle */}
            <View style={styles.balanceBox}>  
              <Text style={styles.balanceLabel}>Social Remaining</Text>
              <Text style={styles.balanceAmount}>R50.00</Text>
            </View>

            {/* Airtime Bought */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Social Bought</Text>
              <Text style={styles.balanceAmount}>R60.00</Text>
            </View>
            {/* Airtime Used */}
            <View style={styles.balanceBox}>
              <Text style={styles.balanceLabel}>Social Used</Text>
              <Text style={styles.balanceAmount}>R10.00</Text>
            </View>
            {/* Purchase Again */}
            <View style={styles.purchaseAgain}>
              <TouchableOpacity>
                <Text style={styles.purchaseText}>Purchase Again</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </View>

    </View>
  );
};

export default Balances;

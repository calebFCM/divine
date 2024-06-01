import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT, SIZES } from "@/constants";
import styles from './getstarted.style';

const GetStarted = () => {
  const navigation = useNavigation();

  {/* Modal 
   const [isModalVisible, setIsModalVisible] = useState(false);

   const toggleModal = () => {
     setIsModalVisible(!isModalVisible);
   };*/}

  return (
    <View style={styles.container}>
      
      <View style={styles.whiteBox}>
         <View style={styles.BackBtnContainer}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="times" size={24} style={styles.icon} />
         </TouchableOpacity >
         </View>
         <View style={styles.headingContainer}>
            <Text style={styles.heading}>First, find your SIM number.</Text>
         </View>
         <View style={styles.textContainer}>
            <Text style={styles.text}>Look for a row of 10 numbers on your SIM</Text>
            <Text style={styles.text}>Package or on the physcial SIM card</Text>
         </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('SimNumberScreen')} 
            style={styles.buttonContainer}>
          <Text style={styles.buttonText}>i have my sim number</Text>
        </TouchableOpacity>
      </View>


      {/* Modal 
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeIconContainer} onPress={toggleModal}>
            <FontAwesome5 name="times" size={30} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>First, find your SIM number.</Text>
            <Text style={styles.modalText}>Look for a row of 10 numbers on your SIM </Text>
            <Text style={styles.modalText}>Package or on the physical SIM card.</Text>
            <TouchableOpacity style={styles.modalButtonContainer}>
              <Text style={styles.modalButtonText}>I have my SIM number</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>*/}


    </View>
  );
};

export default GetStarted;

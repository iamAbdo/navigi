import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import ProgressBarWithShadow from './components/ProgressBarWithShadow';

// Constants for COLORS and FONTS
const COLORS = {
  white: "#FFFFFF",
  primary: "#7A9E9F",
  secondaryGray: "#CED4DA",
};
const FONTS = {
  h3: { fontSize: 20, fontWeight: "bold" },
  h4: { fontSize: 16, fontWeight: "bold" },
  body3: { fontSize: 14 },
};

const Profile = ({ navigation }) => {

  const [profileData, setProfileData] = useState({
    name: "Senouci Ahmed",
    email: "snouClove@gmail.com",
    phone: "123-456-7890",
    address: "Alger, Algeria",
    description: "Experienced front-end developer proficient in HTML, CSS, and JavaScript. Skilled in creating responsive and visually appealing user interfaces. Strong problem-solving abilities and a collaborative team player. Passionate about staying up-to-date with the latest web technologies.",
    skills: [
      { title: "HTML", progress: 0.8 },
      { title: "CSS", progress: 0.6 },
      { title: "JavaScript", progress: 0.4 },
      { title: "PHP", progress: 0.2 },
      { title: "Canva", progress: 0.7 },
    ],
  });

  const [progress, setProgress] = useState(0.1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 22}}>
      <View style={{ marginHorizontal: 12, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 0 }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ ...FONTS.h3 }}>Profile</Text>
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
        <View style={{ alignItems: "center", marginVertical: 22 }}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={selectedImage ? { uri: selectedImage } : require("../assets/Logo.jpg")}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />
            <View style={{ position: "absolute", bottom: 0, right: 10, zIndex: 9999 }}>
              <MaterialIcons name="photo-camera" size={32} color={COLORS.primary} />
            </View>
          </TouchableOpacity>
        </View>

        
        <View style={{ marginBottom: 20 }}>
          <ProfileItem icon="person" label="Name" value={profileData.name} />
          <ProfileItem icon="email" label="Email" value={profileData.email} />
          <ProfileItem icon="phone" label="Phone" value={profileData.phone} />
          <ProfileItem icon="location-on" label="Address" value={profileData.address} />
        </View>

        {/* Description */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ ...FONTS.h4, paddingVertical: 10 }}>Profile Description</Text>
          <Text>{profileData.description}</Text>
        </View>

        {/* Skills */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ ...FONTS.h4, paddingVertical: 20 }}>Skills</Text>
          {profileData.skills.map((skill, index) => (
            <ProgressBarWithShadow key={index} title={skill.title} progress={skill.progress} />
          ))}
        </View>


        <TouchableOpacity style={{ backgroundColor: COLORS.primary, height: 44, borderRadius: 6, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ ...FONTS.body3, color: COLORS.white }}>Contact</Text>
        </TouchableOpacity>
        


      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileItem = ({ icon, label, value }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 6, alignItems: "center" }}>
      <MaterialIcons name={icon} size={24} color={COLORS.primary} style={{ marginRight: 10 }} />
      <Text style={{ ...FONTS.h4 }}>{label}: </Text>
      <Text>{value}</Text>
    </View>
  );
};

export default Profile;



// import React from 'react';

// import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text, StatusBar } from 'react-native';

// const Profile = () => { 
//   return (
//     <View>test</View>
//   );
// }

// export default Profile;
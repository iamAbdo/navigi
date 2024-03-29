import React from 'react';
import { View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const FONTS = {
    h3: { fontSize: 20, fontWeight: "bold" },
    h4: { fontSize: 16, fontWeight: "bold" },
    body3: { fontSize: 14 },
  };

const ProgressBarWithShadow = ({ progress, title }) => {
  return (
    <>
        <Text style={{ ...FONTS.h4, }}>{title}</Text>      
        <View style={{ borderRadius: 5, marginBottom: 20, width: 200, 
            shadowColor: '#000', shadowOffset: { width: 2, height: 2 }, 
            shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <ProgressBar
            color="#0000FF"
            style={{ height: 10, borderRadius: 5 }}
            progress={progress}
            />
        </View>
    </>
  );
}

export default ProgressBarWithShadow;

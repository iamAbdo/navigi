import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableHighlight } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function MediaCard({ title, image, description, screen }) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.navigate({ name: screen })} underlayColor="#DDDDDD">
      <Card style={{ maxWidth: 345, maxHeight: 300, backgroundColor: '#7A9E9F' }}>
        <Card.Cover source={{ uri: `../../../app/assets/${image}` }} />
        <Card.Content style={{ height: 100 }}>
          <Title style={{ fontWeight: 'bold' }}>{title}</Title>
          <Paragraph style={{ color: '#333' }}>{description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );
}

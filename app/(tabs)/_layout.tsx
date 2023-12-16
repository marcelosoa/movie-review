import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size}/>,
        }}
      />
    </Tabs>
  );
}

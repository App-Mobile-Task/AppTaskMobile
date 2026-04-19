import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TaskCardProps {
    title: string;
    isCompleted: boolean;
}

export function TaskCard({ title, isCompleted }: TaskCardProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkbox}>
            {isCompleted ? (
                <MaterialIcons name="check-circle" size={24} color="#EB4435" />
            ) : (
                <MaterialIcons name="radio-button-unchecked" size={24} color="#999" />
            )}
      </TouchableOpacity>

      <Text style={[styles.title, isCompleted && styles.titleCompleted]}>
        {title}
      </Text>

      <TouchableOpacity>
        <MaterialIcons name="delete-outline" size={24} color="#999" />
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    elevation: 1,
  },
  checkbox: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { events } from '../../src/data/events';

export default function EventScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Stack.Screen options={{ title: 'Event not found' }} />
        <Text style={styles.title}>Event not found</Text>
        <Text style={styles.text}>No event with id {id}.</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Stack.Screen options={{ title: event.title }} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.text}>{event.date} · {event.place}</Text>
      <Text style={styles.text}>{event.seats} seats</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
});
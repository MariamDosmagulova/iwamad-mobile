import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import EventRow from '../../src/components/EventRow';
import { events } from '../../src/data/events';

export default function EventsScreen() {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [query, setQuery] = useState('');

  const visibleEvents = events.filter((event) =>
    event.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  function toggleSaved(id: number) {
    setSavedIds((ids) =>
      ids.includes(id) ? ids.filter((savedId) => savedId !== id) : [...ids, id]
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      data={visibleEvents}
      keyExtractor={(e) => String(e.id)}
      ListHeaderComponent={
        <View>
          <Text style={styles.hint}>Long-press an event to save it. Saved: {savedIds.length}</Text>
          <TextInput
            style={styles.search}
            value={query}
            onChangeText={setQuery}
            placeholder="Search events"
          />
        </View>
      }
      renderItem={({ item }) => (
        <EventRow
          event={item}
          saved={savedIds.includes(item.id)}
          onPress={() => router.push(`/events/${item.id}`)}
          onLongPress={() => toggleSaved(item.id)}
        />
      )}
      ListEmptyComponent={<Text style={styles.empty}>No events match</Text>}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  hint: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  search: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  empty: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 24,
    color: '#555',
  },
});
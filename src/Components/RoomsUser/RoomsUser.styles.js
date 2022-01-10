import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    top: 10,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 1,
    marginVertical: 5,
    flex: 0.15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 0,
    minHeight: 100,
  },
  textBox: {
    left: 15,
    justifyContent: 'flex-start',
    maxWidth: '50%',
    maxHeight: 100,
    flexDirection: 'column',
  },
  header: { fontSize: 16, fontFamily: 'Poppins_600SemiBold' },
  indicator: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  message: { fontFamily: 'Poppins_400Regular', fontSize: 14 },
});

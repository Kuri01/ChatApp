import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  leftContainer: { minWidth: 230, maxWidth: 260 },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icons: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  icon: {
    marginHorizontal: 5,
  },
  name: {
    color: '#5603AD',
    marginHorizontal: 5,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  activityText: {
    fontSize: 12,
    marginHorizontal: 5,
    fontFamily: 'Poppins_400Regular',
  },
  goBackAndAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackButton: { fontSize: 40, color: '#5603AD' },
  headerComponent: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: '#B6DEFD',
  },
});

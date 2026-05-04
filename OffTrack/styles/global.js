import { StyleSheet } from 'react-native';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  buttonLogin: 'rgba(40, 40, 40, 0.85)',
  background: '#1a1a1a',
};

export const globalStyles = StyleSheet.create({
  buttonBase: {
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
  },
  inputBase: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#000',
    marginBottom: 12,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 12,
  },
  footerLink: {
    fontWeight: '700',
  },
});
/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';
// export const FONT_FAMILY = 'Inter-Bold.ttf';

export const Colors = {
  appWhite: '#FFFFFF',
  appBlueGreen: '#1580CD',
  appGreen: '#93B03F',
  appLightBlue: '#CCEBFF',
  appBlack: '#000000',
  applightGreen: '#FAFFF2',
  appGray: '#748BA1',
  appBlue: '#00416E',
  appInputBlue: '#F5FBFF',
  appLightRed: '#FFF0F0',
  appRed: '#FF9696',
  appTextBlue: '#748BA1',
  appDeepRed: '#DE350B',
  appSubGreen: '#93B03F',
  applemon: '#E3FFB2',
  appSublemon: '#C3F270',
  appOrange: '#EDC900',
  appOrangeLight: '#FFF1A4',
  appGrayBlue: '#5D748A',
  appGrayBlack: '#384A5B',
  appGraySearch: '#E7EDF3',
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

const {width, height} = Dimensions.get('window');

export const RH = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * height;
    return result;
  }
};

export const RW = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * width;
    return result;
  }
};

export const RF = val => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 4;
};

export const RR = val => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};

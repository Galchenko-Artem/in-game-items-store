import React from 'react';
import {
  YMaps, Map, Placemark, GeolocationControl, FullscreenControl,
} from '@pbe/react-yandex-maps';

export default function Maps() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  return (
    <YMaps>
    <Map defaultState={defaultState}>
      <Placemark geometry={[55.684758, 37.738521]} />
      <Placemark geometry={[52.970756, 36.064358]} />
      <Placemark geometry={[59.938955, 30.315644]} />
      <GeolocationControl options={{ float: 'left' }} />
      <FullscreenControl />

    </Map>
    </YMaps>
  );
}

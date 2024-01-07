import { NavigationContainer } from '@react-navigation/native';

import { PrivateRoutes } from './private.routes';

export const Routes = () => (
  <NavigationContainer
    linking={{
      prefixes: ['spotify-mobile://'],
    }}
  >
    <PrivateRoutes />
  </NavigationContainer>
);

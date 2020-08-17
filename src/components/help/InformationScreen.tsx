import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {NavigationParamList} from 'NavigationTypes';
import Routes from '../../routes/Routes';
import Styles from './HelpStyles';

/**
 * Adds typing to route.params for the correct route
 */
type InfoScreenRouteProp = RouteProp<NavigationParamList, Routes.HELP_INFO>;

interface Props {
  route: InfoScreenRouteProp;
}
const InformationScreen = ({
  route: {
    params: {header},
  },
}: Props) => {
  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.avatarContainer}>
        <Text style={Styles.nameText}>{header}</Text>
      </View>
      <View style={Styles.buttonContainer}>
        <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue interdum ligula, quis vestibulum odio scelerisque at. Fusce
          blandit tellus sed orci maximus pharetra. Nullam rutrum tincidunt
          augue, vel interdum metus feugiat vel. Sed hendrerit sit amet metus ut
          dictum. Fusce convallis nulla eros, ut finibus dolor laoreet vitae.
          Aenean ut rhoncus dui, ac fermentum neque. Donec dignissim massa et
          turpis finibus convallis imperdiet ut nulla. Duis tempor ipsum non dui
          euismod, luctus scelerisque diam aliquam. Duis efficitur non augue sit
          amet rutrum. Donec lacinia facilisis egestas. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Curabitur sed pharetra sapien, sit amet interdum velit. \n\n
          Praesent vulputate eu felis ut mollis. Donec elementum odio nec tortor
          malesuada bibendum. Cras feugiat arcu eget est consequat vestibulum.
          Duis dictum scelerisque dui non consequat. Aenean ut tortor at justo
          placerat placerat. Quisque nibh ex, consequat quis nulla at, tempor
          consequat sapien. Donec et bibendum ante. Sed auctor molestie lacinia.
          Sed mi turpis, tempus nec velit nec, sollicitudin bibendum velit.
          Mauris lacinia egestas felis et dignissim. Quisque eu placerat felis.
          Ut pharetra ipsum in quam porttitor, at elementum odio ornare. Etiam
          malesuada, quam vel lacinia consectetur, tortor tellus posuere arcu,
          auctor dignissim mi mauris et nisi. Phasellus eget enim tempus, semper
          lacus sit amet, elementum nunc. Pellentesque quis nisl et dui sodales
          placerat non vel augue. Cras efficitur, nunc ut dapibus dictum, lectus
          purus commodo quam, quis fringilla justo mi eu diam. Pellentesque
          ultrices hendrerit tempor. Proin varius rhoncus sem non auctor. Aenean
          posuere laoreet augue. Nullam porttitor accumsan purus id maximus.
          Maecenas accumsan tristique orci eget scelerisque. Proin imperdiet in
          lectus vel dignissim. Cras accumsan, quam et sollicitudin dignissim,
          nisi turpis interdum sem, a vestibulum mauris velit at sem. Nulla
          sagittis sed ipsum ac tempor. Pellentesque eget elementum lacus.
          Pellentesque sed enim non sem sodales egestas posuere sed dolor. Donec
          urna enim, finibus et mi et, viverra dictum diam. Nulla a fermentum
          ligula, sed condimentum lectus. Curabitur tempor, metus eget efficitur
          ullamcorper, ex nulla malesuada justo, in tincidunt leo turpis at
          sapien.
        </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default InformationScreen;

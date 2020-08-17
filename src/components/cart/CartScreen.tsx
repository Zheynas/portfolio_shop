import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {ResourcesList} from 'redux-and-the-rest';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/EvilIcons';

import Routes from '../../routes/Routes';
import Styles from './CartStyles';
import BottomButton from '../shared/BottomButton';
import {getOrFetchProducts} from '../../redux/resources/products';
import {ApplicationState} from '../../redux/types';
import {Product} from '../../models/product';
import {Colours} from '../../styles/Themes';
import CartItem from './CartItem';

interface Props {
  /**
   * Collection of products for current category
   */
  productsCollection: ResourcesList<Product>;
}

const CartScreen = ({
  productsCollection: {
    items: products,
    status: {type},
  },
}: Props) => {
  const {navigate} = useNavigation();
  const [edit, setEdit] = React.useState(false);
  console.log('productsCollection', products);

  const renderContent = () => {
    if (products.length === 0) {
      return (
        <View style={Styles.centerFlex}>
          <Text style={Styles.noItems}>Nothing here</Text>
        </View>
      );
    }

    return (
      <View style={Styles.flexContainer}>
        <View style={Styles.productContainer}>
          <FlatList
            data={products}
            renderItem={({item, index}) => (
              <CartItem
                item={item}
                lastItem={index === products.length - 1}
                edit={edit}
              />
            )}
          />
        </View>
        <View style={Styles.totalContainer}>
          <Text style={Styles.totalText}>Total</Text>
          <Text style={Styles.costText}>$204.50</Text>
        </View>
      </View>
    );
  };

  const renderIcon = () => {
    if (products.length === 0) {
      return null;
    }

    if (edit) {
      return (
        <TouchableOpacity
          style={Styles.editIconContainer}
          onPress={() => {
            setEdit(!edit);
          }}>
          <Text style={Styles.okText}>OK</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={Styles.editIconContainer}
        onPress={() => {
          setEdit(!edit);
        }}>
        <Icon name="pencil" size={moderateScale(35)} color={Colours.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={Styles.flexContainer}>
      {renderIcon()}
      <View style={Styles.container}>
        {renderContent()}
        <BottomButton
          text="SHOPPING"
          onPress={() => {
            navigate(Routes.CHECKOUT);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({products}: ApplicationState) => ({
  productsCollection: getOrFetchProducts(products, {
    id: 1,
  }),
});

export default connect(mapStateToProps)(CartScreen);

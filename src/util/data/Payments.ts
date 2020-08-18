import {PaymentOption} from '../enums/PaymentOption';
import Image from '../../../assets/images/Images';

const Payments: PaymentOption[] = [
  {
    name: 'Apple Pay',
    image: Image.APPLE_PAY,
    id: '0',
  },
  {
    name: 'Visa',
    image: Image.VISA,
    id: '1',
  },
  {
    name: 'MasterCard',
    image: Image.MASTERCARD,
    id: '2',
  },
  {
    name: 'Google Pay',
    image: Image.GOOGLE_PAY,
    id: '3',
  },
];

export default Payments;

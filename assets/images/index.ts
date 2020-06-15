export default function getImage(image: string) {
  switch (image) {
    case 'HANDBAG':
      return require('./handbags.jpg');
    case 'MEN':
      return require('./men.jpg');
    case 'WOMAN':
      return require('./woman.png');
    case 'SHOES':
      return require('./mens-shoes.jpg');
    case 'KIDS':
      return require('./girl-fashion.jpg');
  }
}

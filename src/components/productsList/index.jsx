import Card from '../card';

const ProductsList = ({ products }) => {
  return (
    <div className='card'>
        {products.map((product) => (
            <Card key={product.id} product={product}/>
        ))}
    </div>
  );
};

export default ProductsList;
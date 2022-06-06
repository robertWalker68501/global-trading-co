import './category-item.styles.scss';

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className='category-container'>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='category-body-container'>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;

import CategoryItem from '../category-item/category-item.component';

import './categories-container.styles.scss';

const CategoriesContainer = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map(({ id, ...category }) => (
        <CategoryItem key={id} {...category} />
      ))}
    </div>
  );
};

export default CategoriesContainer;

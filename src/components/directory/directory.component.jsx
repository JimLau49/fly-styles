import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem id={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;

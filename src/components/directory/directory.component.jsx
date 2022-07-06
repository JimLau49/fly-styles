import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem id={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;

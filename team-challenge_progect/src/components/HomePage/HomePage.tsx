import { CatalogMenu } from 'components/Catalog/CatalogMenu';
import MainPageItem from 'ui/MainPageItemButton'

export const HomePage: React.FC = () => {
  return (
    <div className='page__body'>
      <header className='header'>
        <div className='header__content'>
          <MainPageItem />
        </div>
      </header>
      <CatalogMenu />
    </div>
  );
};

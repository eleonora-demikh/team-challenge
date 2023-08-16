import './CatalogMenu.scss';

export const CatalogMenu: React.FC = () => {
  return (
    <aside className='page__menu' id='menu'>
      <div className='menu'>
        <div className='page__top-bar top-bar'>
          <a href='#' className='icon icon--close' />
        </div>

        <div className='menu__bottom'>
          <nav className='menu__nav page__nav nav'>
            <ul className='nav__list'>
              <li className='nav__adress'>
                <a className='nav__link' href='#'>
                  Some
                </a>
              </li>

              <li className='nav__adress'>
                <a className='nav__link' href='#about-us'>
                  Categories
                </a>
              </li>

              <li className='nav__adress'>
                <a className='nav__link' href='#now-on-view'>
                  To
                </a>
              </li>

              <li className='nav__adress'>
                <a className='nav__link' href='#explore'>
                  Choose
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

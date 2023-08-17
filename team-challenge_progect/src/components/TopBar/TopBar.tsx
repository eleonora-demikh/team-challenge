import './TopBar.scss';
import myLogo from "../../images/baby-land_logo.svg";
import { Button } from '@mui/material';

export const TopBar: React.FC = () => {
  return (
    <div className='page__top-bar top-bar'>
      <a className='header__logo' href='#'>
        <img className='top-bar__logo' src={myLogo} alt='Logo' />
      </a>

      <div className='catalog'>
        <Button variant='outlined' href='#outlined-buttons'>
          Categories
        </Button>
      </div>

      <div className='search-field'>
        <input type='text' />
        <button type='submit'>Пошук</button>
      </div>

      <div className='header__icons'>
        <a className='icon icon--phone' href='#'></a>

        <a className='icon icon--menu' href='#menu'></a>
      </div>
    </div>
  );
};

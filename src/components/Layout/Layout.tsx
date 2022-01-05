import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { ThemeContext } from 'theme/context';
import { Menu, MenuItem } from 'components/Menu';
import Button from 'components/Button';
import Drawer from 'components/Drawer';
import SunIcon from 'images/icons/sun-icon.svg';
import MoonIcon from 'images/icons/moon-icon.svg';
import { ReactComponent as SettingsIcon } from 'images/icons/settings-icon.svg';
import styles from './Layout.module.scss';
import HeaderNav from './HeaderNav';

import { setAuthAction } from 'store/auth/action';

interface LayoutProps extends CommonProps {}

export function Layout(props: LayoutProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, username } = useSelector(state => state.auth);

  const { theme, setTheme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem(
        'auth',
        JSON.stringify({
          token,
          username,
        })
      );
    } else {
      const sessionData = sessionStorage.getItem('auth');
      if (sessionData) {
        const authData = JSON.parse(sessionData);
        dispatch(setAuthAction(authData));
      } else if (pathname !== '/login') navigate('/login');
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleThemeChange() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }

  function handleNavigate(path: string) {
    return () => navigate(path);
  }

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  function handleLogout() {
    sessionStorage.removeItem('auth');

    dispatch(
      setAuthAction({
        token: '',
        username: '',
      })
    );
  }

  return (
    <div className={clsx(styles.root, { [styles.dark]: theme === 'dark' })}>
      <header>
        <h1>React-Redux</h1>
        {token ? <HeaderNav /> : null}
        {username ? (
          <div>
            <span>{username} </span>
            <span className="ml-2 pointer" onClick={handleLogout}>
              Выйти
            </span>
          </div>
        ) : null}

        <Button
          variant="outlined"
          onClick={handleMenuOpen}
          className={styles.icon_btn}
        >
          <SettingsIcon />
        </Button>
      </header>

      <main>{props.children}</main>
      <footer>Footer</footer>

      <Drawer
        open={menuOpen}
        onClose={handleCloseMenu}
        className={styles.drawer}
      >
        <div className={styles.settings}>
          <h3>Settings</h3>
          <section>
            <span>Toggle theme</span>
            <Button
              variant="outlined"
              onClick={handleThemeChange}
              className={styles.icon_btn}
            >
              {theme === 'light' ? (
                <img src={SunIcon} alt="sun" />
              ) : (
                <img src={MoonIcon} alt="moon" />
              )}
            </Button>
          </section>

          <section>
            <nav>
              <Menu>
                <MenuItem
                  active={pathname === '/'}
                  onClick={handleNavigate('/')}
                >
                  Counter
                </MenuItem>
                <MenuItem
                  active={pathname === '/list'}
                  onClick={handleNavigate('/list')}
                >
                  List
                </MenuItem>
              </Menu>
            </nav>
          </section>
        </div>
      </Drawer>
    </div>
  );
}

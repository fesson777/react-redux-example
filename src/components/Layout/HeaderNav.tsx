import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Tabs, Tab } from 'components/Tabs';
import { TabValue } from 'components/Tabs/types';

const paths = ['/', '/list'];

function getTabFromPathname(pathname: string) {
  if (paths.includes(pathname)) {
    switch (pathname) {
      case '/':
        return 'counter';
      case '/list':
        return 'list';
    }
  }
  return undefined;
}

export default function HeaderNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [tab, setTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    const _tab = getTabFromPathname(pathname);
    if (_tab) {
      setTab(_tab);
    }
  }, [pathname]);

  function handleTabChange(value: TabValue) {
    if (value === 'counter') {
      navigate(`/`);
    }
    if (value === 'list') {
      navigate(`/list`);
    }
  }

  return (
    <nav>
      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label="Counter" value={'counter'} />
        <Tab label="List" value={'list'} />
      </Tabs>
    </nav>
  );
}

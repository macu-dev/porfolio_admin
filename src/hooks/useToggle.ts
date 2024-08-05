import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [menuOpen, setMenuOpen] = useState(initialState);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return { menuOpen, handleOpenMenu, setMenuOpen };
};

export default useToggle;

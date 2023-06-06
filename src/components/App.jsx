import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink>Hoom</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Hoom</div>} />
      </Routes>
    </div>
  );
};

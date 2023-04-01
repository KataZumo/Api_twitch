import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { getStreams } from '../utils/apiAuth';

export default function App() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStreams();
      setStreams(response);
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" key={streams.id} element={<MainPage streams={streams} />} />
    </Routes>
  );
}

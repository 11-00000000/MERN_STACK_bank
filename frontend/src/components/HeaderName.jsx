// HeaderName.jsx
"use client";
import { useMainContext } from '@/context/MainContext';
import React from 'react';

// const HeaderName = () => {
//   const { user } = useMainContext();

//   return (
//     <div className="py-2">
//       <h1 className="text-5xl font-bold capitalize">{user.name}</h1>
//     </div>
//   );
// };

const HeaderName = () => {
  const { user } = useMainContext();

  if (!user || !user.name) {
    return null; // or return a placeholder like <h1>Loading...</h1>
  }

  return (
    <div className="py-2">
      <h1 className="text-5xl font-bold capitalize">{user.name}</h1>
    </div>
  );
};
export default HeaderName;
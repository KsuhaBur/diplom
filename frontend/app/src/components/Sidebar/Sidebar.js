// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const DynamicSidebar = ({ pagesData }) => {
//   const [activePage, setActivePage] = useState(0);

//   const handleClick = (index) => {
//     setActivePage(index);
//   };

//   return (
//     <div className="sidebar">
//       <ul>
//         {pagesData.map((page, index) => (
//           <li key={index} className={activePage === index ? 'active' : ''}>
//             <Link to={page.path} onClick={() => handleClick(index)}>
//               {page.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DynamicSidebar;

// import React from 'react';
// // import { Link } from 'react-router-dom';

// const Sidebar = ({ pagesData }) => {
//   return (
//     <div className="sidebar">
//       <ul>
//         {pagesData.map((page) => (
//           <li key={page.id}>
//             <Link to={page.path}>{page.label}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


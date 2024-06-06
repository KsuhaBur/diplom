// import React, { useState } from 'react';

// // Стили CSS
// const sidebarStyles = {
//   sidebar: {
//     width: '200px',
//     height: '100%',
//     backgroundColor: '#f2f2f2',
//     transition: 'width 0.5s ease',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//   },
//   sidebarOpen: {
//     width: '250px',
//   },
//   sidebarClosed: {
//     width: '50px',
//   },
//   navList: {
//     listStyle: 'none',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     marginBottom: '10px',
//   },
//   navLink: {
//     display: 'block',
//     padding: '10px',
//     textDecoration: 'none',
//     color: '#333',
//   },
//   activeNavLink: {
//     backgroundColor: '#eee',
//   },
//   mainContent: {
//     marginLeft: '250px', // Ширина открытой боковой панели
//     transition: 'margin-left 0.5s ease',
//   },
//   mainContentOpen: {
//     marginLeft: '50px', // Ширина закрытой боковой панели
//   },
// };

// const Sidebar = ({ data, activeItem, isOpen }) => {
//   return (
//     <div>
//       <div style={{ ...sidebarStyles.sidebar, ...(isOpen ? sidebarStyles.sidebarOpen : sidebarStyles.sidebarClosed) }}>
//         <ul style={sidebarStyles.navList}>
//           {data.map((item) => (
//             <li key={item.id} style={sidebarStyles.navItem}>
//               <a href={item.link} style={item.id === activeItem ? sidebarStyles.activeNavLink : sidebarStyles.navLink}>
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div style={{ ...sidebarStyles.mainContent, ...(isOpen ? sidebarStyles.mainContentOpen : sidebarStyles.mainContentClosed) }}>
//         {/* ... Ваш основной контент ... */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';

// Стили CSS
const sidebarStyles = {
  sidebar: {
    width: '200px',
    height: '100%',
    backgroundColor: '#f2f2f2',
    transition: 'width 0.5s ease',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  sidebarOpen: {
    width: '250px',
  },
  sidebarClosed: {
    width: '50px',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginBottom: '10px',
    cursor: 'pointer',
  },
  navLink: {
    display: 'block',
    padding: '10px',
    textDecoration: 'none',
    color: '#333',
  },
  activeNavLink: {
    backgroundColor: '#eee',
  },
  mainContent: {
    marginLeft: '250px', // Ширина открытой боковой панели
    transition: 'margin-left 0.5s ease',
  },
  mainContentOpen: {
    marginLeft: '50px', // Ширина закрытой боковой панели
  },
};

const Sidebar = ({ data, activeItem, isOpen, onItemSelected }) => {
  return (
    <div>
      <div style={{ ...sidebarStyles.sidebar, ...(isOpen ? sidebarStyles.sidebarOpen : sidebarStyles.sidebarClosed) }}>
        <ul style={sidebarStyles.navList}>
          {data.map((item) => (
            <li key={item.id} style={sidebarStyles.navItem} onClick={() => onItemSelected(item)}>
              <div style={item.id === activeItem ? sidebarStyles.activeNavLink : sidebarStyles.navLink}>
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ ...sidebarStyles.mainContent, ...(isOpen ? sidebarStyles.mainContentOpen : sidebarStyles.mainContentClosed) }}>
        {/* ... Ваш основной контент ... */}
      </div>
    </div>
  );
};

export default Sidebar;

const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigationData = [
      { id: 1, label: 'Общеобразовательные программы' },
      { id: 2, label: 'Учебные планы' },
      { id: 3, label: 'Рабочие программы дисциплин' },
      { id: 4, label: 'ФГОС' },
      { id: 5, label: 'Направления подготовки' },
    ];
  
    const activeItem = 3;
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemSelected = (item) => {
      console.log('Выбранный элемент:', item); // Обработайте выбор элемента
    };
  
    return (
      <div>
        <button onClick={toggleSidebar}>
          {isOpen ? 'Закрыть Sidebar' : 'Открыть Sidebar'}
        </button>
        <Sidebar
          data={navigationData}
          activeItem={activeItem}
          isOpen={isOpen}
          onItemSelected={handleItemSelected}
        />
        {/* ... Ваш основной контент ... */}
      </div>
    );
  };

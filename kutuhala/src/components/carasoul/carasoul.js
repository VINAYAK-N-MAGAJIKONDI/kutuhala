// import React, { useState } from "react";
// import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
// import styles from './carasoul.css'; // Import the styles using CSS modules

// const MAX_VISIBILITY = 3;

// const Card = ({ title, content }) => (
//   <div className={styles.card}>
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

// const Carousel = ({ children }) => {
//   const [active, setActive] = useState(2);
//   const count = React.Children.count(children);

//   return (
//     <div className={styles.carousel}>
//       {active > 0 && <button className={`${styles.nav} ${styles.left}`} onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
//       {React.Children.map(children, (child, i) => (
//         <div
//           className={styles['card-container']}
//           style={{
//             '--active': i === active ? 1 : 0,
//             '--offset': (active - i) / 3,
//             '--direction': Math.sign(active - i),
//             '--abs-offset': Math.abs(active - i) / 3,
//             'pointer-events': active === i ? 'auto' : 'none',
//             'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
//             'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
//           }}
//         >
//           {child}
//         </div>
//       ))}
//       {active < count - 1 && <button className={`${styles.nav} ${styles.right}`} onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
//     </div>
//   );
// };

// export default Carousel;

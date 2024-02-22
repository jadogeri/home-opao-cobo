import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProjectRoutes from './src/routes/Routes';
import Index from './src/pages/Index'

export default function App() {
  return (
   <ProjectRoutes >
   <Index  />
   </ProjectRoutes>

  );
}

// import { useEffect, useState } from "react";
// import { useAnimation } from "react-animatable";
// import {motion} from 'framer-motion'

// const App = () => {
//   const [isVisible,setIsVisible] = useState(true);
//   // 1. Define your animation in WAAPI way
//   const animate = useAnimation(
//     [{ transform: "rotate(0deg)" }, { transform: "rotate(720deg)" }],
//     {
//       duration: 1000,
//       easing: "ease-in-out",
//     }
//   );

//   return (
//     <>
//     <button
//       // 2. You have to pass animate to element you want to control
//       ref={animate}
//       onClick={() => {
//         // 3. And play it!
//         animate.play();
//       }}
//     >
//       Click Me!
//     </button>
//     <motion.div animate={{ opacity: isVisible ? 1 : 0 }} 
//                 drag whileDrag={{color:'red'}}>
//      <h1>text</h1>
//       </motion.div>

// </>
//   );
// };


// export default App;
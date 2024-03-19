import { motion, useScroll } from 'framer-motion';

import Meeting from './components/Meeting/Meeting'

function App() {
  useScroll({
    target: '',
    offset: []
  })

  return (
    <>
      <Meeting />
    </>
  )
}

export default App

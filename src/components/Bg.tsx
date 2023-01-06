import React from 'react';
import styles from './Bg.module.css'

function Bg(children: React.ReactNode) {
  return (
    <div className={styles.card}> 
      {children}
    </div>
  )
}

export default Bg;

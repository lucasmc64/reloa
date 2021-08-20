import React, { useEffect } from 'react'

import styles from './Loading.module.css'

const Loading = ({ isLoading = false }) => {
  useEffect(() => {
    isLoading
      ? document.body.classList.add('block-scroll')
      : document.body.classList.remove('block-scroll')
  }, [isLoading])

  if (!isLoading) return null
  else
    return (
      <div className={styles.overlay}>
        <div className={styles.blocks}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
      </div>
    )
}

export default Loading

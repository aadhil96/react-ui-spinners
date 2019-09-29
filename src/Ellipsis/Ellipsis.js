import React from 'react'
import styles from './style.css'
const Ellipsis = props => (
  <>
    <style> ${`${styles}`}</style>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
)
export default Ellipsis

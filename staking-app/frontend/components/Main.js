import styles from "../styles/Home.module.css"

import React from 'react'
import Staking from "./Staking.js"
import StakingData from "./StakingData.js"
function Main() {
  return (
    <section className={styles.container}>
        <Staking />
        <StakingData/>
    </section>
  )
}

export default Main
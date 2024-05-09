import Card from '@/components/ui/dashboard/card/card';
import React from 'react';
import styles from '@/components/ui/dashboard/dasboard.module.css';
import RightBar from '@/components/ui/dashboard/rightbar/rightbar';
import Transactions from '@/components/ui/dashboard/transactions/transactions';
import Chart from '@/components/ui/dashboard/chart/chart';
function Dasboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}

export default Dasboard;

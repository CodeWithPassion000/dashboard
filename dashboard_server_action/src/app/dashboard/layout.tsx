import Navbar from '@/components/ui/dashboard/navbar/navbar';
import Sidebar from '@/components/ui/dashboard/sidebar/sidebar';
import React from 'react';
import styles from '../../components/ui/dashboard/dasboard.module.css';
import Footer from '@/components/ui/dashboard/footer/footer';
function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

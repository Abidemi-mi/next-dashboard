import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="40"
                  height="40"
                  className={styles.userImage}
                />{" "}
                Zayyad
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2026</td>
            <td>$3.200</td>
          </tr>
          {/* line 2 */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="40"
                  height="40"
                  className={styles.userImage}
                />{" "}
                Folarin
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>14.02.2026</td>
            <td>$3.200</td>
          </tr>
          {/* line 3 */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width="40"
                  height="40"
                  className={styles.userImage}
                />{" "}
                Ololade
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2026</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

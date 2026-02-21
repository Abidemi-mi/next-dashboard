import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Zayyad
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Zayyad" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Zayyad@yahoo.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" placeholder="+2348160178684" />
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            rows="10"
            placeholder="address"
          />
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected>
              Yes
            </option>
            <option value={false} selected>
              No
            </option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected>
              Yes
            </option>
            <option value={false} selected>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;

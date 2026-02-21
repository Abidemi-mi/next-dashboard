import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        iPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Zayyad" />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder="36" />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" placeholder="blue" />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" placeholder="84" />
          <label htmlFor="category">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen" selected>
              Kitchen
            </option>
            <option value="computers" selected>
              Computers
            </option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description" />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

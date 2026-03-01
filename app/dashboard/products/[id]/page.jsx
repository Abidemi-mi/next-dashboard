import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";

const SingleProductPage = async ({params}) => {
   const {id} = params;

   const product = await fetchProduct(id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product._id} />
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" placeholder={product.size} />
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

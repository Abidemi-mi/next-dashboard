import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          name="title"
          required
        />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="conputer">Conputer</option>
        </select>
        <input type="number" placeholder="Price" name="price"/>
        <input type="number" placeholder="Stock" name="stock"/>
        <input type="text" placeholder="Colour" name="colour"/>
        <input type="text" placeholder="Size" name="size"/>
        <textarea name="desc" id="desc" rows="16"  placeholder="Description">

        </textarea>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;

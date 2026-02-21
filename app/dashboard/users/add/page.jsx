import styles from "@/app/ui/dashboard/users/adduser/adduser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="number" placeholder="username" name="username" required/>
        <input type="email" placeholder="email" name="email" required/>
        <input type="password" placeholder="password" name="password" isAdmin/>
        <input type="phone" placeholder="phone" name="phone"/>
            <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isAdmin" id="isAdmin">
          <option value={true} selected>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea name="address" id="address" rows="16"  placeholder="Address">

        </textarea>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;

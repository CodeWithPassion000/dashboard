// import { updateProduct } from "@/app/lib/actions";
// import { fetchProduct } from "@/app/lib/data";
import styles from '@/components/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

interface SingleProductProps {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: SingleProductProps) => {
  const { id } = params;
  // const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Producr one
        {/* {product.title} */}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value="" />
          <label>Title</label>
          <input type="text" name="title" placeholder="Product one" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$10" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="20" />
          <label>Color</label>
          <input type="text" name="color" placeholder="color" />
          <label>Size</label>
          <textarea name="size" placeholder="size" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="This product is best fit f"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

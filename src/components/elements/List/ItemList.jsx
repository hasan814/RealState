import styles from "./ItemList.module.css";

const ItemList = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.length ? (
        <ul>
          {data.map((rule) => (
            <li key={uuidv4()}>{rule}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است .</p>
      )}
    </div>
  );
};

export default ItemList;

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه خرید و اجاره</h3>
        <p>
          سامانه خرید و اجاره املاک یک پلتفرم آنلاین است که به کاربران اجازه
          می‌دهد تا ملک‌های مختلف را برای خرید یا اجاره جستجو و مشاهده کنند. این
          سامانه‌ها معمولاً ویژگی‌ها و امکانات متنوعی دارند که فرآیند خرید،
          فروش، و اجاره املاک را ساده‌تر و سریع‌تر می‌کنند.
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
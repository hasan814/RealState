import styles from "./MyProfile.module.css";

const MyProfilePage = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است .</p>
      )}
    </div>
  );
};

export default MyProfilePage;

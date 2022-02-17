import styles from './demo.less';
import classnames from 'classnames'

export default function IndexPage() {

  return (
    <div className={styles['item-list']}>
        <div className={styles['item']}></div>
        <div className={styles['item']}></div>
        <div className={styles['item']}></div>
        <div className={styles['item']}></div>
        <div className={styles['item']}></div>
        <div className={styles['item']}></div>
        <div className={styles['item']}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
        <div className={classnames(styles['item'], styles['hide'])}></div>
    </div>
  );
}
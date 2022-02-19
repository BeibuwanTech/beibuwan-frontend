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
      <img src='/api/captcha'></img>
      {/* <embed src='/api/captcha' style={{ display: 'block', width: 160, height: 80, overflow: 'hidden' }}></embed> */}
    </div>
  );
}
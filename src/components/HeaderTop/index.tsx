import React from 'react';

import styles from './index.less';

const TopNav: React.FC = () => {
    return <div style={{ background: 'rgb(255, 245, 240)', color: 'rgb(106, 110, 125)' }}>
        <div className={styles['top-nav']}>
            <div className={styles['nav-left']}>
                Hi~，欢迎来到<a href="/index.html" style={{ color: 'rgb(255, 94, 6)' }}>科技服务网</a>！
            </div>
            <div className={styles['nav-right']}>
                <div className={styles['login-box']}>
                    <a href="/common/login.html">登录</a>
                    <a href="/common/reg.html">注册</a>
                </div>
                <div className={styles['official-account']}>
                    <span className={styles['show']}>关注科技服务网</span>
                    <span className={styles['avater']}>
                        <img src={require('../../assets/images/index/qrcode.jpg')} alt="" />
                        <span className={styles['avater-text']}>科技服务网</span>
                    </span>
                </div>
                <div className={styles['official-account']}>
                    <span className={styles['show']}>小程序</span>
                    <span className={styles['avater']}>
                        <img src={require('../../assets/images/index/qrcode.jpg')} alt="" />
                        <span className={styles['avater-text']}>科技服务网</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default TopNav
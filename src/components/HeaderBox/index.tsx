import React from 'react';

import styles from './index.less';

interface HeaderBoxProps { }

const HeaderBox: React.FC<HeaderBoxProps> = (props: HeaderBoxProps) => {
    return <div className={styles['header-box']}>
        <div className={styles['header']}>
            <div className={styles['header-logo']}>
                <a><img src={require('@/assets/images/login/logo.png')} alt="" /></a>
            </div>
            <div className={styles['menu-box']}>
                <ul>
                    <li><a href="/index.html" className={styles['active']}>首页</a></li>
                    <li><a href="/polist.html" className="">政策资讯</a></li>
                    <li><a href="/technologyMarket/index.html" className="">技术转移</a></li>
                    <li><a href="/mall/index.html" className="">科技淘宝</a></li>
                    <li><a href="/alist.html" className="">活动中心</a></li>
                    <li><a href="http://www.castss.com/" className="">科技智库</a></li>
                    <li><a href="/platform.html" className="">平台动态</a></li>
                    <li><a href="/about.html" className="">关于我们</a></li>
                </ul>
            </div>
        </div>
    </div>
}

export default HeaderBox
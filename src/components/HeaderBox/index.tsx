import React from 'react';
import { history, useLocation } from 'umi';
import classNames from 'classnames';

import styles from './index.less';

interface HeaderBoxProps {
    menuList?: {
        url: string;
        name: string
    }[]
}

const HeaderBox: React.FC<HeaderBoxProps> = (props: HeaderBoxProps) => {
    const location = useLocation()
    const { menuList = [
        { url: '/', name: '首页' },
        { url: '/a', name: '政策资讯' },
        { url: '/technology/market', name: '技术转移' },
        { url: '/b', name: '科技淘宝' },
        { url: '/c', name: '活动中心' },
        { url: '/d', name: '科技智库' },
        { url: '/e', name: '平台动态' },
        { url: '/f', name: '关于我们' },
    ] } = props

    const activeClassName = (url: string) => {
        return classNames({ [styles['active']]: location.pathname === url })
    }

    return <div className={styles['header-box']}>
        <div className={styles['header']}>
            <div className={styles['header-logo']}>
                <a><img src={require('@/assets/images/login/logo.png')} alt="" /></a>
            </div>
            <div className={styles['menu-box']}>
                <ul>
                    {menuList.map((item, index) => {
                        return <li key={index}><a onClick={() => { history.push(`${item.url}`) }} className={activeClassName(item.url)}>{item.name}</a></li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}

export default HeaderBox
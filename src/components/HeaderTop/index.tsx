import React from 'react';
import { history, useModel } from 'umi';

import styles from './index.less';

interface HeaderTopProps {
    status?: 'in' | 'out'
    user?: {
        username: string,
        phone: string
    }
}

const TopNav: React.FC<HeaderTopProps> = (props: HeaderTopProps) => {
    const { user, signin, signout } = useModel('useAuthModel', model => ({ user: model.user, signin: model.signin, signout: model.signout }));
    return <div style={{ background: 'rgb(255, 245, 240)', color: 'rgb(106, 110, 125)' }}>
        <div className={styles['top-nav']}>
            <div className={styles['nav-left']}>
                Hi~，欢迎来到<a href="/index.html" style={{ color: 'rgb(255, 94, 6)' }}>科技服务网</a>！
            </div>
            <div className={styles['nav-right']}>
                {user ?
                    <div className={styles['user-box']}>
                        <div className={styles['user']}>
                            <span>{user.phone}</span>
                            <a onClick={() => {
                                signout()
                            }}>[退出]</a>
                        </div>
                        <a onClick={() => { history.push('/login') }}>消息</a>
                        <a onClick={() => { history.push('/register') }}>收藏</a>
                        <a onClick={() => { history.push('/login') }}>用户中心</a>
                        <a onClick={() => { history.push('/register') }}>服务商入驻</a>
                    </div>
                    :
                    <div className={styles['login-box']}>
                        <a onClick={() => { history.push('/login') }}>登录</a>
                        <a onClick={() => { history.push('/register') }}>注册</a>
                    </div>
                }
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
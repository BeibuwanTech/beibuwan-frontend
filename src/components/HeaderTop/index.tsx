import React from 'react';
import classNames from 'classnames';
import { history, useModel } from 'umi';

import styles from './index.less';

interface HeaderTopProps {
    theme?: 'orange' | 'blue'
    status?: 'in' | 'out'
    user?: {
        username: string,
        phone: string
    }
}

const HeaderTop: React.FC<HeaderTopProps> = (props: HeaderTopProps) => {
    const { theme = 'orange' } = props
    const { user, signin, signout } = useModel('useAuthModel', model => ({ user: model.user, signin: model.signin, signout: model.signout }));

    const cls = classNames(styles['top-nav-wrapper'], {
        [styles['orange']]: theme === 'orange',
        [styles['blue']]: theme === 'blue'
    })

    return <div className={cls}>
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

export default HeaderTop
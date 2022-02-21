import { useState } from 'react';
import { history, useModel } from 'umi';
import classnames from 'classnames';
import Footer from '@/components/Footer'

import styles from './index.less'

export default function LoginPage(props: any) {
    const { user, signin, signout } = useModel('useAuthModel', (model) => ({
        user: model.user,
        signin: model.signin,
        signout: model.signout,
    }));
    const [pageType, setPageType] = useState<'login' | 'register'>(
        props.match.path === '/register' ? 'register' : 'login',
    );

    return (
        <div className={styles['register']}>
            <div className={styles['login-header']}>
                <div className={styles['logo-wrapper']}>
                    <div className="logo">
                        <a href="/index.html">
                            <img src={require('@/assets/images/login/logo.png')} alt="" />
                        </a>
                    </div>
                    <div className={styles['title']}>
                        {pageType === 'login' ? '登录' : '注册'}
                    </div>
                </div>
                <div className={styles['tips']}>
                    依据《网络安全法》，为保障您相关功能的正常使用，会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！
                </div>
            </div>
            <div className={styles['main-wrapper']}>
                <div className={styles['login-center']}>
                    <div className={styles['login-box']}>
                        {pageType === 'register' ? (
                            <>
                                <ul className={styles['tabs']}>
                                    <li className={styles['active']}>手机注册</li>
                                </ul>
                                <form id="reg-form" className={styles['login-form']}>
                                    <div
                                        className={classnames(
                                            styles['form-item'],
                                            styles['active'],
                                        )}
                                    >
                                        <div
                                            className={classnames(styles['input'], styles['phone'])}
                                        >
                                            <input
                                                name="phone"
                                                type="text"
                                                placeholder="请输入常用手机号"
                                            />
                                            <span className={styles['form-error']}></span>
                                        </div>
                                        <div className="clear"></div>
                                        <div
                                            className={classnames(
                                                styles['input'],
                                                styles['password'],
                                            )}
                                        >
                                            <input
                                                maxLength={16}
                                                name="password"
                                                type="password"
                                                placeholder="请输入6-16位密码"
                                            />
                                            <span className={styles['form-error']}></span>
                                        </div>
                                    </div>
                                    <div id="msg"></div>
                                    <button
                                        className={classnames(styles['btn'], styles['reg'])}
                                        onClick={(e) => {
                                            history.push('/');
                                            e.preventDefault();
                                        }}
                                    >
                                        同意服务协议并注册
                                    </button>
                                    <div className={styles['links']}>
                                        已有账号？
                                        <a
                                            onClick={() => {
                                                setPageType('login');
                                            }}
                                            className={styles['link-text']}
                                        >
                                            去登录
                                        </a>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <>
                                <ul className={styles['tabs']}>
                                    <li className={styles['active']}>账号密码登录</li>
                                    {/* <li>手机动态登录</li> */}
                                    <li className={styles['qr']}>
                                        <span>扫码登录</span>
                                    </li>
                                </ul>
                                <form id="login-form" className={styles['login-form']}>
                                    <div
                                        className={classnames(
                                            styles['form-item'],
                                            styles['active'],
                                        )}
                                    >
                                        <div
                                            className={classnames(styles['input'], styles['phone'])}
                                        >
                                            <input
                                                name="phone"
                                                type="text"
                                                placeholder="请输入常用手机号"
                                            />
                                            <span className={styles['form-error']}></span>
                                        </div>
                                        <div className="clear"></div>
                                        <div
                                            className={classnames(
                                                styles['input'],
                                                styles['password'],
                                            )}
                                        >
                                            <input
                                                maxLength={16}
                                                name="password"
                                                type="password"
                                                placeholder="请输入6-16位密码"
                                            />
                                            <span className={styles['form-error']}></span>
                                        </div>
                                    </div>
                                    <div id="msg"></div>
                                    <button
                                        className={classnames(styles['btn'], styles['login'])}
                                        onClick={(e) => {
                                            signin('LuJunxing', '186089015221');
                                            history.push('/');
                                            e.preventDefault();
                                        }}
                                    >
                                        立即登录
                                    </button>
                                    <div className={styles['links']}>
                                        没有账号？
                                        <a
                                            onClick={() => {
                                                setPageType('register');
                                            }}
                                            className={styles['link-text']}
                                        >
                                            注册新账号
                                        </a>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

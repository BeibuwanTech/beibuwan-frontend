import classnames from 'classnames';
import Footer from '@/components/Footer'

import styles from './register.less'

export default function RegPage() {
    return <div className={styles['register']}>
        <div className={styles['login-header']}>
            <div className={styles['logo-wrapper']}>
                <div className="logo">
                    <a href="/index.html">
                        {/* <img src="/style/images/logos/blue-h66.png" alt="" /> */}
                    </a>
                </div>
                <div className={styles['title']}>注册</div>
            </div>
            <div className={styles['tips']}>
                依据《网络安全法》，为保障您相关功能的正常使用，会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！
            </div>
        </div>
        <div className={styles['main-wrapper']}>
            <div className={styles['login-center']}>
                <div className={styles['login-box']}>
                    <ul className={styles['tabs']}>
                        <li className={styles['active']}>手机注册</li>
                    </ul>
                    <form id="reg-form" className={styles['login-form']}>
                        <div className={classnames(styles['form-item'], styles['active'])}>
                            <div className={classnames(styles['input'], styles['phone'])}>
                                <input name="phone" type="text" placeholder="请输入常用手机号" />
                                <span className={styles['form-error']}></span>
                            </div>
                            <div className="clear"></div>
                            <div className={classnames(styles['input'], styles['vercode'])}>
                                <input name="validateContent" placeholder="请输入验证码" maxLength={16} />
                            </div>
                            <button className={styles['sendcode']}>发送验证码</button>
                            <div className="clear"></div>
                            <div className={classnames(styles['input'], styles['password'])}>
                                <input maxLength={16} name="password" type="password" placeholder="请输入6-16位密码" />
                                <span className={styles['form-error']}></span>
                            </div>
                        </div>
                        <div id="msg"></div>
                        <button className={classnames(styles['btn'], styles['reg'])}>同意服务协议并注册</button>
                        <div className={styles['agree']}>
                            <input type="checkbox" name="protocolReadFlag" />
                            <label>我已阅读</label>
                            <span className={styles['agreetype']}>注册协议</span>
                            <span className={styles['agreetype']}>隐私保护协议</span>
                        </div>
                        <div className={styles['links']}>已有账号？<a href="/common/login.html" className={styles['reg']}>登录</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
}
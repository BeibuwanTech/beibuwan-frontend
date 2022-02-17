import './register.less';

export default function RegisterPage() {
    return <div className='login_bg'>
        <div className='login_header'>
            <div className="login_header">
                <div className="mdiv">
                    <div className="logo">
                        <a href="/index.html">
                            <img src="/style/images/logos/blue-h66.png" alt="" />
                        </a>
                    </div>
                    <div className="l_title">注册</div>
                </div>
                <div className="tips">
                    依据《网络安全法》，为保障您相关功能的正常使用，会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！
                </div>
            </div>
        </div>
        <div className='login_center'>
            <div className="login_box">
                <ul className="tabs">
                    <li className="active">手机注册</li>
                </ul>
                <form id="reg_form" className="login_form">
                    <div className="form_item active">
                        <div className="input phone">
                            <input name="phone" type="text" placeholder="请输入常用手机号" />
                            <span className="form_error"></span>
                        </div>
                        <div className="clear"></div>
                        <div className="input vercode">
                            <input name="validateContent" placeholder="请输入验证码" maxLength={16} />
                        </div>
                        <button className="sendcode">发送验证码</button>
                        <div className="clear"></div>
                        <div className="input password">
                            <input maxLength={16} name="password" type="password" placeholder="请输入6-16位密码" />
                            <span className="form_error"></span>
                        </div>
                    </div>
                    <div id="msg"></div>
                    <button className="btn reg">同意服务协议并注册</button>
                    <div className="agree">
                        <input type="checkbox" name="protocolReadFlag" />
                        <label>我已阅读</label>
                        <span className="agreetype">注册协议</span>
                        <span className="agreetype">隐私保护协议</span>
                    </div>
                    <div className="links">已有账号？<a href="/common/login.html" className="reg">登录</a>
                    </div>
                </form>
            </div>
        </div>
        <div className='login_footer'>
            <div className="footer">
                <div className="main_copyright"> Copyright 2021 - 2022 科技服务网 版权所有
                    <a href="http://www.beian.miit.gov.cn/" target="_blank">琼ICP备09050127号-36</a>
                </div>
            </div>
        </div>
    </div>
}
import React from 'react';
import './index.less';

interface HeaderBoxProps {
    A?: string
}

const HeaderBox: React.FC<HeaderBoxProps> = (props: HeaderBoxProps) => {
    return <div className="header-box">
        <div className="header">
            {/* <div className="header-logo"><a><img src="/style/images/logos/bsublogo.png" alt="" /></a></div> */}
            <div className="menu-box">
                <ul>
                    <li><a href="/index.html" className="active">首页</a></li>
                    <li><a href="/polist.html" className="">政策资讯</a></li>
                    <li><a href="/technologyMarket/index.html" className="">技术转移</a></li>
                    <li><a href="/mall/index.html" className="">易智商城</a></li>
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
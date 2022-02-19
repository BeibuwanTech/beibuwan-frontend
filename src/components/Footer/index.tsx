import React from 'react';

import styles from './index.less';

export interface FooterLink {
    url: string;
    img: string;
    name: string;
}

interface FooterProps {
    footerLinkList?: FooterLink[];
}

const INIT_FOOTER_LINK_LIST = [];

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return <div className={styles['footer-box']}>
        <div className={styles['footer-link']}>
            <div className={styles['link-title']}>友情链接：</div>
            <div className={styles['link-desc']}>
                <a href="http://kjj.cq.gov.cn" target="_blank">
                    海口市科学技术局
                </a>
                <a href="http://www.liangjiang.gov.cn" target="_blank">
                    海口市两江新区管委会
                </a>
                <a href="http://dsjj.cq.gov.cn" target="_blank">
                    海口市大数据应用发展管理局
                </a>
                <a href="http://www.cqast.cn" target="_blank">
                    海口市科学技术协会
                </a>
                <a href="https://www.cqast.org.cn/Index.shtml" target="_blank">
                    海口市科学技术研究院
                </a>
                <a href="http://www.cqsczt.com/scsite/index/index.html" target="_blank">
                    海口孵化器协会
                </a>
                <a href="http://www.cqhitech.com/" target="_blank">
                    海口创新方法网
                </a>
            </div>
        </div>
        <div style={{ width: '100%', borderTop: '1px solid #646b83', padding: 30 }}>
            <div className={styles['internal-link']}>
                <span>关于我们</span>
                <span>隐私政策</span>
                <span>平台协议</span>
                <span>网站地图</span>
            </div>
            <div className={styles['copyright']}>
                Copyright © 2022 科技服务网 版权所有
                <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020022552号-1</a>
            </div>
        </div>
    </div>
};

export default Footer;

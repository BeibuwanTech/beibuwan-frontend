import React from 'react';

import styles from './index.less';

export interface Link {
    url: string;
    img: string;
    name: string;
}

interface FriendLinkProps {
    linkList?: Link[]
}

const INIT_LINK_LIST = [
    {
        url: 'http://kjj.cq.gov.cn/',
        img: 'https://www.kj01.cn/style/images/index/friend_link_1.png',
        name: '重庆市科学技术局'
    },
    {
        url: 'https://www.kj01.cn/style/images/index/friend_link_11(1).png',
        img: 'https://www.kj01.cn/style/images/index/friend_link_11(1).png',
        name: '三创平台'
    },
    {
        url: 'https://www.kj01.cn/style/images/index/friend_link_8-1.png',
        img: 'https://www.kj01.cn/style/images/index/friend_link_8-1.png',
        name: '成渝综合科技服务平台'
    }
]

const FriendLink: React.FC<FriendLinkProps> = (
    props: FriendLinkProps,
) => {
    const { linkList = INIT_LINK_LIST } = props
    return <>
        <div style={{ background: '#ffffff' }}>
            <div className={styles['friend-link-list']}>
                {linkList.map((item, index) => {
                    return <div key={index} className={styles['friend-link-item']}>
                        <a href={item.url} target="_blank">
                            <img src={item.img} alt={item.name} />
                        </a>

                    </div>
                })}
            </div>
        </div>
        <div style={{ background: '#333c56' }}>
            <div className={styles['link-list']}>
                <div className={styles['link-item']}>
                    <div className={styles['img-box']}><img src={require("@/assets/images/index/bottom_1.png")} alt="" /></div>
                    <div className={styles['text-box']}>
                        <div className={styles['title']}>国际技术转移中心</div>
                        <div className={styles['title-desc']}>全球合作网络，推动成果转化</div>
                    </div>
                </div>
                <div className={styles['link-item']}>
                    <div className={styles['img-box']}><img src={require("@/assets/images/index/bottom_2.png")} alt="" /></div>
                    <div className={styles['text-box']}>
                        <div className={styles['title']}>国际科技合作基地</div>
                        <div className={styles['title-desc']}>汇聚全球科技资源，促进科技创新</div>
                    </div>
                </div>
                <div className={styles['link-item']}>
                    <div className={styles['img-box']}><img src={require("@/assets/images/index/bottom_3.png")} alt="" /></div>
                    <div className={styles['text-box']}>
                        <div className={styles['title']}>国家技术转移移示范机构</div>
                        <div className={styles['title-desc']}>集成创新，构建技术转移全流程服务体系</div>
                    </div>
                </div>
                <div className={styles['link-item']}>
                    <div className={styles['img-box']}><img src={require("@/assets/images/index/bottom_4.png")} alt="" /></div>
                    <div className={styles['text-box']}>
                        <div className={styles['title']}>国家专利技术展示交易中心</div>
                        <div className={styles['title-desc']}>依托平台优势，服务专利交易</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FriendLink;

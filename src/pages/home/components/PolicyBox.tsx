import { Carousel } from 'antd';
import React from 'react';
import classNames from 'classnames';

import styles from './index.less';

export interface Policy { }

interface PolicyBoxProps {
    carouselList?: string[];
    studioList?: string[];
}

const PolicyBox: React.FC<PolicyBoxProps> = (props: PolicyBoxProps) => {
    return (
        <div className={styles['policy-box']}>
            <div className={styles['policy-left']}>
                <div className={styles['policy-title']}>
                    政策直播间
                    <a href="/polist.html">更多</a>
                </div>
                <Carousel
                    className={styles['carousel-list']}
                    dotPosition="right"
                    autoplay={true}
                >
                    <div className={styles['carousel-item']}>
                        <img
                            src={require('@/assets/images/index/20211118153106333_CNOvdkUG.jpg')}
                        />
                        <div className={styles['studio-info']}>
                            <div className={styles['studio-info-left']}>
                                <div className={styles['info-img']}>直播</div>
                                <div className={styles['info-box']}>
                                    <div
                                        title="研发平台相关政策解读"
                                        className={styles['infoname']}
                                    >
                                        研发平台相关政策解读
                                    </div>
                                    <div className={styles['infodate']}>
                                        活动时间：2021.11.24 10:30 周三
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <img
                            src={require('@/assets/images/index/20211118153106333_CNOvdkUG.jpg')}
                        />
                        <div className={styles['studio-info']}>
                            <div className={styles['studio-info-left']}>
                                <div className={styles['info-img']}>直播</div>
                                <div className={styles['info-box']}>
                                    <div
                                        title="研发平台相关政策解读"
                                        className={styles['infoname']}
                                    >
                                        研发平台相关政策解读
                                    </div>
                                    <div className={styles['infodate']}>
                                        活动时间：2021.11.24 10:30 周三
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <div className={styles['studio-list']}>
                    <a
                        href="/livedetail.html?id=427834983018635264"
                        title="科技创新资助政策与体系线上培训"
                    >
                        <span>回放</span>科技创新资助政策与体系线上培训
                    </a>
                    <a
                        href="/livedetail.html?id=468438672082968576"
                        title="研发费用加计扣除暨科技创新政策培训会"
                    >
                        <span>回放</span>研发费用加计扣除暨科技创新政策培训会
                    </a>
                    <a
                        href="/livedetail.html?id=425334787902775296"
                        title="研发准备金备案申报"
                    >
                        <span>回放</span>研发准备金备案申报
                    </a>
                    <a
                        href="/livedetail.html?id=425333300384473088"
                        title="企业研究开发费用税前加计扣除"
                    >
                        <span>回放</span>企业研究开发费用税前加计扣除
                    </a>
                    <a
                        href="/livedetail.html?id=425333300384473088"
                        title="2021年度海口市技术转移示范机构申报"
                    >
                        <span>回放</span>2021年度海口市技术转移示范机构申报
                    </a>
                </div>
            </div>
            <div className={styles['policy-right']}>
                <div className={styles['policy-title']}>
                    政策惠
                    <a href="/polist.html">更多</a>
                </div>
                <div className={styles['policy-list']}>
                    <a
                        title="关于开展海口市制造业设计培训基地创建工作的通知"
                        href="/podetail.html?id=471355843347980288"
                    >
                        <span>关于开展海口市制造业设计培训基地创建工作的通知</span>
                    </a>
                    <a
                        title="2021年度海口市技术转移示范机构申报"
                        href="/podetail.html?id=463735293494665216"
                    >
                        <span>2021年度海口市技术转移示范机构申报</span>
                    </a>
                    <a
                        title="科技部火炬中心关于开展2021年度国家级科技企业孵化器认定工作的通知"
                        href="/podetail.html?id=445186922240778240"
                    >
                        <span>
                            科技部火炬中心关于开展2021年度国家级科技企业孵化器认定工作的通知
                        </span>
                    </a>
                    <a
                        title="2021年度智能制造试点示范申报"
                        href="/podetail.html?id=445624275065348096"
                    >
                        <span>2021年度智能制造试点示范申报</span>
                    </a>
                    <a
                        title="关于组织开展2021年工业互联网试点示范项目申报工作的通知"
                        href="/podetail.html?id=449597542608379904"
                    >
                        <span>关于组织开展2021年工业互联网试点示范项目申报工作的通知</span>
                    </a>
                    <a
                        title="海口市经信委开展2021年企业“上云”专项行动"
                        href="/podetail.html?id=449601309915455488"
                    >
                        <span>海口市经信委开展2021年企业“上云”专项行动</span>
                    </a>
                    <a
                        title="海口市知识产权局公开征集海口市知识产权综合政策措施研究项目承担单位"
                        href="/podetail.html?id=442008245252366336"
                    >
                        <span>
                            海口市知识产权局公开征集海口市知识产权综合政策措施研究项目承担单位
                        </span>
                    </a>
                    <a
                        title="海口市知识产权局公开征集海口市知识产权综合政策措施研究项目承担单位"
                        href="/podetail.html?id=442008242148581376"
                    >
                        <span>
                            海口市知识产权局公开征集海口市知识产权综合政策措施研究项目承担单位
                        </span>
                    </a>
                    <a
                        title="开展2021年市级重点培育楼宇产业园申报工作"
                        href="/podetail.html?id=449605866699595776"
                    >
                        <span>开展2021年市级重点培育楼宇产业园申报工作</span>
                    </a>
                    <a
                        title="2021年市级楼宇产业园申报工作相关要求"
                        href="/podetail.html?id=449604939095711744"
                    >
                        <span>2021年市级楼宇产业园申报工作相关要求</span>
                    </a>
                    <a
                        title="每个项目补助研发经费20万元！2021年第一批科技型企业技术创新与应用发展专项项目征集开始了"
                        href="/podetail.html?id=435485747862020096"
                    >
                        <span>
                            每个项目补助研发经费20万元！2021年第一批科技型企业技术创新与应用发展专项项目征集开始了
                        </span>
                    </a>
                    <a
                        title="2022年起知识产权运营中心可申请运营绩效补贴"
                        href="/podetail.html?id=445267214825660416"
                    >
                        <span>2022年起知识产权运营中心可申请运营绩效补贴</span>
                    </a>
                    <a
                        title="产业或区域知识产权运营中心，市级给予最高不超过300万元建设经费引导资助"
                        href="/podetail.html?id=445259980808888320"
                    >
                        <span>
                            产业或区域知识产权运营中心，市级给予最高不超过300万元建设经费引导资助
                        </span>
                    </a>
                    <a
                        title="市级综合性知识产权运营中心，市级给予最高500万元建设经费引导资助"
                        href="/podetail.html?id=445258697809043456"
                    >
                        <span>
                            市级综合性知识产权运营中心，市级给予最高500万元建设经费引导资助
                        </span>
                    </a>
                    <a
                        title="人工智能试验区第三批重点研发项目申报"
                        href="/podetail.html?id=437566893668147200"
                    >
                        <span>人工智能试验区第三批重点研发项目申报</span>
                    </a>
                    <a
                        title="2021年大健康领域重点研发项目申报开始了"
                        href="/podetail.html?id=435495524507820032"
                    >
                        <span>2021年大健康领域重点研发项目申报开始了</span>
                    </a>
                </div>
                <div className={styles['policy-quick']}>
                    <a
                        href="/common/login.html"
                        className={classNames(styles['item'], styles['item1'])}
                    >
                        <div>
                            政策速递
                            <div className={styles['set']}>第一时间获取政策动态</div>
                        </div>
                    </a>
                    <a
                        href="/common/login.html"
                        className={classNames(styles['item'], styles['item2'])}
                    >
                        <div>
                            政策智配
                            <div className={styles['set']}>依托大数据，智能匹配政策</div>
                        </div>
                    </a>
                    <a
                        href="/common/login.html"
                        className={classNames(styles['item'], styles['item3'])}
                    >
                        <div>
                            政策答人
                            <div className={styles['set']}>你问我答，在线一对一</div>
                        </div>
                    </a>
                    <a
                        href="/common/login.html"
                        className={classNames(styles['item'], styles['item4'])}
                    >
                        <div>
                            申报助手
                            <div className={styles['set']}>手把手教你申报项目</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PolicyBox;

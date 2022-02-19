import React from 'react';
import classnames from 'classnames'
import { BarsOutlined } from '@ant-design/icons';

import styles from './index.less';

export interface Technology {
  id: string;
  title: string;
  cooperationModeDisplay: string;
  projectIndustryType: { name: string }[];
  tags: { name: string }[];
  projectImgPath: string;
  // [key: string]: any;
}

interface TechnologyBoxProps {
    technologyList: Technology[];
    requirementList: Technology[];
}

const TechnologyBox: React.FC<TechnologyBoxProps> = (
    props: TechnologyBoxProps,
) => {
    const { technologyList = [], requirementList = [] } = props;
    return (
        <div className={styles['technology-box']}>
            <div className={styles['technology-title-wrapper']}>
                <div className={styles['technology-title']}>
                    <div className={styles['policy-title']}>
                        技术成果汇
                        <BarsOutlined className={styles['icon']} />
                    </div>
                    <div className={styles['release']}>
                        <a>发布成果+</a>
                    </div>
                </div>
            </div>
            <div className={styles['technology-list']}>
                {technologyList.map((technology) => {
                    return (
                        <a
                            key={technology.id}
                            href="/technologyMarket/tech_achievements_details.html?id=1466231971621093378"
                        >
                            <div className={styles['technology-avatar']}>
                                <img
                                    src={`https://fs.kj01.cn//resource/${technology.projectImgPath}`}
                                    alt=""
                                />
                            </div>
                            <div className={styles['technology-name']}>{technology.title}</div>
                            <div className={styles['technology-type']}>
                                <div className={styles['over']}>
                                    所属领域：
                                    {technology.projectIndustryType.map((item, index) => {
                                        return <span key={index}>{item.name}</span>;
                                    })}
                                </div>
                                <div className='clear'>
                                    转让方式：{technology.cooperationModeDisplay}
                                </div>
                                <div className={styles['price']}>
                                    <span className={styles['price-unity']}>会员价</span>
                                    <span className={styles['price-red']}>面议</span>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
            <div className={styles['technology-title-wrapper']}>
                <div className={styles['technology-title']}>
                    <div className={styles['policy-title']}>
                        技术需求汇
                        <BarsOutlined className={styles['icon']} />
                    </div>
                    <div className={styles['release']}>
                        <a>发布需求+</a>
                    </div>
                </div>
            </div>
            <div className={styles['technology-list']}>
                {requirementList.map((requirement) => {
                    return (
                        <a
                            key={requirement.id}
                            href="/technologyMarket/tech_achievements_details.html?id=1466231971621093378"
                        >
                            <div className={styles['technology-name']}>{requirement.title}</div>
                            <div className={styles['technology-type']}>
                                <div className={styles['over']}>
                                    所属领域：
                                    {requirement.projectIndustryType.map((item, index) => {
                                        return <span key={index}>{item.name}</span>;
                                    })}
                                </div>
                                <div className='clear'>
                                    转让方式：{requirement.cooperationModeDisplay}
                                </div>
                                <div className={classnames('clear', styles['tag'])}>合作研发</div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default TechnologyBox;

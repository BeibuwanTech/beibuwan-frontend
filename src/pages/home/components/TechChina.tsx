import React from 'react';
import { ApiOutlined, CustomerServiceOutlined, DollarOutlined, ExperimentOutlined, FileProtectOutlined, TeamOutlined } from '@ant-design/icons';

import styles from './index.less';

const TechChina: React.FC = () => {
    return <div style={{ background: '#ffffff', paddingTop: 40 }}>
        <div className={styles['tech-china']}>
            <div className={styles['nav-box']}>
                <div className={styles['title']}>科创中国</div>
                <div className={styles['title-desc']}>创新资源共享平台</div>
            </div>
            <div className={styles['btn-box']}>
                <a href='https://www.qiyekexie.com/portal/zkx/6/techServiceList.action' target="_blank">
                    <div className={styles['btn-item']}>
                        <CustomerServiceOutlined className={styles['icon']} />
                        <div className={styles['btn-desc']}>找服务</div>
                    </div>
                </a>
                <a href='https://www.qiyekexie.com/portal/zkx/6/equipment/instrumentList.action' target="_blank">
                    <div className={styles['btn-item']}>
                        <ExperimentOutlined className={styles['icon']} />
                        <div className={styles['btn-desc']}>找设备</div>
                    </div>
                </a>
                <a href='https://www.qiyekexie.com/portal/zkx/6/expert/expertList.action' target="_blank">
                    <div className={styles['btn-item']}>
                        <TeamOutlined className={styles['icon']} />
                        <div className={styles['btn-desc']}>找专家</div>
                    </div>
                </a>
                <a href='https://www.qiyekexie.com/portal/zkx/6/achieveList.action' target="_blank">
                    <div className={styles['btn-item']}>
                        <ApiOutlined className={styles['icon']} />
                        <div className={styles['btn-desc']}>找技术</div>
                    </div>
                </a>
                <a href='https://www.qiyekexie.com/portal/zkx/6/institutionList.action?type=1' target="_blank">
                    <div className={styles['btn-item']}>
                        <DollarOutlined className={styles['icon']} />
                        <div className={styles['btn-desc']}>找资金</div>
                    </div>
                </a>
                <a href='https://www.qiyekexie.com/portal/zkx/6/policy/policyList.action' target="_blank">
                    <div className={styles['btn-item']}>
                        <FileProtectOutlined className={styles['icon']} />
                        <div className={styles['btn-desc']}>找政策</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
}


export default TechChina;
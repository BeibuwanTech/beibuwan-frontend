import React from 'react';
import classnames from 'classnames';

import styles from './index.less';

export interface Activity {
    id: string;
    posterUrl: string;
    activeStartTime: string;
    activeEndTime: string;
    weekday: string;
    sponsor: string;
    pageViews: number;
    statusDisplay: string;
    activeTypeDisplay: {
        name: string
    }[]
    // [key: string]: any;
}

interface ActivityBoxProps {
    activityList: Activity[];
}

const ActivityBox: React.FC<ActivityBoxProps> = (props: ActivityBoxProps) => {
    const { activityList = [] } = props

    return <div className={styles['activity-box']}>
        <div className={styles['activity-list']}>
            {activityList.map((activity) => {
                return <a href={activity.posterUrl} className={styles['activity']} key={activity.id}>
                    <div className={styles['activity-img']}>
                        <img src={activity.posterUrl} alt="" />
                        <div className={styles['activity-img-item']}>{activity.statusDisplay}</div>
                    </div>
                    <div className={styles['activity-info']}>
                        <div className={classnames(styles['activity-type'],  styles['activity-date'])}>
                            <span className="iconfont icon-lishijilu"></span>
                            <span>{`${activity.activeStartTime} - ${activity.activeEndTime} ${activity.weekday}`}</span>
                        </div>
                        <div className={styles['activity-type']}>
                            <span className="iconfont icon-neirongtuisong"></span>
                            <span>{activity.sponsor}</span></div>
                        <div className={styles['activity-count']}>
                            {activity.activeTypeDisplay.map((typeDisplay, index) => {
                                return <div key={index} className={styles['count-type']}>
                                    {typeDisplay.name}
                                </div>
                            })}
                            <div className={styles['count-num']}>
                                <span className={styles['people']}>{activity.pageViews}人浏览</span>
                            </div>
                        </div>
                    </div>
                </a>
            })}
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
            <a className={classnames(styles['activity'], styles['hide'])}><div className={styles['activity-img']}></div></a>
        </div>
    </div>
}

export default ActivityBox;
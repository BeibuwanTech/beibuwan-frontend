import React from 'react';
import styles from './index.less';

interface PlateBoxProps {
    url?: string;
    title?: string;
    subTitle?: string;
}

const PlateBox: React.FC<PlateBoxProps> = (props: PlateBoxProps) => {
    const { url = '/home', title, subTitle } = props
    return <div className={styles['plate-title']}>
        <a href={url} target='_blank'>
            <h2>{title}</h2>
        </a>
        <p>{subTitle}</p>
    </div>
}

export default PlateBox;
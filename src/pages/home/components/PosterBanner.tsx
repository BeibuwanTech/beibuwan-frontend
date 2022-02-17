import { Carousel } from 'antd';
import React from 'react';
import classnames from 'classnames';

import styles from './index.less';

interface PosterBannerProps {
    carouselList?: string[];
    studioList?: string[];
}

const PosterBanner: React.FC<PosterBannerProps> = (props: PosterBannerProps) => {
    return <div className={styles['poster-banner']}>
        <Carousel
            className={styles['carousel-list']}
            autoplay={true}
        >
            <div className={styles['carousel-item']}>
                <img src={require('@/assets/images/index/banner.png')}></img>
            </div>
        </Carousel>
    </div>
}

export default PosterBanner;
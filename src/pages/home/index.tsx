import { useRequest } from 'umi';
import TopNav from '@/components/HeaderTop';
import HeaderBox from '@/components/HeaderBox'
import Footer from '@/components/Footer';
import PlateBox from './components/PlateBox';
import ActivityBox from './components/ActivityBox';
import FriendLink from './components/FriendLink';
import TechChina from './components/TechChina';
import PolicyBox from './components/PolicyBox';
import TechnologyBox from './components/TechnologyBox';
import PosterBanner from './components/PosterBanner';

import styles from './index.less';

export default function HomePage() {
  const { data: activityList, loading: activityListLoading } = useRequest('/api/activity')
  const { data: technologyList, loading: technologyListLoading } = useRequest('/api/technology')

  return (
    <div className={styles['home']}>
      <TopNav></TopNav>
      <HeaderBox></HeaderBox>
      {/* <HeaderNav></HeaderNav> */}
      <PosterBanner></PosterBanner>
      <div className={styles['plate-box-wrapper']}>
        <PlateBox title='政策资讯' subTitle='政策动态速递，科技热点跟进'></PlateBox>
      </div>
      <PolicyBox></PolicyBox>
      <div className={styles['plate-box-wrapper']}>
        <PlateBox title='活动中心' subTitle='互联网+科技创新活动'></PlateBox>
      </div>
      <ActivityBox activityList={activityListLoading ? [] : activityList}></ActivityBox>
      <div className={styles['plate-box-wrapper']}>
        <PlateBox title='技术转移' subTitle='助力企业创新能力提升与变现'></PlateBox>
      </div>
      <TechnologyBox technologyList={technologyListLoading ? [] : technologyList} requirementList={technologyListLoading ? [] : technologyList}></TechnologyBox>
      <TechChina></TechChina>
      <div className={styles['plate-box-wrapper']}>
        <PlateBox title='友情链接' subTitle='汇聚科技资源，协同创造价值'></PlateBox>
      </div>
      <FriendLink></FriendLink>
      <Footer></Footer>
    </div>
  );
}

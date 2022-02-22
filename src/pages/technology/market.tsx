import { useRequest } from 'umi';
import HeaderBox from '@/components/HeaderBox';
import HeaderTop from '@/components/HeaderTop';
import classNames from 'classnames';
import type { Technology } from '@/pages/home/components/TechnologyBox';

import styles from './market.less';
import Footer from '@/components/Footer';
import PosterBanner from '@/components/PosterBanner';

export default function MarketPage(props: any) {
  const { data: achievementList, loading: achievementListLoading } = useRequest(
    '/api/technology',
  );
  const { data: demandList, loading: demandListLoading } = useRequest(
    '/api/technology/demand',
  );
  const { data: talentList, loading: talentListLoading } = useRequest(
    '/api/technology/talent',
  );

  return (
    <div className={styles['market']}>
      <HeaderTop></HeaderTop>
      <HeaderBox></HeaderBox>
      <PosterBanner></PosterBanner>
      <div className={styles['main-wrapper']}>
        <div className={styles['technology-title']}>
          <h3>技术成果</h3>
          <div className={styles['view-more']}>
            <a href="/technologyMarket/tech_technologys.html">查看更多</a>
            <span className={styles['view-more-icon']}>
              <span className={styles['arrow']}></span>
            </span>
          </div>
        </div>
        <div className={styles['technology-list-wrapper']}>
          <ul className={styles['technology-list']}>
            {achievementListLoading === false &&
              achievementList.slice(0, 4).map((technology: Technology) => {
                return (
                  <li key={technology.id} className={styles['technology']}>
                    <div className={styles['technology-image']}>
                      <img
                        src={`https://fs.kj01.cn//resource/${technology.projectImgPath}`}
                      />
                    </div>
                    <div className={styles['technology-description']}>
                      <h4 className="text-ellipsis">{technology.title}</h4>
                      <div className="text-ellipsis">
                        所属领域：
                        {technology.projectIndustryType.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                      <div className="text-ellipsis">
                        标签：
                        {technology.tags.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                      <div>
                        <span className="text-ellipsis">
                          转让方式：{technology.cooperationModeDisplay}
                        </span>
                        <span className="fr">
                          价格：<i className={styles['price']}>面议</i>
                        </span>
                      </div>
                    </div>
                    <a
                      href="tech_technologys_details.html?id=1470688907024347137"
                      className={styles['technology-button']}
                    >
                      邀约交流
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles['technology-title']}>
          <h3>技术需求</h3>
          <div className={styles['view-more']}>
            <a href="/technologyMarket/tech_technologys.html">查看更多</a>
            <span className={styles['view-more-icon']}>
              <span className={styles['arrow']}></span>
            </span>
          </div>
        </div>
        <div className={styles['technology-list-wrapper']}>
          <ul className={styles['technology-list']}>
            {demandListLoading === false &&
              demandList.slice(0, 8).map((technology: Technology) => {
                return (
                  <li key={technology.id} className={styles['technology']}>
                    <div className={styles['technology-description']}>
                      <h4 className="text-ellipsis">{technology.title}</h4>
                      <div className="text-ellipsis">
                        所属领域：
                        {technology.demandIndustryType.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                      <div className="text-ellipsis">
                        标签：
                        {technology.tags.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                      <div>
                        <span className="text-ellipsis">
                          转让方式：{technology.cooperationModeDisplay}
                        </span>
                        <span className="fr">
                          价格：<i className={styles['price']}>面议</i>
                        </span>
                      </div>
                    </div>
                    <a
                      href="tech_technologys_details.html?id=1470688907024347137"
                      className={styles['technology-button']}
                    >
                      邀约交流
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles['technology-title']}>
          <h3>技术经纪人</h3>
          <div className={styles['view-more']}>
            <a href="/technologyMarket/tech_technologys.html">查看更多</a>
            <span className={styles['view-more-icon']}>
              <span className={styles['arrow']}></span>
            </span>
          </div>
        </div>
        <div className={styles['technology-list-wrapper']}>
          <ul className={styles['technology-list']}>
            {talentListLoading === false &&
              talentList.slice(0, 4).map((technology: Technology) => {
                return (
                  <li key={technology.id} className={styles['technology']}>
                    <div className={styles['technology-image']}>
                      <img
                        src={`https://fs.kj01.cn//resource/${technology.logoPath}`}
                      />
                    </div>
                    <div className={styles['technology-description']}>
                      <h4 className="text-ellipsis">{technology.brokerName}</h4>
                      <div className="text-ellipsis">
                        所属领域：
                        {technology.industryType.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                      <div className="text-ellipsis">
                        标签：
                        {technology.zMTechBrokerAdditionalList.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                    </div>
                    <div className={styles['technology-button-list']}>
                      <a
                        href="tech_technologys_details.html?id=1470688907024347137"
                        className={classNames(styles['technology-button'], styles['blue'])}
                      >
                        邀约交流
                      </a>
                      <a
                        href="tech_technologys_details.html?id=1470688907024347137"
                        className={styles['technology-button']}
                      >
                        投递成果
                      </a>
                    </div>

                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

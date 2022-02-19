import { useRequest } from 'umi';
import type { Technology } from '@/pages/home/components/TechnologyBox';

import styles from './market.less';
import Footer from '@/components/Footer';

export default function MarketPage(props: any) {
  const { data: technologyList, loading: technologyListLoading } = useRequest(
    '/api/technology',
  );

  return (
    <div className={styles['market']}>
      <div className={styles['main-wrapper']}>
        <div className={styles['project-title']}>
          <h3>技术成果</h3>
          <div className={styles['view-more']}>
            <a href="/technologyMarket/tech_achievements.html">查看更多</a>
            <span className={styles['view-more-icon']}>
              <span className={styles['arrow']}></span>
            </span>
          </div>
        </div>
        <div className={styles['achievement-list-wrapper']}>
          <ul className={styles['achievement-list']}>
            {technologyListLoading === false &&
              technologyList.splice(0, 4).map((achievement: Technology) => {
                return (
                  <li key={achievement.id} className={styles['achievement']}>
                    <div className={styles['achievement-image']}>
                      <img
                        src={`https://fs.kj01.cn//resource/${achievement.projectImgPath}`}
                      />
                    </div>
                    <div className={styles['achievement-description']}>
                      <h4 className="text-ellipsis">{achievement.title}</h4>
                      <div className="text-ellipsis">
                        所属领域：
                        {achievement.projectIndustryType.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                      <div className="text-ellipsis">
                        标签：
                        {achievement.tags.map((item, index) => {
                          return <span key={index}>{item.name}</span>;
                        })}
                      </div>
                      <div>
                        <span className="text-ellipsis">
                          转让方式：{achievement.cooperationModeDisplay}
                        </span>
                        <span className="fr">
                          价格：<i className={styles['price']}>面议</i>
                        </span>
                      </div>
                    </div>
                    <a
                      href="tech_achievements_details.html?id=1470688907024347137"
                      className={styles['achievement-button']}
                    >
                      邀约交流
                    </a>
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


import type { Technology } from '@/pages/home/components/TechnologyBox';

import styles from './index.less';

interface TechnologyListProps {

}

const TechnologyList = (props: { achievementListLoading: boolean, achievementList?: Technology[] }) => {
  const { achievementList = [], achievementListLoading = true } = props

  return <div className={styles['technology-list-wrapper']}>
    <ul className={styles['technology-list']}>
      {achievementListLoading === false &&
        achievementList.map((technology: Technology) => {
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
}

export default TechnologyList;
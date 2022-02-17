import React from 'react';
import './index.less';

interface HeaderNavProps {}

const HeaderNav: React.FC<HeaderNavProps> = (props: HeaderNavProps) => {
  return (
    <div className="header-nav">
      <div className="recent-news">
        <div className="desc">
          最新动态:
        </div>
        <div className="bd">
          <div className="tempWrap">
            <ul className="infoList">
              <li className="clone">
                <a href="/adetail.html?id=465894251676278784">
                  【活动】严征管形势下的税务风险
                </a>
              </li>
              <li>
                <a href="/podetail.html?id=477483372026765312">
                  【政策】重庆市知识产权局关于公开征求《重庆市高价值发明专利质量提升行动方案（2022-2024年）（征求意见稿）》意见的通知
                </a>
              </li>
              <li>
                <a href="/podetail.html?id=474695017346080768">
                  【政策】重庆市科学技术局关于申报2022年重庆市自然科学基金项目的通知
                </a>
              </li>
              <li>
                <a href="/podetail.html?id=477520555160870912">
                  【政策】关于印发重庆市独立法人新型企业研发机构管理办法的通知
                </a>
              </li>
              <li>
                <a href="/adetail.html?id=480059799955808256">
                  【活动】企业研发准备金备案申报
                </a>
              </li>
              <li>
                <a href="/adetail.html?id=469891590581624832">
                  【活动】税收趋势和企业税务风险
                </a>
              </li>
              <li>
                <a href="/adetail.html?id=465894251676278784">
                  【活动】严征管形势下的税务风险
                </a>
              </li>
              <li>
                <a href="/podetail.html?id=477483372026765312">
                  【政策】重庆市知识产权局关于公开征求《重庆市高价值发明专利质量提升行动方案（2022-2024年）（征求意见稿）》意见的通知
                </a>
              </li>
              <li>
                <a href="/podetail.html?id=474695017346080768">
                  【政策】重庆市科学技术局关于申报2022年重庆市自然科学基金项目的通知
                </a>
              </li>
              <li>
                <a href="/podetail.html?id=477520555160870912">
                  【政策】关于印发重庆市独立法人新型企业研发机构管理办法的通知
                </a>
              </li>
              <li>
                <a href="/adetail.html?id=480059799955808256">
                  【活动】企业研发准备金备案申报
                </a>
              </li>
              <li>
                <a href="/adetail.html?id=469891590581624832">
                  【活动】税收趋势和企业税务风险
                </a>
              </li>
              <li>
                <a href="/adetail.html?id=465894251676278784">
                  【活动】严征管形势下的税务风险
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="plate-title">
        <a href="/polist.html">
          <h2>政策资讯</h2>
        </a>
        <p>政策动态速递，科技热点跟进</p>
      </div>
      {/* <div className="studybox">
        <a>
          <img src="/style/images/index/frbox.gif" />
        </a>
      </div> */}
    </div>
  );
};

export default HeaderNav;

import { useRequest } from "umi";
import { Pagination } from "antd";
import TagSelect from "@/components/TagSelect";
import TechnologyList from "./components/TechnologyList";

import styles from './achievement.less'
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import PosterBanner from "@/components/PosterBanner";

type SearchFilter = {
    label: string
    data: { label: string, value: string }[]
}

interface SearchRowProps {
    searchFilter: SearchFilter
}

const SearchRow = (props: SearchRowProps) => {
    const { searchFilter } = props
    return <div className={styles['search-row']}>
        <div className={styles['search-label']}>
            <span>{searchFilter.label}</span>
        </div>
        <div className={styles['search-tag']}>
            <TagSelect expandable>
                {searchFilter?.data.map((item, index) => {
                    return <TagSelect.Option key={item.value} value={item.value}>{item.label}</TagSelect.Option>
                })}
            </TagSelect>
        </div>
    </div>
}

export default function achievementPage(props: any) {
    const { data: searchFilterList, loading: searchFilterLoading } = useRequest('/api/search/filter');
    const { data: achievementList, loading: achievementListLoading } = useRequest('/api/technology');

    return <div className={styles['achievement']}>
        <HeaderTop></HeaderTop>
        <PosterBanner></PosterBanner>
        <div className={styles['main-wrapper']}>
            <div className={styles['search-box']}>
                {!searchFilterLoading && searchFilterList.map((searchFilter: SearchFilter, index: number) => {
                    return <SearchRow key={index} searchFilter={searchFilter}></SearchRow>
                })}
            </div>
            <TechnologyList achievementList={achievementList} achievementListLoading={achievementListLoading}></TechnologyList>
            <Pagination defaultCurrent={1} total={50} />
        </div>
        <Footer></Footer>
    </div>
}
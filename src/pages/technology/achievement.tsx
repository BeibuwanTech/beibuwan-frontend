import { useRequest } from "umi";
import TagSelect from "@/components/TagSelect";

import styles from './achievement.less'

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

    return <div className={styles['achievement']}>
        <div className={styles['main-wrapper']}>
            <div className={styles['search-box']}>
                {!searchFilterLoading && searchFilterList.map((searchFilter: SearchFilter, index: number) => {
                    return <SearchRow key={index} searchFilter={searchFilter}></SearchRow>
                })}
            </div>
        </div>
    </div>
}
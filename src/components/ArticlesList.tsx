import {observer} from "mobx-react-lite";
import {FC, useContext} from "react";
import {Context} from "../index";
import styles from '../styles/ArticlesList.module.scss'
import {Article} from "./Article";
import {ArticleSkeleton} from "./ArticleSkeleton";

interface ArticlesInt{
    search:string
}


const ArticlesList: FC<ArticlesInt> =({search}) => {
    const {store} = useContext(Context);
    const sortArr = store.articles.filter(el=> {
        let priority = el.title.toLowerCase().includes(search.toLowerCase())
        if(!priority) priority = el.summary.toLowerCase().includes(search.toLowerCase())
        return priority
    })
    return(
        <div className={styles.body}>
            {
                store.isLoading?[...Array(6)].map((el, index)=> <ArticleSkeleton key={index}/>)
                    : sortArr.map((article) => (
                        <Article key={article.id} article = {article} />
                    ))
            }

        </div>

    )
}

export default observer(ArticlesList)
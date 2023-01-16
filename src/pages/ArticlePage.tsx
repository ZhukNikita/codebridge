import {observer} from "mobx-react-lite";
import styles from '../styles/ArticlePage.module.scss'
import {Context} from "../index";
import {useContext} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import WestIcon from "@mui/icons-material/East";
import {ArticlePageSkeleton} from "./ArticlePageSkeleton";



const ArticlePage = () => {
    const {store} = useContext(Context);
    const {id} = useParams()
    function findArticle(){
        const articleIndex = store.articles.findIndex(el => el.id === (id? +id : ''))
        return articleIndex
    }
    const article = store.articles[findArticle()]

    if(store.isLoading)return <ArticlePageSkeleton/>
    return(
        <div className={styles.body}>
            <div className={styles.imgBlock}>
                <img src={article?.imageUrl} alt="img" width='100%' height='245px'/>
            </div>
            <div className={styles.infoBlock}>
                <h3>
                    {article?.title}
                </h3>
                <p>
                    {article?.summary}
                </p>
            </div>
                <Link to={`/`} className={styles.readMore}>
                    <WestIcon style={{color:'#363636' , transform:'rotate(180deg)'}}/>
                    <p>Back to homepage</p>
                </Link>
        </div>
    )
}
export default observer(ArticlePage)
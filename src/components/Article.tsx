import {FC} from 'react'
import {Articles} from "../models/Articles";
import styles from '../styles/Article.module.scss'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Link} from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
interface ArticleInt{
    article: Articles
}
export const Article: FC<ArticleInt> = ({article})=>{
    const date = new Date(article.publishedAt)
    const localDate = date.toLocaleString('eng',{
        month: 'long',
        day:'numeric',
        year:'numeric'
    });
    return(
        <div className={styles.body}>
            <div className={styles.img}>
                <img src={article.imageUrl} alt="image" width='100%' height='100%'/>
            </div>
            <div className={styles.content}>
                <div className={styles.publishedAt}>
                    <CalendarTodayIcon style={{color:'#363636'}}/>
                    <p>{localDate}</p>
                </div>
                <h2 className={styles.title}>
                    {
                        article.title.length > 20? <div>{article.title.slice(0, 35)}<span> ...</span></div>: article.title
                    }
                </h2>
                <div className={styles.summary}>
                    {article.summary.length > 140? <p>{article.summary.slice(0, 140)}<span>...</span></p>: article.summary}
                </div>
                <Link to={`/article/${article.id}`} className={styles.readMore}>
                    <p>Read more</p>
                    <EastIcon style={{color:'#363636'}}/>
                </Link>
            </div>
        </div>
    )
}
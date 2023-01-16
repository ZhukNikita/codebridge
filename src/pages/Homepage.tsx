import styles from '../styles/Homepage.module.scss'
import Header from "../components/Header";
import ArticlesList from "../components/ArticlesList";
import { useState } from 'react';


function Homepage(){
    const [search , setSearch] = useState<string>('')
    return(
        <div className = {styles.body}>
            <Header search={search} setSearch={setSearch}/>
            <ArticlesList search={search} />
        </div>
    )
}
export default Homepage
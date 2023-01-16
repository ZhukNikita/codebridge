import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import styles from '../styles/ArticlePageSkeleton.module.scss'
export const ArticlePageSkeleton =()=>{
    return(
        <div className={styles.skeleton}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width="80vw" height='75vh' />
            </Stack>
        </div>
    )
}
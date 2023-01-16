import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import styles from '../styles/ArticleSkeleton.module.scss'
export const ArticleSkeleton =()=>{
    return(
        <div className={styles.skeleton}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width="400px" height={217} />
                <div className={styles.skeletonContent}>
                        <div className={styles.skeletonDate}>
                            <Skeleton variant="text" width={130} height={15} />
                        </div>
                        <div className={styles.skeletonTitle}>
                            <Skeleton variant="text" width={280} height={45} />
                        </div>
                    <div>
                        <div>
                            <Skeleton variant="text" width={320} height={96} />
                            <Skeleton variant="text" width={92} height={24} />
                        </div>
                    </div>
                </div>
            </Stack>
        </div>
    )
}
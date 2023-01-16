import styles from '../styles/Header.module.scss'
import {OutlinedInput} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import {Dispatch, FC, SetStateAction} from "react";

interface HeaderInt {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const Header: FC<HeaderInt> =({setSearch})=> {
    return(
        <div className={styles.header}>
            <p className={styles.label}>Filter by keywords</p>
            <OutlinedInput
                id="outlined-adornment-weight"
                startAdornment={<InputAdornment style={{padding:'0'}} position="start"><SearchIcon/></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                placeholder='The most successful IT companies in 2020'
                sx={{
                    width:'600px',
                    height:'50px',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#575757',
                    outline: 'none',
                }}
                onChange={e=> setSearch(e.target.value)}
                inputProps={{style:{padding:'13px 0 13px 14px'}}}
            />
            <p className={styles.result}>Result: 6</p>
            <hr/>
        </div>
    )
}
export default Header
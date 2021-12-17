import logo from "../../assets/logo.png"
import user from "../../assets/user.png"
import styles from "./HeaderStyle.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div><img alt={"logo"} src={logo}/></div>
            <div><img alt={"user"} src={user}/></div>
        </div>
    )
}

export default Header
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar} >
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />

            <div className={styles.profile}>
                <strong>Carlos Oliveira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
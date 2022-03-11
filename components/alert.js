import { da } from "date-fns/locale"
import Link from "next/link"
import styles from "./alert.module.css"
import dashboardStyles from '../styles/dashboard.module.css'


export default function Alert({ data, cancelAction, downloadFile, deletePost, resetCounter }) {

    function handleCancel() {
        if (data.alert === "titleAlert") {
            refreshData()
            return;
        }
        cancelAction()
        return;
    }

    function handleReset() {
        resetCounter(data.id)
    }

    function handleDownload() {
        downloadFile(null, data.id)
    }

    function handleDelete() {
        deletePost(data.id, data.name)
    }

    if (data.alert === "resetAlert") {
        return (
            <div className={styles.alert}>
                <div className={styles.container}>
                    <h4>Reset counter?</h4>
                    <p>this action will reset the counter to 0, this cannot be undone</p>
                    <div className={styles.btnContainer}>
                        <button className={dashboardStyles.button} onClick={handleCancel}>Cancel</button>
                        <button className={`${dashboardStyles.button} ${dashboardStyles.buttonDelete}`} onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }


    if (data.alert === "deletionAlert") {
        return (
            <div className={styles.alert}>
                <div className={styles.container}>
                    <h4>Delete cannot be undone</h4>
                    <p>you might want to download a copy of this post to edit</p>
                    <div className={styles.btnContainer}>
                        <button className={dashboardStyles.button} onClick={handleCancel}>Cancel</button>
                        <button className={dashboardStyles.button} onClick={handleDownload}>Download post</button>
                        <button className={`${dashboardStyles.button} ${dashboardStyles.buttonDelete}`} onClick={handleDelete}>Delete post</button>
                    </div>
                </div>
            </div>
        )
    }

    if (data.alert === 'titleAlert') {
        return (
            <div className={styles.container}>
                <p>{data.message}</p>
                <Link href="/admin/create-post">
                    <a onClick={handleCancel}>OK</a>
                </Link>
            </div>
        )
    }

    if (data.alert === 'messageAlert') {
        return (
            <div className={styles.container}>
                <p>{data.message}</p>
            </div>
        )
    }
}
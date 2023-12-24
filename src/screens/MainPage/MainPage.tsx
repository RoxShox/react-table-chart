import React from "react"
import styles from "./MainPage.module.scss"
import CompanyTable from "../../components/common/CompanyTable/CompanyTable"

const MainPage = () => {
	return (
		<div className={styles.tableWrapper}>
			<CompanyTable />
		</div>
	)
}

export default MainPage

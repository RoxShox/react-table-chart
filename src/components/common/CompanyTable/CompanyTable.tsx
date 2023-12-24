import CompanyHeader from "./CompanyHeader/CompanyHeader"
import styles from "../../../screens/MainPage/MainPage.module.scss"
import CompanyRow from "./CompanyRow/CompanyRow"
import { infoTable } from "../../../data/data"
import { useState } from "react"
const CompanyTable = () => {
	const [currentRow, setCurrentRow] = useState<number | null>(null)
	const clickRowHandler = (index: number) => {
		setCurrentRow(index)
	}
	return (
		<table className={styles.table}>
			<CompanyHeader />
			<tbody>
				{infoTable.map((info, index) => (
					<CompanyRow
						key={index}
						info={info}
						index={index}
						onClick={clickRowHandler}
						currentRow={currentRow}
					/>
				))}
			</tbody>
		</table>
	)
}

export default CompanyTable

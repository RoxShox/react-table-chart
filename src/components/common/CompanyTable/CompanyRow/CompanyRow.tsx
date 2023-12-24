import { IInfo } from "../../../../models"
import { changeStringToNumber } from "../../../../utils/changeStringToNumber"
import LineChart from "../Chart/Chart"
import styles from "./CompanyRow.module.scss"
interface CompanyRowProps {
	info: IInfo
	index: number
	onClick: (index: number) => void
	currentRow: number | null
}

const CompanyRow = ({ info, index, onClick, currentRow }: CompanyRowProps) => {
	const dtoChartData = [
		changeStringToNumber(info.currentDay),
		changeStringToNumber(info.yesterdayDay[0]),
		changeStringToNumber(info.thisDayOfWeek),
	]
	const checkPercentColor = +info.yesterdayDay[1] > 0 ? "#17e317" : "red"

	return (
		<>
			<tr onClick={() => onClick(index)}>
				<td className={styles.firstCell}>{info.indicator}</td>
				<td className={styles.secondCell}>{info.currentDay}</td>
				<td className={styles.thirdCell}>
					<span>{info.yesterdayDay[0]}</span>
					<span style={{ color: checkPercentColor }}>
						{info.yesterdayDay[1]}%
					</span>
				</td>
				<td className={styles.fourthCell}>{info.thisDayOfWeek}</td>
			</tr>
			{currentRow === index && (
				<tr>
					<td colSpan={4} className="td__line">
						<LineChart label={info.indicator} chartData={dtoChartData} />
					</td>
				</tr>
			)}
		</>
	)
}

export default CompanyRow

import React from "react"
import styles from "./CompanyHeader.module.scss"
const CompanyHeader = () => {
	return (
		<thead>
			<tr>
				<th>Показатель</th>
				<th>Текущий день</th>
				<th>Вчера</th>
				<th>Этот день недели</th>
			</tr>
		</thead>
	)
}

export default CompanyHeader

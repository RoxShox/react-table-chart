import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

interface LineChartProps {
	label: string
	chartData: number[]
}
const LineChart = ({ label, chartData }: LineChartProps) => {
	const state = {
		labels: ["Текущий день", "Вчера", "Этот день недели"],
		datasets: [
			{
				label: label,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(75,192,192,1)",
				borderWidth: 3,
				data: chartData,
			},
		],
	}

	return (
		<div className="line">
			<Line data={state} />
		</div>
	)
}
export default LineChart

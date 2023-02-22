const doughnut = document.getElementById("doughnut");
const statisticsDoughnut = document.getElementById("statistics-doughnut");
const incomeAnalyticsElem = document.getElementById("income-analytics");
const expenseAnalyticsElem = document.getElementById("expense-analytics");
const statisticsIncomeElem = document.getElementById("statistics__income-analytics");
const statisticsExpenseElem = document.getElementById("statistics__expense-analytics");
const statisticsBalanceElem = document.getElementById("statistics__balance-chart");

const counter = {
	id: "counter",
	beforeDraw(chart, args, options) {
		const {
			ctx,
			chartArea: { top, right, bottom, left, width, height },
		} = chart;
		ctx.save();

		ctx.fillStyle = "#1A1C1E";
		ctx.font = "2.4rem Manrope-Bold";
		ctx.textAlign = "center";
		ctx.fillText("100%", width / 2, top + height / 2.3);

		ctx.fillStyle = "var(--gray-color)";
		ctx.font = "1.4rem Manrope-Medium";
		ctx.fillText("Data Recorded", width / 2, top + height / 1.7);
	},
};

const statisticsBalance = new Chart(statisticsBalanceElem, {
	type: "bar",
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [
			{
				data: [14_500, 10_000, 13_000, 16_000, 14_000, 15_000, 10_500, 13_000, 16_500, 18_000, 13_000, 11_000],
				backgroundColor: "#5FCFB0",
				hoverBackgroundColor: "#187D7E",
				barPercentage: 0.5,
			},
		],
	},
	options: {
		plugins: {
			legend: false,
		},
		scales: {
			x: {
				grid: {
					drawBorder: false,
					drawOnChartArea: false,
					display: false,
					lineWidth: 5,
					borderWidth: 0,
				},
			},
			y: {
				min: 1_000,
				type: "linear",
				ticks: {
					stepSize: 5_000,
					callback: function (label) {
						return "$" + label / 1000 + "k";
					},
				},
				beginAtZero: true,
			},
		},
	},
	responsive: false,
});

catergory(doughnut);
catergory(statisticsDoughnut);

income(incomeAnalyticsElem);
income(statisticsIncomeElem);

expense(expenseAnalyticsElem);
expense(statisticsExpenseElem);

function income(classname) {
	new Chart(classname, {
		type: "bar",
		data: {
			labels: ["Jan", "Feb", "Mar"],
			datasets: [
				{
					data: [6000, 5000, 8000],
					backgroundColor: "#e7854d",
					hoverBackgroundColor: "#e7854d",
					barPercentage: 0.5,
				},
			],
		},
		options: {
			plugins: {
				legend: false,
			},
			scales: {
				x: {
					grid: {
						drawBorder: false,
						drawOnChartArea: false,
						display: false,
						lineWidth: 5,
						borderWidth: 0,
					},
					ticks: {
						display: false,
					},
				},
				y: {
					min: 1_000,
					type: "linear",
					ticks: {
						stepSize: 5_000,
						callback: function (label) {
							return "$" + label / 1000 + "k";
						},
					},
				},
			},
		},
		responsive: false,
	});
}

function expense(classname) {
	new Chart(classname, {
		type: "line",
		data: {
			labels: [1, 3, 1, 3],
			datasets: [
				{
					data: [2, 5, 2, 5],
					fill: true,
					backgroundColor: "rgba(178, 224, 255, 0.5)",
					borderColor: "#4d81e7",
					borderWidth: 4,
					tension: 0.1,
				},
			],
		},
		options: {
			plugins: {
				legend: false,
			},
			scales: {
				x: {
					grid: {
						drawBorder: false,
						drawOnChartArea: false,
						display: false,
						lineWidth: 5,
						borderWidth: 0,
					},
					ticks: {
						display: false,
					},
				},
				y: {
					beginAtZero: true,
					grid: {
						borderColor: "green",
						drawOnChartArea: false,
						borderWidth: 3,
						drawBorder: false,
						display: false,
						drawTicks: false,
					},
					ticks: {
						display: false,
					},
				},
			},
		},
	});
}

function catergory(classname) {
	new Chart(classname, {
		type: "doughnut",
		data: {
			datasets: [
				{
					data: [19.2, 6.1, 40.1, 25],
					backgroundColor: ["#4d81e7", "#c65468", "#31b099", "#e7854d"],
					borderWidth: 1,
					cutout: "65%",
					borderRadius: 5,
				},
			],
		},
		plugins: [counter],
	});
}

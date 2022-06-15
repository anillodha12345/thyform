import React, { Component } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import "./Dashboard.css";
import { Dropdown } from "react-bootstrap";
import { PieChart } from "react-minimal-pie-chart";

const bar_data = [
  {
    name: "JAN",
    ["Last week"]: 215,
    ["This week"]: 110,
    // amt: 2400,
  },
  {
    name: "FEB",
    ["Last week"]: 290,
    ["This week"]: 220,
    // amt: 2210,
  },
  {
    name: "MAR",
    ["Last week"]: 210,
    ["This week"]: 200,
    // amt: 2290,
  },
  {
    name: "APR",
    ["Last week"]: 250,
    ["This week"]: 190,
    // amt: 2000,
  },
  {
    name: "MAY",
    ["Last week"]: 290,
    ["This week"]: 220,
    // amt: 2181,
  },
  {
    name: "JUN",
    ["Last week"]: 230,
    ["This week"]: 110,
    // amt: 2500,
  },
  {
    name: "JUL",
    ["Last week"]: 290,
    ["This week"]: 210,
    // amt: 2100,
  },
  {
    name: "AUG",
    ["Last week"]: 210,
    ["This week"]: 110,
    // amt: 2100,
  },
  {
    name: "SEP",
    ["Last week"]: 280,
    ["This week"]: 205,
    // amt: 2100,
  },
  {
    name: "OCT",
    ["Last week"]: 220,
    ["This week"]: 202,
    // amt: 2100,
  },
  {
    name: "NOV",
    ["Last week"]: 0,
    ["This week"]: 201,
    // amt: 2100,
  },
  {
    name: "DEC",
    ["Last week"]: 300,
    ["This week"]: 150,
    amt: 2100,
  },
];

const linedata = [
  {
    name: "sun",
    datavalue: 30,
  },
  {
    name: "sun",
    datavalue: 38,
  },
  {
    name: "sun",
    datavalue: 50,
  },
  {
    name: "sun",
    datavalue: 25,
  },
  {
    name: "sun",
    datavalue: 20,
  },
  {
    name: "sun",
    datavalue: 50,
  },
];

const pdata = [
  {
    name: "SUN",
    ["This week"]: 50,
    ["Last week"]: 30,
  },
  {
    // name: "SUN",
    ["This week"]: 110,
    ["Last week"]: 130,
  },
  {
    name: "MON",
    ["This week"]: 60,
    ["Last week"]: 190,
  },
  {
    // name: "SUN",
    ["This week"]: 290,
    ["Last week"]: 250,
  },
  {
    name: "TUE",
    ["This week"]: 200,
    ["Last week"]: 130,
  },
  {
    // name: "SUN",
    ["This week"]: 115,
    ["Last week"]: 150,
  },
  {
    name: "WED",
    ["This week"]: 130,
    ["Last week"]: 130,
  },
  {
    ["This week"]: 170,
    ["Last week"]: 20,
  },
  {
    name: "THU",
    ["This week"]: 90,
    ["Last week"]: 30,
  },
  {
    ["This week"]: 210,
    ["Last week"]: 15,
  },
  {
    name: "FRI",
    ["This week"]: 240,
    ["Last week"]: 40,
  },
  {
    ["This week"]: 280,
    ["Last week"]: 95,
  },
  {
    name: "SAT",
    ["This week"]: 200,
    ["Last week"]: 180,
  },
];
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      netProfitChartData: {},
      totaltransactionChartData: {},

      netProfitOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
            display: false,
          },
          pointLabels: {
            fontSize: 14,
            fontColor: "#6c757c",
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          },
          angleLines: {
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          },
          gridLines: {
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          },
        },
        legend: false,
      },
      totaltransactionChartOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        layout: {
          padding: {
            left: -10,
            right: 0,
            top: 0,
            bottom: -10,
          },
        },
        legend: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
              ticks: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
              ticks: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
            },
          ],
        },
      },
      todos: [
        {
          id: 1,
          task: "Pick up kids from school",
          isCompleted: false,
        },
        {
          id: 2,
          task: "Prepare for presentation",
          isCompleted: false,
        },
        {
          id: 3,
          task: "Print Statements",
          isCompleted: false,
        },
        {
          id: 4,
          task: "Create invoice",
          isCompleted: false,
        },
        {
          id: 5,
          task: "Call John",
          isCompleted: false,
        },
      ],
      inputValue: "",
      active: "",
      backgroundColor:this.props.name.chart
    };
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  changeChartOneData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }

    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170];
    var newData1 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  changeChartTwoData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 145, 155, 60, 75, 65, 130, 110, 145, 149, 170];
    var newData1 = [0, 70, 52, 90, 25, 20, 40, 70, 49, 94, 110, 135];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    console.log("this is:", newDataSet.data);
    console.log("this is:", newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  changeChartThreeData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 75, 65, 130, 110, 145, 155, 60, 145, 149, 170];
    var newData1 = [0, 70, 52, 94, 110, 135, 90, 25, 20, 40, 70, 49];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    console.log("this is:", newDataSet.data);
    console.log("this is:", newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  changeChartFourData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 145, 65, 130, 75, 145, 149, 170, 110, 155, 60];
    var newData1 = [0, 70, 90, 25, 40, 20, 94, 110, 135, 70, 49, 52];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    console.log("this is:", newDataSet.data);
    console.log("this is:", newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  statusChangedHandler(event, id) {
    const todo = { ...this.state.todos[id] };
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
      todos: todos,
    });
  }

  addTodo(event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: this.state.inputValue,
      isCompleted: false,
    });

    this.setState({
      todos: todos,
      inputValue: "",
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos: todos,
    });
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  usersDoughnutChartData = {
    datasets: [
      {
        data: [80, 34, 100],
        backgroundColor: ["#19d895", "#2196f3", "#dde4eb"],
        borderColor: ["#19d895", "#2196f3", "#dde4eb"],
      },
    ],
    labels: ["Request", "Email"],
  };

  usersDoughnutChartOptions = {
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  amountDueBarData = {
    labels: [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
    ],
    datasets: [
      {
        label: "Profit",
        data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
        backgroundColor: [
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
        ],
        borderColor: [
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
        ],
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  amountDueBarOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0.03)",
          },
        },
      ],
      xAxes: [
        {
          display: false,
          barPercentage: 0.4,
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };
  totalRevenueData = {
    labels: [
      "Day01",
      "Day02",
      "Day03",
      "Day04",
      "Day05",
      "Day06",
      "Day07",
      "Day08",
      "Day09",
      "Day10",
      "Day11",
      "Day12",
      "Day13",
      "Day14",
      "Day15",
      "Day16",
      "Day17",
      "Day18",
      "Day19",
      "Day20",
      "Day21",
      "Day22",
      "Day23",
      "Day24",
      "Day25",
      "Day26",
      "Day27",
      "Day28",
      "Day29",
      "Day30",
      "Day31",
      "Day32",
      "Day33",
      "Day34",
      "Day35",
      "Day36",
      "Day37",
      "Day38",
      "Day39",
      "Day40",
      "Day41",
      "Day42",
      "Day43",
      "Day44",
      "Day45",
      "Day46",
      "Day47",
      "Day48",
      "Day49",
      "Day50",
      "Day51",
      "Day52",
      "Day53",
      "Day54",
      "Day55",
      "Day56",
      "Day57",
      "Day58",
      "Day59",
      "Day60",
      "Day61",
      "Day62",
      "Day63",
      "Day64",
      "Day65",
      "Day66",
      "Day67",
      "Day68",
      "Day69",
      "Day70",
      "Day71",
      "Day72",
      "Day73",
      "Day74",
      "Day75",
      "Day76",
      "Day77",
      "Day78",
      "Day79",
      "Day80",
      "Day81",
      "Day82",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: [
          56, 55, 59, 59, 59, 57, 56, 57, 54, 56, 58, 57, 59, 58, 59, 57, 55,
          56, 54, 52, 49, 48, 50, 50, 46, 45, 49, 50, 52, 53, 52, 55, 54, 53,
          56, 55, 56, 55, 54, 55, 57, 58, 56, 55, 56, 57, 58, 59, 58, 57, 55,
          53, 52, 55, 57, 55, 54, 52, 55, 57, 56, 57, 58, 59, 58, 59, 57, 56,
          55, 57, 58, 59, 60, 62, 60, 59, 58, 57, 56, 57, 56, 58, 59,
        ],
        borderColor: "#9B86F1",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 3,
        fill: "origin",
      },
    ],
  };
  totalRevenueOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          display: false,
        },
      ],
      xAxes: [
        {
          display: false,
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 5,
      },
    },
    stepsize: 100,
  };

  realTimeStatisticsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Profit",
        data: [330, 380, 230, 400, 309, 530, 340],
        backgroundColor: "#0f5bff",
        borderColor: "#0f5bff",
        borderWidth: 0,
      },
      {
        label: "Target",
        data: [600, 600, 600, 600, 600, 600, 600],
        backgroundColor: "#e5e9f2",
        borderColor: "#e5e9f2",
        borderWidth: 0,
      },
    ],
  };
  realTimeStatisticsOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 25,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            display: false,
            beginAtZero: true,
            fontColor: "#f3f3f3",
          },
          gridLines: {
            display: false,
            color: "#f3f3f3",
            zeroLineColor: "0,0,0,0",
          },
          barPercentage: 0.5,
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  marketingOverviewData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "OVERDUE",
        data: [145, 238, 148, 293, 242, 235, 256, 334],
        backgroundColor: "#826af9",
        borderColor: "#826af9",
        borderWidth: 0,
      },
      {
        label: "SNOOZED",
        data: [330, 380, 230, 400, 309, 430, 340, 310],
        borderColor: "#9e86ff",
        borderWidth: 0,
      },
      {
        label: "COMPLETED",
        data: [375, 440, 284, 450, 386, 480, 400, 365],
        backgroundColor: "#d0aeff",
        borderColor: "#d0aeff",
        borderWidth: 0,
      },
      {
        label: "PENDING",
        data: [425, 480, 324, 490, 426, 520, 440, 405],
        backgroundColor: "#f7d2ff",
        borderColor: "#f7d2ff",
        borderWidth: 0,
      },
    ],
  };
  marketingOverviewOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 400,
            display: true,
            beginAtZero: true,
            fontColor: "#b9b8b8",
            stepSize: 100,
          },
          gridLines: {
            display: false,
            color: "#dde4eb",
            zeroLineColor: "#dde4eb",
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#b9b8b8",
            color: "#dde4eb",
            zeroLineColor: "#dde4eb",
          },
          gridLines: {
            display: true,
            color: "#dde4eb",
            zeroLineColor: "#dde4eb",
          },
          barPercentage: 0.2,
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  componentDidMount() {}

  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }
  render() {
    console.log(this.props.name.chart,'namenamenamenamenamename')
    return (
      <div>
        <div className="row page-title-header  mt-5" style={this.props.name}>
          <div className="col-12 p-fixed">
            <div className="page-header ">
              {/* <h4 className="page-title">Dashboard</h4> */}
              <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap ">
                {/* <ul className="quick-links" style={this.props.name}>
                  <li>
                    
                      Build
                   
                  </li>
                  <li>
                   
                      Settings
                
                  </li>
                  <li>
                
                      Publish
                
                  </li>
                 
                </ul> */}
                <ul className="quick-links ml-auto">
                  <li>
               
                      Share
              
                  </li>
                  <li>
                   
                      Print
             
                  </li>
                  <li>
                
                      Export
                
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="page-header-toolbar">
              <div className="filter-wrapper"></div>
              <div className="sort-wrapper justify-content-between"></div>
            </div>
          </div>
        </div>
<div className='row d-flex justify-content-around'>
  <div className="col-md-11">
    
  <div className="row">
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card card-data" style={{backgroundColor:this.props.name.chart}}>
              <div className="card-body">
                <h2 className="chart-heading">Performance line chart</h2>
                <div className="d-xl-flex flex-column flex-lg-row chart-para">
                  {/* <h5>Lorem ipsum is placeholder text commonly used</h5> */}
                </div>
                <div>
                  <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart
                      width={700}
                      height={150}
                      data={pdata}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="name"
                        interval={"preserveStartEnd"}
                        axisLine={false}
                        tickLine={false}
                        height={20}
                      />
                      <YAxis axisLine={false} tickCount="4" tickLine={false} />
                      <Legend
                        align="right"
                        verticalAlign="top"
                        iconType="circle"
                      />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey={`This week`}
                        fillOpacity={0.5}
                        stroke={this.props.name.arealine1}
                        strokeWidth={2}
                        fill={this.props.name.fill1}
                        activeDot={true}
                        dot={{ strokeWidth: 3 }}
                      />
                      <Area
                        type="monotone"
                        dataKey={`Last week`}
                        fillOpacity={0.5}
                        stroke={this.props.name.arealine2}
                        strokeWidth={2}
                        fill={this.props.name.fill2}
                        activeDot={true}
                        dot={{ strokeWidth: 3 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card line-data" style={{backgroundColor:this.props.name.transparent}}>
              <div className="card-body d-flex flex-column">
                <div className="StatusSummary" style={{backgroundColor:this.props.name.linechart}}>
                  <h6 className="status-heading">Status Summary</h6>
                  <div className="status-div">
                    <div className="istatus-div">
                      Closed <br />
                      Value <br />
                      <span className="number-value">357</span>
                    </div>
                    <div className="isecstatus-div">
                      <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart
                          data={linedata}
                          margin={{
                            top: 10,
                            right: 120,
                            left: 40,
                            bottom: 0,
                          }}
                        >
                          <Line
                            dataKey="datavalue"
                            type="monotone"
                            stroke="#01b6a0"
                            strokeWidth={3}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 p-3" style={{backgroundColor:this.props.name.chart}}>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center pb-2">
                      <div className="dot-indicator bg-danger mr-2"></div>
                      <p className="mb-0">Total Visiter</p>
                    </div>
                    <h4 className="font-weight-semibold">26.80</h4>
                    <div className="loader"></div>
                    {/* <ProgressBar variant="danger" now={80}/> */}
                  </div>
                  <div className="col-md-6 mt-4 mt-md-0">
                    <div className="d-flex align-items-center pb-2">
                      <div className="dot-indicator bg-success mr-2"></div>
                      <p className="mb-0">Visiter per day</p>
                    </div>
                    <h4 className="font-weight-semibold">9065</h4>
                    <div className="loader"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  </div>
</div>
<div className='row d-flex justify-content-around'>
  <div className="col-md-11">
    
        <div className="row">
          <div className="col-md-8">
            {/* <div className="row abc"> */}
            {/* <div className="col-xl-6 col-lg-12 grid-margin stretch-card pqr">
                <div className="card second-row"></div>
              </div> */}
            {/* <div className="col-md-12 grid-margin pqr"> */}
            <div className="card bar-card " style={{backgroundColor:this.props.name.chart}}>
              <div className="card-body">
                <h4 className="mb-0 chart-heading">Market Overview</h4>
                <div className="bar-chart-para d-flex align-items-center justify-content-between w-100">
                  <p className="mb-0">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                  </p>
                  <div className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="btn btn-outline-secondary dropdown-toggle"
                        id="dropdownMenuButton4"
                      >
                        This month
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={this.changeMarketingOneData}>
                          Daily
                        </Dropdown.Item>
                        <Dropdown.Item onClick={this.changeMarketingTwoData}>
                          Weekly
                        </Dropdown.Item>
                        <Dropdown.Item onClick={this.changeMarketingThreeData}>
                          Monthly
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between mt-3">
                  <div className="d-flex align-items-end">
                  <h3 className="mb-0 font-weight-semibold bar-doller">$36,2531.00</h3>
                  <h4 className="mb-0 font-weight-medium mr-2 ml-2 mb-1 usd-data">USD</h4>
                  <h4 className="mb-0 text-success font-weight-semibold mb-1">
                    (+1.37%)
                  </h4>
                  </div>
                  <div class="d-flex justify-content-between mx-4">
                      <div><span class="dot1 mx-2"></span>This week</div>
                      <div><span class="dot2 mx-2"></span>Last week</div></div>
                </div>
                <div>
                <BarChart
                  width={680}
                  height={300}
                  data={bar_data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis axisLine={false} tickCount="4" tickLine={false} />
                  <Tooltip />
                 
                  <Bar
                    dataKey={`This week`}
                    stackId="a"
                    fill="#52cdff"
                    barSize={12}
                    // background={true}
                  />
                  <Bar
                    dataKey={`Last week`}
                    stackId="a"
                    fill="#1f3bb3"
                    barSize={12}
                    // background={true}
                  />
                </BarChart>
              </div>
              </div>
            </div>
            {/* </div> */}

            {/* <div className="col-md-12 grid-margin"></div> */}
            {/* </div> */}
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="card pie-chart" style={{backgroundColor:this.props.name.chart}}>
                  <div className="Todocard-body">
                    <h4 className="mt-3 ml-4">Type By Amount</h4>
                    <div>
                      <PieChart
                      radius={30}
                      // label={({ dataEntry }) => dataEntry.value}
                      // labelStyle={{
                      //   fontSize: '5px',
                      //   fontFamily: 'sans-serif',
                      //   fill: '#E38627',
                      // }}
                      // labelPosition={100}
                        lineWidth={50}
                        data={[
                          { title: "One", value: 40, color: "#1F3BB3" },
                          { title: "Two", value: 15, color: "#FDD0C7" },
                          { title: "Three", value: 10, color: "#52CDFF" },
                          { title: "Three", value: 20, color: "#81DADA" },
                        ]}
                      />
                      
                      {/* <ul className="d-flex align-items-center justify-content-between w-100">
                        <li>
                          {" "}
                          <span>Total</span>
                        </li>
                        <li>Net</li>
                        <li>Gross</li>
                        <li>AVG</li>
                      </ul> */}
                    </div>
                    {/* <p>hello</p> */}
                    <div class="d-flex justify-content-between mx-4">
                      <div><span class="dot1 mx-2"></span>Total</div>
                      <div><span class="dot2 mx-2"></span>Net</div>
                      <div><span class="dot3 mx-2"></span>Gross</div>
                      <div><span class="dot4 mx-2"></span>AVG</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
        </div></div>
      </div>
    );
  }
}
export default Dashboard;

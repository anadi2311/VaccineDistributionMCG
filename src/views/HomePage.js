/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import '../assets/css/home.css'
// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import {Line} from "react-chartjs-2";
// reactstrap components
import HomeStepper from '../components/Stepper/Stepper'
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

// core components
import {chartOptions, parseOptions} from "components/Graphs/Chart";

import Amplify, {API, graphqlOperation} from 'aws-amplify'
import {listContainers, listGPSReadings, listSensorReadings} from '../graphql/queries';
import Select from 'react-select'
//import awsExports from "../aws-exports";
import Timeline from "components/Graphs/Timeline";
import Piechart from "components/Graphs/Piechart";
import axios from "axios";

import config from '../aws-exports';

import '../assets/css/map.css'
import Map from '../components/Map/Map';
import {manufacturer} from '../components/Map/VaccineManufacturer'
import Header from "../components/Headers/Header";

let sensorTemp = []
let sensorHumidity = []
Amplify.configure(config);

let sensorTemp2 = []
let sensorHumidity2 = []


var Options = [
  {label:'TEMPERATURE', value: 0, x_axis: "Time (Hr)", y_axis: "Temp (°C)"},
  {label:'HUMIDITY', value: 1, x_axis: "Time (Hr)", y_axis: "Humidity (%)"},
  {label: 'LOCATION', value:2}

]
/*
data 1 and data 2 are the sensors
they are filled in following functions
*/
var data1 = {

  datasets: [
    {
      label: 'Sensor 1 (°C)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,


    }
    ,
    {
      label: 'Sensor 2 (°C)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(191,133,74,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(191,133,74,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(191,133,74,1)',
      pointHoverBorderColor: 'rgba(191,133,74,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,


    }
  ]
};

var data2 = {

  datasets: [
    {
      label: 'Sensor 1 (%)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,


    },
    {
      label: 'Sensor 2 (%)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(191,133,74,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(191,133,74,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(191,133,74,1)',
      pointHoverBorderColor: 'rgba(191,133,74,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,


    }
  ]
};

let containerOptions = []


class HomePage extends React.Component {
  //Get all the Entities from "GET_ALL_ENTITIES" operation
  async getEntityData() {

    axios.post(process.env.REACT_APP_API_URL, {Operation: "GET_ALL_SCENTITIES"},
        {
          headers: {
            //'Authorization': jwtToken
          }
        })
        .then(res => {
          console.log(res.data);
          console.log(res.data.body);
          this.setState({entity:res.data.body});
          const entityData = this.state.entity.filter( entity => entity.isApprovedBySuperAdmin === true).map(entity =>
              {
                let info = { "text": entity.ScEntityName,
                  "id": entity.ScEntityIdentificationCode
                }
                return info;
              }

          )
          console.log("EntityData", entityData)
          this.setState({filterEntityData: entityData})
          //this.setState({ companies: res.data.body }, ()=> this.createCompanyList());
        })
  }

  constructor(props){

    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      containers: [],
      sensorReadings: [],
      dataType: -1,
      dataOption: {},
      dataArray: [],
      data1: '',
      data2: '',
      containerId: '5430d7b2-8987-48ad-aa40-497e4c3f2531',
      containerName: '',
      currentReadings: [],
      dataName: '',
      gpsReadings: [],
      containerLocation: [],
      show: false,
      entity:[],
      filterEntityData:[],
      notificationOpen: false,
      notificationType: "success",
      y_axis: "",
      x_axis:""
    };
    this.chartReference = React.createRef();
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
    this.handleSensorDropdown = this.handleSensorDropdown.bind(this);
    this.handleContainerDropdown = this.handleContainerDropdown.bind(this);

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }
  //code to change the type of data that's shown
  toggleNavs = (e, index) => {
    console.log(index)
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
      dataType: index


    });


    console.log(this.state.dataArray)
  };

  //functions to run after components mount
  async componentWillMount(){
    await this.getContainers();
    console.log(this.chartReference)
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  containerLocationListBuilder(){
    const {containers} = this.state
    const coordinates = []
    for (let i=0;i<containers.length;i++){
      let entry = {}
      entry['latLng'] = [containers[i].currentLat,containers[i].currentLng]
      entry['name'] = containers[i].name
      coordinates.push(entry)
    }
    this.setState({
      containerLocation: coordinates
    });


  }


  componentWillUnmount(){
    containerOptions = []
  }
  //get all containers from database
  async getContainers(){
    try {
      const containers = await API.graphql(graphqlOperation(listContainers))
      console.log('containers:', containers)
      this.setState({
         containers: containers.data.listContainers.items
      })
      this.containerLocationListBuilder()
    } catch (err) {
      console.log('error fetching containers...', err)
    }
    this.state.containers.forEach(element => {
      containerOptions.push({value: element.id, label: element.name})
    });



  }
  //get sensor readings for selected containers on dropdown
  async getSensorForContainer(){
    console.log(this.state.containerId)
    try {
      const currentReadings = await API.graphql(graphqlOperation(listSensorReadings, {filter:{containerSensorReadingsId:{eq:this.state.containerId}}}))

      console.log('current readings: ', currentReadings)
      this.setState({
         currentReadings: currentReadings.data.listSensorReadings.items
      })
    } catch (err) {
      console.log('error fetching current containers...', err)
    }

    let fakeArray = []
    let labelArray = []

    this.state.currentReadings.forEach(element => {

      if(element.sensorID === '1'){
        sensorTemp.push(element.temperature)
        sensorHumidity.push(element.humidity)

      }
      else if(element.sensorID === '2'){
        sensorTemp2.push(element.temperature)
        sensorHumidity2.push(element.humidity)
      }


    });
    let index = 0
    for(index = 0; index < 10; index++){
      labelArray.push(index)
    }

    //console.log(sensorTemp)

    data1.datasets[0].data = sensorTemp;
    data1.datasets[1].data = sensorTemp2;
   data1.labels = labelArray;
   console.log("hello", labelArray)


    data2.datasets[0].data = sensorHumidity;
    data2.datasets[1].data = sensorHumidity2;
   data2.labels = labelArray;


    fakeArray.push(data1)
    fakeArray.push(data2)

    this.setState({dataArray: fakeArray})
    this.setState({data1: data1})
    this.setState({data2: data2})
   console.log("hello ", data1)

  }

  //handles code for data type dropdown
  handleSensorDropdown(event){
    this.setState({dataType : event.value,dataName: event.label, x_axis:event.x_axis,y_axis:event.y_axis})

  }

  //handles code for container dropdown
  handleContainerDropdown(event){
    this.setState({containerName: event.name})
    this.setState({containerId: event.value}, () => this.getSensorForContainer())
    this.setState({containerId: event.value}, () => this.getGPSForContainer())

  }
  //get gps coordinates for selected container
  async getGPSForContainer(){
        console.log(this.state.containerId)
        try {
          const currentGPSReadings = await API.graphql(graphqlOperation(listGPSReadings, {filter:{containerGpsReadingId:{eq:this.state.containerId}}}))
          //const currentReadings = await API.graphql(graphqlOperation(listSensorReadings,{filter :{ containerSensorReadingsId: {eq: this.state.containerId}}}))
          console.log('current GPS readings: ', currentGPSReadings)
          this.setState({

            currentLocation: currentGPSReadings.data.listGPSReadings.items
          })
        } catch (err) {
          console.log('error fetching current containers...', err)
        }


  }

//Display Modal form for user register in QLDB
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showNotification=()=>{
    this.setState({notificationOpen:true,
      notificationType:"info"})
    setTimeout(function(){
      this.setState({notificationOpen:false});
    }.bind(this),5000);
  }



  render() {
    const{containerLocation} = this.state
    console.log(this.state)
    console.log(containerLocation)


    return (
      <>
        <Header title={"Home"}/>
        <div ref={this.mapContainer} className="map"/>


        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-gray-dark shadow" id={"chartAndMapCard"}>
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">

                      <h6 className="text-uppercase ls-1 mb-1">
                          <Select onChange={this.handleContainerDropdown} options={containerOptions}/>
                      </h6>

                      {/* <h2 className="text-white mb-0">Sensor Data</h2> */}
                    </div>
                    <div className="col">
                    <h6 className="text-uppercase ls-1 mb-1">

                        <Select onChange={this.handleSensorDropdown}  options={Options}/>

                    </h6>


                    </div>
                  </Row>
                </CardHeader>

                <CardBody>
                  {/* Graphs */}
                  <Row  lg={"12"}>
                    <Col lg="2" className={"mt-8"}>
                      <h5 id={"axis-labels"}>
                        {this.state.y_axis}
                      </h5>
                    </Col>
                    <Col lg="10" >
                      <div className="chart" style={{height:"350px"}}>
                        {
                          this.state.dataType === 0 && (
                              <Line ref="chart" data={data1}
                              />
                          )
                        }
                        {
                          this.state.dataType === 1 && (
                              <Line ref="chart" data={data2}
                              />
                          )
                        }
                        {
                          this.state.dataType === 2 && (
                              <Map markers = {containerLocation} height={383}/>
                          )
                        }
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 id={"axis-labels"} className={"ml-8"}>
                        {this.state.x_axis}
                      </h5>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4" >


            <Card className="shadow bg-gradient-gray-dark shadow" id={"chartAndMapCard"} >
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Vaccine map</h3>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>

                <Map markers = {manufacturer} height={400}/>

                </CardBody>

              </Card>

            </Col>
          </Row>

          <Container className="mt--12">
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" lg="12">
                <Card className="table-container scroll-bar shadow" id='stepperContainer'>
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Supply Chain steps</h3>
                      </div>
                    </Row>
                    <CardBody>
                      <HomeStepper/>
                    </CardBody>
                  </CardHeader>
              </Card>
            </Col>
          </Row>
          </Container>

          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Timeline/>

            </Col>
            <Col xl="4">
              <Piechart/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default (HomePage);

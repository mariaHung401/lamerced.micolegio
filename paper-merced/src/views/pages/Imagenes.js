import React from 'react';

import 'react-awesome-slider/dist/styles.css';

import AwesomeSlider from 'react-awesome-slider';

import imagen1 from "assets/img/colegios/bienvenidos.jpg";
import imagen2 from "assets/img/colegios/cancha.jpg";
import imagen3 from "assets/img/colegios/graduado.jpg";
import imagen4 from "assets/img/colegios/niños.jpg";
import imagen5 from "assets/img/colegios/maestros-salon.jpg";
import imagen6 from "assets/img/colegios/maestros-regalos.jpg";
import imagen7 from "assets/img/colegios/maestros-cancha.jpg";
import imagen8 from "assets/img/colegios/aguila.jpg";
import imagen9 from "assets/img/colegios/cancha-premi.jpg";
import imagen10 from "assets/img/colegios/maestras-oficina.jpg";
import imagen11 from "assets/img/colegios/maestros-pateo.jpg";
import imagen12 from "assets/img/colegios/niña-maria.jpg";
import imagen13 from "assets/img/colegios/maestros-virgen.jpg";
import imagen14 from "assets/img/colegios/jugadores.jpg";

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
} from "variables/charts.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

class Imagenes extends React.Component {
    render() {
      return (
        <div className="content">
        <Row>
        <Col lg="4" sm="12" md="12">
          <Card>
            <CardBody>
              <img src={imagen12} />
            </CardBody>
          </Card>
        </Col>
        <Col lg="8" sm="12" md="12"> 
          <Card>
            <CardBody>
              <AwesomeSlider>
                <div data-src={imagen5} />
                <div data-src={imagen6} />
                <div data-src={imagen7} /> 
              </AwesomeSlider>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" sm="12" md="12">
          <CardBody>
            <img src={imagen14} />
          </CardBody>
        </Col>
        <Col lg="6" sm="12" md="12">
          <CardBody>
            <img src={imagen1} />
          </CardBody>
        </Col>
        <Col lg="4" sm="12" md="12" >
          <Card>
            <CardBody>
              <img src={imagen13} />
            </CardBody>
          </Card>
        </Col>
        <Col lg="8" sm="12" md="12">
          <Card>
            <CardBody>
              <AwesomeSlider>
                <div data-src={imagen4} />
                <div data-src={imagen9} /> 
              </AwesomeSlider>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" sm="12" md="12">
          <CardBody>
            <AwesomeSlider>
              <div data-src={imagen1} />
              <div data-src={imagen2} />
              <div data-src={imagen3} /> 
            </AwesomeSlider>
          </CardBody>
        </Col>
        <Col md="6" ml="auto" mr="auto" >
          <CardBody>
            <img src={imagen8} />
          </CardBody>
        </Col>
        <Col md="6" ml="auto" mr="auto">
          <CardBody>
            <img src={imagen10} />
          </CardBody>
        </Col>
      </Row>
      </div>  
      );
    }
}

export default Imagenes;

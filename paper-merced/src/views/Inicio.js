
import React from "react";
import routes from "routes"

import Historia from "views/pages/Historia.js";


import AwesomeSlider from 'react-awesome-slider';

import imagen1 from "assets/img/colegios/bienvenidos.jpg";
import imagen2 from "assets/img/colegios/cancha.jpg";
import imagen3 from "assets/img/colegios/graduado.jpg";
import imagen4 from "assets/img/colegios/niños.jpg";
import imagen5 from "assets/img/colegios/maestros-salon.jpg";
import imagen6 from "assets/img/colegios/maestros-regalos.jpg";
import imagen7 from "assets/img/colegios/maestros-cancha.jpg";

import Logo from "assets/img/colegios/logo.png";


import 'bootstrap'


import {
  CardText,
  Collapse,
  NavItem,
  NavLink, 
  Nav,
  TabContent,
  TabPane,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
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
import { Link } from "react-router-dom";

class Inicio extends React.Component {
  state = {
    horizontalTabs: "mision",
    verticalTabs: "",
    openedCollapses: ["collapseOne", "collapse1"],
  };

  collapsesToggle = (collapse) => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter((item) => item !== collapse),
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses,
      });
    }
  };

  render() {
    return (
      <>
      <div className="content">
          <Row>
            <Col lg="12" md="12">
              <div className="header text-center">
                <Col>
                  <img src={Logo} />
                  <h1 className="title">U.E. Colegio La Merced</h1>
                </Col>
              </div>
            </Col>
            <Col lg="6" md="12">
              <Card className="card-timeline card-plain">
                <CardBody>
                <div className="header text-center">
                  <h3 className="title">Reseña histórica</h3>
              </div>
                <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge warning">
                        <i className="nc-icon nc-sun-fog-29" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="warning" pill>
                          La U.E. Colegio “La Merced”
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          Creada por la Congregación de las Hermanas Mercedarias Misioneras y es una institución subvencionada dependiente de la Asociación Venezolana de Educación Católica (AVEC) y del convenio AVEC con el Ministerio del Poder Popular para la Educación, la cual se encarga de ejecutar, supervisar y evaluar, el nivel educación preescolar, básica y media, diversificada y profesional y egresa bachilleres en la mención de ciencias.  Está adscrita al municipio escolar Maracaibo Nº 02, y funciona en sede propia, ubicada en la Av. 04 Bella Vista. Nº 61-173 Sector Las Mercedes.  
                          </p>
                          <br/>
                          <li className="timeline-inverted">
                        </li>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge warning">
                        <i className="nc-icon nc-single-copy-04" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="warning" pill>
                          Nuestra propuesta educativa  
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          Tiene raíz en el mismo carisma fundacional: “Redimir al hombre cautivo de la ignorancia, promoviendo la acción educativa como forma de liberación”. Por lo tanto, nuestra propuesta como respuesta coherente a nuestra identidad, se concreta en una EDUCACIÓN LIBERADORA, que coloca al hombre Libre, creado por Dios a su imagen y semejanza en el centro de toda acción educativa. 
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col className="text-center" lg="6" md="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                    <div className="danger">
                      <i className="nc-icon nc-favourite-28" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="danger" pill>
                          El proyecto educativo Mercedario  
                        </Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                          En este sentido se justifica en la actualidad por cuanto se apoya en las necesidades e intereses de cada centro mercedario, a través de una visión colectiva de la realidad, cuya principal finalidad es contribuir a que los alumnos logren una educación de mayor calidad. Dentro un espacio integrador de multiples acciones pedagógicas coherentes y articuladas entre sí, que favorecen la identificación de los docentes, el personal y los padres y representantes con el Carisma Educativo de la Merced.                        
                        </p>
                      </div>
                    </div>
                    <div>
                      <UncontrolledDropdown className="btn-rotate" >
                        <DropdownToggle
                          caret
                          className="btn-round"
                          color="info"
                          data-toggle="dropdown"
                          type="button"
                        > Sobre nosotros
                        </DropdownToggle>
                        <DropdownMenu persist>
                          <Link className="nav-link" to={{
                            pathname: "/admin/historia",
                          }}>
                            <DropdownItem>
                              Historia
                            </DropdownItem>
                          </Link>
                          <Link className="nav-link" to={{
                            pathname: "/admin/personas-a-formar",
                          }}>
                            <DropdownItem>
                              Personas a formar 
                            </DropdownItem>
                          </Link>
                          <Link className="nav-link" to={{
                            pathname: "/admin/imagenes",
                          }}>
                            <DropdownItem>
                              imagenes
                            </DropdownItem>
                          </Link>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </Col>
                  </Row>
                </CardBody> 
                <hr/>
                <Row>
                  <Col lg="12" md="12" sm="12">
                    <div className="icon-big icon-warning header text-center">
                      <h5 className="header text-center title m-4">Conoce más sobre nosotros</h5>
                      <strong>Fecha de Fundación: </strong><br/><p>11 de septiembre de 1953</p>
                      <AwesomeSlider>
                        <div data-src={imagen1} />
                        <div data-src={imagen3} />
                        <div data-src={imagen2} />
                        <div data-src={imagen4} /> 
                      </AwesomeSlider>
                    </div>
                  </Col>                   
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12">
              <div className="header text-center">
                <Col>
                  <h3 className="title">Objetivos de la Fundación</h3>
                </Col>
              </div>
            </Col>
            <Col md="6" ml="auto" mr="auto">
              <Card>
                <CardBody className="table-danger">
                  <ul>
                    <li >
                      <p>Extender el Instituto a toda nación según la identidad del mismo y en atención al sentido misionero vivido por las religiosas del Instituto.</p>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" ml="auto" mr="auto">
              <Card>
                <CardBody className="table-warning">
                  <ul>
                    <li>
                      <p>Dar acogida, en la práctica, a la llamada hecha por SS, PIO XII, en cuanto a intensificar la evangelización en América Latina.</p>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" ml="auto" mr="auto">
              <Card>
                <CardBody className="table-warning">
                  <ul>
                    <li>
                      <p>Atender a la insistente petición hecha por el Padre Julio Cesar Faría de hacerse presente como Mercedarias en su Parroquia cuya titular es Nuestra Sra. de las Mercedes.</p>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" ml="auto" mr="auto">
              <Card>
                <CardBody className="table-danger">
                  <ul>
                    <li>
                      <p>Poder hacer frente a las dificultades económicas del Instituto en los críticos años de una sociedad española de la Post-Guerra, mediante la remuneración recibida por unos servicios apostólicos.</p>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <br/>
            <Col lg="12" md="12" sm="12">
              <Card>
                <CardBody>
                  <Col> 
                    <div className="text-center">
                      <Badge color="danger">
                        Misión
                      </Badge>
                    </div>
                    <div>
                      <p>  
                        La misión de la U.E. Colegio “La Merced” 
                        es impartir una formación educativa que 
                        permita el crecimiento integral de las personas 
                        según sus diferentes dimensiones: bio-psico-socio-cultural, 
                        bajo un enfoque transcendente que le permita llegar a ser 
                        capaz de formar seres humanos que puedan aplicar integralmente 
                        el plano cognoscitivo, afectivo y espiritual en su vida.                
                      </p>
                    </div>
                  </Col>
                </CardBody>
                <CardBody>
                  <Col>
                    <div className="text-center">
                      <Badge color="warning">
                        Visión
                      </Badge>
                    </div>
                    <div>
                      <p>  
                        Promover procesos de crecimiento y mejoramiento 
                        continuo en el personal directivo, docente, 
                        administrativo, obrero, así como también en los 
                        y las estudiantes de la U.E. Colegio “La Merced” 
                        para lograr su pleno desarrollo dimensional y su 
                        positiva inserción en la sociedad.               
                      </p>
                    </div>
                  </Col>
                  <hr/>
                  <Row>
                  <Col lg="12" md="12" sm="12">
                    <div className="icon-big icon-warning header text-center">
                      <h5 className="header text-center title m-4">EDUCAR PARA EL AMOR</h5>
                      <AwesomeSlider>
                        <div data-src={imagen5} />
                        <div data-src={imagen6} />
                        <div data-src={imagen7} /> 
                      </AwesomeSlider>
                    </div>
                  </Col>                   
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <br/>
          </Row>
        </div>
      </>
    );
  }
}

export default Inicio;

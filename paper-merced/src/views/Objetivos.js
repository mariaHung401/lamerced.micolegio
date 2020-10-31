/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";

class Objetivos extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="text-center" lg="12" md="12">
            <h1 className="tittle" >Objetivos institucionales</h1>
            </Col>
            <Col className="text-center" md="12">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="nc-icon nc-trophy" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="info" pill>
                            Objetivo
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          Desarrollar una acción educativa integral – 
                          liberadora de acuerdo con nuestro carisma 
                          mercedario y desde nuestra cultura, fundamentada 
                          en los valores éticos y evangélicos que promuevan: 
                          el respeto, la solidaridad, la justicia y el trabajo, 
                          para formar personas verdaderamente cristianas y aptas 
                          para la vida, capaces de dar respuesta a Dios, a la 
                          iglesia y a las necesidades del mundo de hoy en nuestro medio.
                          </p>
                          <hr />
                          <p>
                          Promover una educación integral 
                          donde exista un equilibrio entre 
                          el conocimiento, lo afectivo y lo 
                          espiritual.
                          </p>
                          <hr />
                          <p>
                          Lograr un alumno creativo, participativo, 
                          responsable, crítico y reflexivo, con una 
                          formación integral y capaz de desarrollarse 
                          en una sociedad democrática.
                          </p>
                          <hr />
                          <p>
                          Tomando como modelo a Cristo y a María 
                          fomentar una educación basada en principios 
                          de amor al prójimo, creyente, comprometida y 
                          solidaria para afrontar cualquier dificultad 
                          con la confianza puesta a Díos.
                          </p>
                          <hr />
                          <p>
                          Afianzar en nuestros educandos los 
                          valores y principios que lo lleven a 
                          una mejor relación consigo mismo, con 
                          el prójimo y con Díos para dirigirlo 
                          hacia una libertad plena.
                          </p>
                          <hr />
                          <p>
                          Formar hombres en y para el trabajo con personalidad 
                          madura, respetuoso, con amplio sentido de solidaridad, 
                          auto-crítico, libre y capaz de tomar decisiones 
                          responsables.
                          </p>
                          <hr/>
                          <div className="timeline-footer">
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
                            pathname: "/admin/inicio",
                          }}>
                            <DropdownItem>
                              Inicio
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
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Objetivos;

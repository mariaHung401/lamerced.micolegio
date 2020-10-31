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

import logo from "assets/img/colegios/logo.png";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class Escudo extends React.Component {
  render() {
    return (
      <>
      <div className="content">
          <Row>
            <Col className="text-center" lg="12" md="12">
              <CardHeader>
                <CardTitle className="title" tag="h1">El Escudo Mercedario</CardTitle>
              </CardHeader> 
              <CardBody>
                <Row>
                  <Col sm="5">
                    <img src={logo} />
                  </Col>
                  <Col sm="6">
                    <h5 className="title mt-4 text-danger">Los mercedarios llevan sobre sus 
                    blancos hábitos, al igual que la imagen de Nuestra Señora de la Merced, 
                    el escudo del Rey Don Jaime I de Aragón.  El escudo de la Merced es, sin 
                    duda, el elemento identificador más característico de la Orden. Allá por 
                    donde han pasado los mercedarios aparece, de una u otra forma, el escudo 
                    como signo de presencia mercedaria. Hay multitud de formas y expresiones 
                    artísticas del escudo, dependiendo del momento en que los artistas lo han 
                    diseñado, pero en todos aparecen los elementos más significativos que lo 
                    componen: 
                    </h5>
                  </Col>
                </Row>
              </CardBody>              
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="6">
                      <h2 className="text-warning title">La Cruz.</h2>
                      <p>
                  Es blanca sobre fondo rojo.  Ocupa la parte superior del escudo. 
                  En ella va impresa la decisión entusiasta de la Iglesia de apoyar 
                  la labor redentora de Pedro Nolasco en el momento de su fundación. 
                  Es la cruz de la catedral de Barcelona que el obispo de entonces, 
                  Berenguer de Palou, regala a la Orden como expresión de su apoyo a 
                  la obra redentora de Pedro Nolasco y de su familia religiosa.
                      </p>
                    </Col>
                    <Col sm="6">
                      <h2 className="text-warning title">Las Barras. </h2>
                        <p>Son rojas y amarillas. Ocupan la parte inferior del escudo. 
                  Son las barras de la corona de Aragón. El Rey Jaime I, 
                  entusiasta colaborador de la Orden de la Merced, presente 
                  en su fundación en la catedral de Barcelona el día 10 de 
                  agosto de 1218, regala a la Orden su escudo como expresión 
                  de su apoyo a la obra redentora. 
                    </p>
                    </Col>
                    <Col sm="12">
                      <p>
                      El escudo se convierte así en 
                      pasaporte real más allá de las fronteras a la hora de 
                      ir a las redenciones y mostrar credenciales de autoridad. 
                      Por eso verás muchas veces el escudo coronado con la corona 
                      real. La merced es, además de una misión religiosa, una 
                      tarea social necesaria. <br/> A lo largo de la historia el escudo 
                      mercedario ha sido presentado en mil formas y expresiones. 
                      Clásicos, modernos, vanguardistas, todos expresan el hondo 
                      sentir mercedario de compromiso por la libertad. Cuando veas 
                      un escudo en un religioso, religiosa o laico, estarás viendo 
                      a un comprometido con la liberación y entusiasta de devoto de 
                      María de la Merced.
                      </p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="text-center" lg="12" md="12">
              <CardHeader>
                <CardTitle className="title" tag="h1">Bandera y estandarte</CardTitle>
              </CardHeader>
              <Card>
            <CardBody>
              <Row>
                <Col sm="12">
                  <h4 className="text-warning title"> Esta bella trilogía de nuestros emblemas Mercedarios:</h4>
                  <p>Escudo, Bandera y Estandarte, son una preciosa síntesis de la Filosofía 
                    de nuestra institución, de las características de nuestra ideología, 
                    de los criterios del carisma y valores mercedarios: Justicia, libertad 
                    y solidaridad, con que las Hermanas Mercedarias Misioneras queremos educar 
                    bajo el MODELO DE EDUCACIÓN LIBERADORA, para la formación integral de la 
                    niñez y de la juventud del Colegio “La Merced”.
                  </p>
                </Col>
                <Col sm="12">
                  <h4 className="text-warning title">La bandera al igual que el 
                  estandarte está confeccionada por una tela de color blanco 
                  y en el centro está ubicado el escudo mercedario, y a su 
                  alrededor reza el lema:  </h4>
                    <p>EDUCAR PARA EL AMOR. COLEGIO “LA MERCED”. 
                      El blanco, simboliza pureza y paz. La pureza que 
                      brilla en los ojos y es transparencia del alma de 
                      nuestra niñez y nuestra juventud, siendo el principal 
                      elemento para lograr una convivencia de paz. 
                      El escudo y su lema, simboliza el amor que llena 
                      los corazones de toda la familia mercedaria, dispuesto 
                      a abrirse al prójimo como parte importante de su proyecto 
                      de vida.
                    </p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Escudo;

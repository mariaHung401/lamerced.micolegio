
import React from "react";

import virgenMerced from "assets/img/colegios/virgenMerced.png";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Eponimo extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="text-center" lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle className="title text-danger" tag="h1">La Virgen De La Merced</CardTitle>
                </CardHeader>
                <CardBody>
                  <div>
                    <img src={virgenMerced} />
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="12">
                      <h5>
                      La Virgen de la Merced o Nuestra Señora de las 
                      Mercedes es una de las advocaciones marianas de la 
                      Bienaventurada Virgen María. Se la llama también Generala 
                      de los Ejércitos Celestiales, la Mujer Vestida de Sol y 
                      la Reina de la Paz. En su conmemoración se ha establecido 
                      la fiesta de la Merced o de las Mercedes, el día 24 de 
                      septiembre. Se dice que el 1 de agosto de 1218, fiesta del 
                      santo fundador Pedro Nolasco tuvo una visita de la Santísima 
                      Virgen, dándose a conocer como La Merced, que lo exhortaba a 
                      fundar una Orden religiosa con el fin principal de redimir a 
                      aquellos cristianos cautivos. En ese momento, la península 
                      Ibérica estaba dominada por los musulmanes, y los piratas 
                      sarracenos asolaban las costas del Mediterráneo, haciendo 
                      miles de cautivos a quienes llevaban al norte de África.
                      </h5>
                    </Col>
                    <Col sm="12">
                      <h5>
                      Pedro Nolasco impulsó la creación de la Orden de la Merced 
                      Celeste, Real y Militar Orden de la Merced, que fue fundada 
                      en la Catedral de Barcelona con el apoyo del rey Jaime I el 
                      conquistador. Se calcula que fueron alrededor de trescientos 
                      mil los redimidos por los frailes mercedarios del cautiverio 
                      de los musulmanes. Fundada en 1218, se tienen testimonios de 
                      este nombre desde mediados del siglo XIII. En las primeras 
                      Constituciones de la Orden, en 1272, la Orden recibe ya el 
                      título de "Orden de la Virgen de la Merced de la Redención de 
                      los cristianos cautivos de Santa Eulalia de Barcelona".
                      </h5>
                    </Col>
                    <Col sm="12">
                      <h5>
                      En el año 1265 aparecieron 
                      las primeras monjas de la Merced.
                      Los seguidores de la Orden de la Merced estuvieron
                      entre los primeros misioneros de América, en la isla 
                      de La Española o República Dominicana
                      </h5>
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

export default Eponimo;

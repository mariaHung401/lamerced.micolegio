
import React from "react";

import imagen1 from "assets/img/colegios/maestra.jpg";
import imagen2 from "assets/img/colegios/maestros-cancha.jpg";
import imagen3 from "assets/img/colegios/maestros-salon.jpg";

import {
  CardTitle,
  Badge,
  Card,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";

class Historia extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row> 
            <Col lg="12" md="12" >
              <CardTitle className="title text-center" tag="h3">
                Acontecimientos en la Historia de la Comunidad:
                <hr/><h5>Año 1953</h5>
              </CardTitle>
            </Col>
            <Col lg="12" md="12">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="nc-icon nc-air-baloon" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="info" pill>
                            Año 1953
                          </Badge>
                        </div>
                        <div className="timeline-body">
                        <p>Viaje de Barcelona (España) a New York y a Maracaibo: 09 – 09. 
                          Del aeropuerto de Prat, salieron las hermanas María del Espíritu 
                          Santo, Piedad de María Martín B., Natividad de María Abad y Emilia 
                          Armengol, en el mismo vuelo viajaba María Adoración Porqueras con 
                          destino a Ecuador. En New York por ser transeúntes sin visado, la 
                          Embajadora Española las custodiaron a las 12 horas de permanencia 
                          en el Hotel Princep´s. En la mañana del día 11, separándose de María
                          Adoración, emprendieron viaje rumbo a Maracaibo. La llegada a 
                          Maracaibo coincidió con el día Mariano de Nuestra Sra. De Coromoto, 
                          Patrona de Venezuela. Al pie de la escalera de abordaje estaba el P. 
                          Julio César Faría acompañado de la tripulación, para dar la Bienvenida a 
                          las hermanas, estas iban revestidas con la capa blanca de Solemnidad, 
                          en los pasillos de Grano de Oro, muchos religiosos y feligreses de la 
                          Parroquia Las Mercedes, y entre ellos, el Excmo. Sr. Obispo Marco Sergio 
                          Godoy, que dio la bendición y acogida a las viajeras.</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="nc-icon nc-tag-content" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="info" pill>
                            Año 1953
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          Realizados los trámites legales de extranjería, 
                          toda la comitiva se trasladó en “Lujosos carros” 
                          hacia el templo de las Mercedes, cuyas campanas al 
                          vuelo acompañaron el canto de Te Deum. A continuación 
                          el P. Faría hizo entrega de las llaves de la Quinta 
                          “Claraval”, lugar de residencia y de escuela, para la 
                          comunidad. En esta quinta se había preparado una recepción 
                          amistosa con bebidas refrescantes al intenso calor marabino. 
                          La casa había sido adecuadamente preparada al estilo de 
                          “Convento Español”, por las hermanas Misioneras de Santa Ana. 
                          El costo total del viaje, así como muchos de los siguientes con 
                          nuevas Hermanas, había sido obsequiado por el Gobierno de Venezuela, 
                          gracias a las gestiones realizadas por el P. Faría.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="nc-icon nc-istanbul" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="info" pill>
                            Año 1953
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          El 02 de octubre, se iniciaron las inscripciones 
                          para la escuelita Parroquial de las Mercedes. 
                          Las primeras inscripciones fueron Ana Ríos C y 
                          su prima Ángela Ríos. Pasados los años, Ana se 
                          convierte en religiosa Mercedaria.  Comienza la 
                          Catequesis en el típico barrio Santa Rosa de Agua.
                          </p>
                        </div>
                        {/* <div className="timeline-footer">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="info"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="nc-icon nc-settings-gear-65" />
                            </DropdownToggle>
                            <DropdownMenu persist>
                              <DropdownItem
                                href="#"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div> */}
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12" md="12" >
              <CardTitle className="title text-center" tag="h3">
                <h5>Año 1954</h5>
              </CardTitle>
            </Col>
            <Col lg="12" md="12">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-bulb-63" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success" pill>
                            Año 1954
                          </Badge>
                        </div>
                        <div className="timeline-body">
                        <p>El Sr. Obispo propuso a las hermanas que abran 
                          por su cuenta un colegio Mercedario, dejando para 
                          más adelante la atención a la escuela parroquial, 
                          por la carestía de centros educativos valiosos en 
                          la ciudad. </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-book-bookmark" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success" pill>
                            Año 1954
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          El P. Faría apoyó esta indicación, entregando a la 
                          Congregación las escrituras de propiedad de la Quinta 
                          “Claraval”. Y la bondadosa generosidad del Sr. Magín Blasi 
                          y esposa ofreciendo el préstamo y la construcción de las 
                          primeras aulas, hizo posible la realización del Colegio 
                          “La Merced”, se iniciaron las obras el 24 de agosto. Junto 
                          a la quinta, hay un terreno llamado “la Hoyada”, excavado a 
                          veinte metros de profundidad, con un área de 500m2. En el fondo 
                          y de 1.000m2 en lo alto, por la inclinación de las paredes de 
                          piedra, era propiedad del Ejecutivo del Estado Zulia por haber 
                          servido de aljibe para la ciudad. El P. Faría realizó las gestiones 
                          para obtener este terreno, el Ejecutivo, generosamente cedió las 
                          escrituras a la Congregación Mercedaria, con la única condición de 
                          que se usara como beneficio a la educación. 
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-badge" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success" pill>
                            Año 1954
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          El 02 de octubre, se iniciaron las inscripciones 
                          para la escuelita Parroquial de las Mercedes. 
                          Las primeras inscripciones fueron Ana Ríos C y 
                          su prima Ángela Ríos. Pasados los años, Ana se 
                          convierte en religiosa Mercedaria.  Comienza la 
                          Catequesis en el típico barrio Santa Rosa de Agua.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-compass-05" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success" pill>
                            Año 1954
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          En octubre llego una nueva expedición de religiosas; 
                          viajaron en el barco Chirruca; con un mar de fondo que 
                          ocasionó el malestar a todo pasajero y tripulación: María 
                          Soledad Alonso Romera (nombre de Bautismo María), de 34 años 
                          de edad, nacida en Almería (España), ingresó en el Noviciado 
                          de Corella en 1937, procedente de la comunidad de Santander y 
                          fue la primera Superiora de la Ciudad, estuvo varios meses 
                          enferma, a consecuencia del mal viaje.  María Fernanda Castro 
                          Andrade (nombre de Bautismo Fanny), natural de el Ferrol 
                          (España) el 12 de diciembre de 1924. Conoció a la Congregación 
                          por el P. Peláez e ingresó en Corella, el 16 de marzo de 1951, 
                          procedía de la comunidad de San Feliu, la única pasajera en el 
                          barco que no mareó, sino que pudo ayudar a los demás. 30 años.  
                          Teresa de Jesús Martín – Menasalvas Romo (por Bautismo Estefanía) 
                          nacida en herencia de los Caballeros (Cuidad Real - España) en 1924. 
                          Ingresó a Corella el año 1951. De esta comunidad procedía. 30 años. 
                          Juntamente viajaron las dos fundadoras de Caraballeda; Amparo  Arbuniés, 
                          Mesonada y María del Smo. Sacramento Moral Ortega. En la primera tanda 
                          de Primera Comunión se prepararon unos veinte niños, pero el día señalado 
                          llegaron solamente tres: Ana Ríos,  Ángela Ríos y José Francisco Rincón.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-bus-front-12" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success" pill>
                            Año 1954
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                          En agosto las hermanas se trasladaron a Mérida para 
                          realizar los EE.EE en la Casa de las Hnas. Esclavas de 
                          Cristo Rey, “San Javier del Valle”, junto con otras Congregaciones, 
                          costumbre que permanecerá. Se adquirió una camioneta de pasajeros 
                          por valor de 8.000 bolívares al servicio del alumnado. La primera 
                          chofer fue María Fernanda Castro Andrade, quién hacia cada día dos 
                          viajes a Santa Cruz de Mara para recoger alumnos.
                          Obsequio del P. Faría fue la Imagen de Santa María 
                          de Cervelló, obra del escultor Espelta, que había ya 
                          creado la Imagen de Nuestra Madre del templo Nuevo.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12" md="12" >
              <CardTitle className="title text-center" tag="h3">
                <h5>Año 1955</h5>
              </CardTitle>
            </Col>
            <Col lg="12" md="12">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge warning">
                        <i className="nc-icon nc-satisfied" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="warning" pill>
                            Año 1955
                          </Badge>
                        </div>
                        <div className="timeline-body">
                        <p>Llegan a Venezuela los PP. 
                          Mercedarios de la Provincia Inmaculada Concepción, Aragón. 
                          El P. José María Fabián fue acogido por el P. Faria y por la 
                          Comunidad.Llegaron otras religiosas de España, Comunidad San Gervasio, 
                          en Carnación Sunyol Ros (Bautismo Angela), nacida en San Andrés de la 
                          Barca – Barcelona – España en 1897, 45 años.
                          Del Perú: María del Sagrado Corazón Salas. 
                          Huamán (Bautismo Laura), nacida en Trujillo – 
                          Perú, en 1920. Era postulante el Convento de Mercedarias en 
                          Lima cuando en 1936 se fundieron con nuestra congregación. 35 
                          años. Del Perú una hermana agregada, una tercera Orden Mercedaria: 
                          Teresa Berrospi.
                          </p>
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

export default Historia;

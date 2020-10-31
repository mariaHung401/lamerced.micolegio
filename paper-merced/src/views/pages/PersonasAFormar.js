
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class PersonasAFormar extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Card>
            <CardBody>
              <CardTitle className="text-center pl-3">
                <h3 className="title">Perfil de las personas que deseamos formar</h3>
                <p className="text-danger title">
                El perfil deseado y buscado para nuestros 
                estudiantes es formar seres conscientes de 
                sí mismos, críticos en su proceso de liberación 
                personal que sea capaz de desarrollar plenamente 
                sus dimensiones biológicas, psicológicas, sociales 
                y espirituales. Una persona que vaya profundizando 
                en los valores humanos-cristianos, que asuma su 
                compromiso de servicio y transformación social.
                </p>
              </CardTitle>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle className="text-center pl-3">
                <h3>En base a esto la U.E. Colegio 
                    “La Merced” busca la formación 
                    de una persona:</h3>
              </CardTitle>
              <Row>
                <Col sm="6">
                  <p className="text-danger">
                  Consciente y respetuoso de los derechos y deberes propios y ajenos.
                  </p>
                  <p>
                  Reflexivo, analítico, crítico y comprometido 
                  con los cambios de nuestra institución y sociedad.
                  </p>
                  <p className="text-warning">
                  Con sentido de pertenencia a la U.E. Colegio “La Merced”, 
                  manifestado en la práctica de los valores mercedarios 
                  justicia, libertad y solidaridad. 
                  </p>
                  <p>
                  Autentica, honesta, responsable de sí, 
                  en pensamientos, palabras y acciones, con amor por la vida y la paz. 
                  </p>
                  <p>
                  Responsables ante sí mismos, la comunidad escolar 
                  y la sociedad respecto de sus acciones.
                  </p>
                </Col>
                <Col sm="6">
                  <p className="text-success">
                  Que valore nuestro idioma 
                  español y nuestras tradiciones como 
                  reafirmación de su identidad regional y nacional.
                  </p>
                  <p>
                  Que reconozca la familia como base esencial en su formación humano cristiana.
                  </p>
                  <p>
                  Que tenga conciencia ecológica, 
                  valoración del patrimonio natural y cultural del país y del planeta.
                  </p>
                  <p className="text-primary">
                  Creativo, espontáneo, sensible, curioso e imaginativo.
                  </p>
                  <p>
                  Abierto al cambio, emocionalmente seguro, con motivación interna.
                  </p>
                  <p>
                  Integrados con el mundo actual, 
                  siendo honestos, justos y respetuosos de los demás y del entorno.
                  </p>
                </Col>
                <Col sm="6">
                  <p className="text-success">
                  Con espíritu de investigación, exploración e innovación.
                  </p>
                  <p>
                  Que valore el esfuerzo, el trabajo y el estudio 
                  como fuentes de desarrollo personal y social.
                  </p>
                  <p className="text-primary">
                  Que reconozca el lenguaje como medio de 
                  comunicación y satisfacción de necesidades personales y grupales.
                  </p>
                  <p>
                  Que reconozca la lectura y la escritura como medio para 
                  el desarrollo de todas sus potencialidades cognitivas y creativas.
                  </p>
                  <p className="text-danger">
                  Que aprecie, participe y disfrute las actividades deportivas, 
                  culturales y religiosas, promovidas por el colegio.
                  </p>
                  <p>
                  Creativos, disciplinados y perseverantes en el desarrollo de sus 
                  tareas y desafíos, con capacidad de reconocer y superar la adversidad.
                  </p>
                </Col>
                <Col sm="6">
                  <p className="text-info">
                  Que reconozca la salud física y mental 
                  como factores de prevención personal y social.
                  </p>
                  <p>
                  Que trabaje en equipo y mantenga relaciones 
                  interpersonales abiertas y positivas.
                  </p>
                  <p>
                  Promueva el mejoramiento personal y social a 
                  través de su participación activa y consciente en acciones comunitarias.
                  </p>
                  <p>
                  La U.E. Colegio “La Merced” en su quehacer diario debe promover 
                  que todos los y las estudiantes alcancen este perfil de egreso.
                  </p>
                  <p className="text-warning">
                  Regidos hacia la excelencia, exigentes en las metas que se 
                  proponen y en el desarrollo de todas sus potencialidades
                  </p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default PersonasAFormar;

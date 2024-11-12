import React, { useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import BarProgress from '../componentes/BarProgress';


const Curriculum = () => {

    const [progress, setProgress] = useState(0); // Inicialmente, la barra estará en 0%
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetValue = entry.target.getAttribute('data-value')
                    setProgress(parseInt(targetValue, 10)); // Configuramos el progreso al 75% cuando es visible
                    observer.unobserve(entry.target); // Dejar de observar después de la primera animación
                }
            });
        });

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => observer.disconnect(); // Limpiamos el observador al desmontar
    }, []);


    return (
        <div>
            <section>
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-7">
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                    <img className="personaje" src="src/assets/img/avatarLibro.png" alt="avatarLibro" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            <div className="text-center">
                                <h4 className="fw-bolder">
                                    <span className="fs-5">Front End Developer y Analista de datos enfocada en el aprendizaje
                                        continuo y autodidacta, en busca de resultados de calidad. Con
                                        creciente curiosidad por la tecnología, en búsqueda de nuevos retos.</span>
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div className='d-flex flex-column align-items-center'>
                <h2>Experiencia Laboral</h2>

                <Card className='card col-12 col-md-6 my-3'>
                    <Card.Header>Ayudante TI</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Apoyo a estudiantes con desarrollo de desafíos y asignaciones. <br />
                            Tecnología Javascript - Node Js - Express - VUE <br />
                            Evaluador Técnico
                        </Card.Text>
                        <div className="blockquote-div">
                            Academia Edutecno | <cite title="Source Title">De Junio 2024 -
                                Octubre 2024</cite>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='card col-12 col-md-6 my-3'>
                    <Card.Header>Ayudante TI</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Apoyo a estudiantes con desarrollo de desafíos y asignaciones. <br />
                            Tecnología Javascript - Node Js - Express - PostgreSQL<br />
                            Evaluador Técnico
                        </Card.Text>
                        <div className="blockquote-div">
                            Academia Desafío Latam | <cite title="Source Title">De enero 2024
                                - Junio 2024</cite>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='card col-12 col-md-6 my-3'>
                    <Card.Header>Controlador de Contratos</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Analizar, verificar e interpretar datos en la Base de Información <br />
                            de Contrato. Consolidar estadísticas operacionales, monitoreo<br />
                            de flota, porcentaje de avance y evaluación de los servicios.
                        </Card.Text>
                        <div className="blockquote-div">
                            TreSur | <cite title="Source Title">De agosto de 2020 - Marzo de
                                2023</cite>
                        </div>
                    </Card.Body>
                </Card>
            </div>


            <div className='d-flex flex-column align-items-center'>
                <h2>Historial Académico</h2>

                <Card className='card col-12 col-md-6 my-3'>
                    <Card.Header>Bootcamp FrontEnd</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Html y Css Avanzado <br />
                            Javascript - ES6 <br />
                        </Card.Text>
                        <div className="blockquote-div">
                            Laboratoria | <cite title="Source Title">Marzo 2023 - Octubre
                                2023</cite>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='card col-12 col-md-6 my-3'>
                    <Card.Header>Bootcamp FrontEnd React</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Html y Css Avanzado <br />
                            Javascript - ES6<br />
                            Rect Js
                        </Card.Text>
                        <div className="blockquote-div">
                            Academia Desafío Latam | <cite title="Source Title">De Marzo 2022 -
                                Nov 2022</cite>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='card col-12 col-md-6 my-3'>
                    <Card.Header>Bootcamp Data Science</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Introducción a la programación con Python <br />
                            Fundamentos de Data Science<br />
                            Machine Learning - SQL para data Science <br />
                            Big Data- Proyecto Data Science
                        </Card.Text>
                        <div className="blockquote-div">
                            Academia Desafío Latam | <cite title="Source Title">De Julio 2019
                                a Abril 2020
                                2023</cite>
                        </div>
                    </Card.Body>
                </Card>
            </div>


            <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="card-header">
                    <h2>Habilidades de Desarrollo</h2>
                </div>
                <div className="d-flex flex-wrap justify-content-center ">
                    <div className="d-flex flex-wrap justify-content-center">
                        <BarProgress label="HTML" value={80} />
                        <BarProgress label="CSS - Bootstrap" value={80} />
                        <BarProgress label="JavaScript" value={75} />
                        <BarProgress label="React Js" value={75} />
                        <BarProgress label="Firebase" value={75} />
                        <BarProgress label="Postgres" value={75} />
                        <BarProgress label="Node Js" value={70} />
                        <BarProgress label="Python" value={50} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Curriculum

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Proyectos = () => {
    return (
        <div>
            <div className="pizarra">
                <h1>PROYECTOS</h1>

                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <a target="_blank" href="https://github.com/LindaLobo/DEV006-social-network">
                            <img
                                className="d-block w-100"
                                src="/img/foodiegram.png" alt="foodiegram"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a target="_blank" href="https://github.com/LindaLobo/DEV006-burger-queen-api-client">
                            <img
                                className="d-block w-100"
                                src="/img/burger.png" alt="burger"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a target="_blank" href="https://github.com/LindaLobo/Reto-Konecta">
                            <img
                                className="d-block w-100"
                                src="/img/conecta.png" alt="conecta"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a target="_blank" href="https://github.com/LindaLobo/UPSK-AI-APPS-001-chat-with-your-files">
                            <img
                                className="d-block w-100"
                                src="/img/chatbot.png" alt="chatbot"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a target="_blank" href="https://github.com/LindaLobo/cliente_potter">
                            <img
                                className="d-block w-100"
                                src="/img/magos.png" alt="magos"
                            />
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    )
}

export default Proyectos

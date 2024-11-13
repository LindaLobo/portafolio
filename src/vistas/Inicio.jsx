import React from 'react'

const Inicio = () => {
  return (
    <div>
        <header className=" bg-light py-5">
        <div className=" px-5 pb-5">
            <div className="row gx-5 align-items-center">
                <div className="col">
                    <div className="text-center">
                        <h1 className="display-2 fw-bolder mb-5"><span className="principalText">Desarrolladora Front End</span></h1>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-center mb-3">
                            <a className="btn btn-dark" href="/curriculum">Curriculum</a>
                            <a className="btn btn-dark" href="/proyectos">Portafolio</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                        <div className="profile bg-gradient-primary-to-secondary">
                            <img className="avatar" src="/img/avatarSalduo.png" alt="avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section className="sobreMi">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-xxl-8">
                    <div className="text-center my-5">
                        <h2 className="display-5 fw-bolder"><span>Sobre Mi</span></h2>
                        <p className="lead fw-light mb-4">Front End Developer y Analista de datos enfocada en el aprendizaje continuo y autodidacta, en busca de resultados de calidad. Con creciente curiosidad por la tecnología, en búsqueda de nuevos retos.</p>
                        <div className="d-flex justify-content-center fs-2 gap-4">
                            <a className="text-gradient" href="https://www.linkedin.com/in/linda-aguilar-lobo/"><i className="fa-brands fa-linkedin" style={{color: "#df72d0"}}></i></a>
                            <a className="text-gradient" href="https://github.com/LindaLobo"><i className="fa-brands fa-github" style={{color: "#df72d0"}}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Inicio

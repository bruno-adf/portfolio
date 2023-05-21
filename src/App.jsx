import './Style/reset.css'
import './Style/General.css'
import './Style/About.css'
import './Style/Landing.css'
import './Style/Portfolio.css'
import './Style/Animation.css'
import './Style/Footer.css'
import './Animations'
import { SiJavascript, SiCss3, SiReact, SiMysql, SiMongodb, SiNodedotjs, SiWhatsapp } from 'react-icons/si'
import { GrInstagram, GrLinkedinOption, GrGithub } from 'react-icons/gr'

function App() {
  
  const scrollToAbout = () => {
    var aboutTarget = document.querySelector('.about')
    var aboutPos = aboutTarget.getBoundingClientRect().top + window.scrollY
    aboutPos = aboutPos - 50
    window.scrollTo({behavior: 'smooth', top: aboutPos})
    console.log(aboutPos)
  }

  const scrollToPortfolio = () => {
    var portfolioTarget = document.querySelector('.portfolio')
    var portfolioPos = portfolioTarget.getBoundingClientRect().top + window.scrollY
    portfolioPos = portfolioPos - 50
    window.scrollTo({behavior: 'smooth', top: portfolioPos})
  }

  return (
    <div>
      <header>
        <h2>Bruno Aguirre</h2>
        <nav>
          <p onClick={() => scrollToAbout()}>Sobre</p>
          <p onClick={() => scrollToPortfolio()} style={{marginLeft: '15px'}}>Portfólio</p>
        </nav>
      </header>
      <main>
        <section className='landing'>
          <div className='fadeUpOnce'>
            <p>Bem vindo ao meu portfólio</p>
            <h1>Desenvolvedor<br />Full-Stack.</h1>
          </div>
          <div className='icons'>
            <SiJavascript className='landingIcon' size={'45px'} color='#98FB0E' />
            <SiCss3 className='landingIcon' size={'45px'} color='#98FB0E' />
            <SiMongodb className='landingIcon' size={'45px'} color='#98FB0E' />
            <SiMysql className='landingIcon' size={'45px'} color='#98FB0E' />
            <SiReact className='landingIcon' size={'45px'} color='#98FB0E' />
            <SiNodedotjs className='landingIcon' size={'45px'} color='#98FB0E' />
          </div>
        </section>
        <section className='about'>
          <h2 className='fadeDown'>Quem sou eu</h2>
          <div className='container'>
            <aside className='about-1 fadeRight'>
              <h3 style={{ marginBottom: '10px' }}>Como cheguei aqui</h3>
              <p style={{ textIndent: '10px' }}>Do fascínio em jogos surgiu uma dúvida de como tudo era feito, aos 13 anos, começo meus estudos em programação e desenvolvimento de games. Fiz alguns jogos na Unity3D, e hoje foco em desenvolvimento web.</p>
              <p style={{ marginBottom: '20px', textIndent: '10px' }} className='about-paragraph'>Amo programar e o faço por amor pela área, acho incrível todos os detalhes desde a construção do software até a maneira como funciona o fluxo de trabalho.</p>
              <h3 style={{ marginBottom: '5px' }}>Hobbies favoritos</h3>
              <p style={{ marginBottom: '20px' }}>Jogar, aprender coisas aleatórias</p>
            </aside>
            <aside className='about-2 fadeUp'>
              <div className='photo'></div>
              <div className='about-buttons'>
                <div className='icon'><GrInstagram onClick={() => window.open('https://www.instagram.com/brunoadf.dev/')} style={{position: 'absolute', zIndex: '2'}} size={'25px'}/></div>
                <div className='icon'><GrLinkedinOption onCanPlay={() => window.open('https://www.linkedin.com/in/brunoadf/')} size={'25px'} /></div>
                <div className='icon'><SiWhatsapp onClick={() => window.open('https://wa.me/5551985760709')} size={'25px'} /></div>
                <div className='icon'><GrGithub onClick={() => window.open('https://www.github.com/bruno-adf')} size={'25px'} /></div>
              </div>
            </aside>
            <aside className='about-3 fadeLeft'>
              <h3 style={{ marginBottom: '5px' }}>Minha idade</h3>
              <p style={{ marginBottom: '20px' }}>Tenho 20 anos!</p>
              <h3 style={{ marginBottom: '5px' }}>Meus idiomas</h3>
              <p style={{ marginBottom: '20px' }}>Português é meu idioma materno, também sei ler, ouvir e escrever em Inglês, na comunicação me viro muito bem.</p>
              <h3 style={{ marginBottom: '5px' }}>Minha ambição</h3>
              <p style={{ marginBottom: '20px' }}>O que me move é, além de ter uma família de pessoas batalhadoras e querer ajudar cada um deles, é evoluir como ser humano e conhecer cada canto desse mundo com a pessoa que eu escolhi dividir essa jornada que é a vida.</p>
            </aside>
          </div>
        </section>
        <section className='portfolio'>
          <h2 className='fadeDown'>Meu trabalho</h2>
          <div className='container'>
            <div className='video fadeRight'></div>
            <div className='info'>
              <div className='fadeLeft'>
                <h3>Gerenciador de projetos - Beaumont</h3>
                <p style={{ marginBottom: '5px' }} className='italic'>ReactJS, JavaScript, CSS, NodeJS, MongoDB.</p>
                <p style={{ marginBottom: '5px', textIndent: '10px' }}>A empresa Beaumont é responsável pela criação de ambientes planejados, e com o crescimento da empresa e demanda de projetos, surgiu-se a necessidade de uma melhor organização dos projetos, é aí que entra nosso projeto:</p>
                <p style={{ textIndent: '10px' }}>Um organizador de projetos com autenticação de usuários, cálculos internos e uma visualização clara e objetiva de cada parte importante dos projetos.</p>
              </div>
              <div className='buttons fadeUp'>
                <button className='button'><h3>Veja o projeto</h3></button>
                <button className='button'><h3 onClick={() => window.open('http://www.github.com/bruno-adf/beaumont-project-manager', "_blank", "noreferrer")}>Projeto no GitHub</h3></button>
              </div>
            </div>
          </div>
          <div className='container middle'>
            <div className='video fadeLeft'></div>
            <div className='info'>
              <div className='fadeRight'>
                <h3>Gerenciador de projetos - Beaumont</h3>
                <p style={{ marginBottom: '5px' }} className='italic'>ReactJS, JavaScript, CSS, NodeJS, MongoDB.</p>
                <p style={{ marginBottom: '5px', textIndent: '10px' }}>A empresa Beaumont é responsável pela criação de ambientes planejados, e com o crescimento da empresa e demanda de projetos, surgiu-se a necessidade de uma melhor organização dos projetos, é aí que entra nosso projeto:</p>
                <p style={{ textIndent: '10px' }}>Um organizador de projetos com autenticação de usuários, cálculos internos e uma visualização clara e objetiva de cada parte importante dos projetos.</p>
              </div>
              <div className='buttons fadeUp'>
                <button className='button'><h3>Veja o projeto</h3></button>
                <button className='button'><h3>Projeto no GitHub</h3></button>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='video fadeRight'></div>
            <div className='info'>
              <div className='fadeLeft'>
                <h3>Gerenciador de projetos - Beaumont</h3>
                <p style={{ marginBottom: '5px' }} className='italic'>ReactJS, JavaScript, CSS, NodeJS, MongoDB.</p>
                <p style={{ marginBottom: '5px', textIndent: '10px' }}>A empresa Beaumont é responsável pela criação de ambientes planejados, e com o crescimento da empresa e demanda de projetos, surgiu-se a necessidade de uma melhor organização dos projetos, é aí que entra nosso projeto:</p>
                <p style={{ textIndent: '10px' }}>Um organizador de projetos com autenticação de usuários, cálculos internos e uma visualização clara e objetiva de cada parte importante dos projetos.</p>
              </div>
              <div className='buttons fadeUp'>
                <button className='button'><h3>Veja o projeto</h3></button>
                <button className='button'><h3>Projeto no GitHub</h3></button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

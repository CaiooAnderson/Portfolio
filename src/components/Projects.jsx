import { useState, useRef } from 'react';
import { Box, Button, Typography, Modal, Card, CardContent, CardActions, Fade, Zoom } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaAngular} from "react-icons/fa";
import { SiJavascript, SiTypescript } from 'react-icons/si';
// import { FaBootstrap, FaWordpress } from "react-icons/fa";
// import { SiPostgresql, SiMui } from "react-icons/si";
import CloseIcon from '@mui/icons-material/Close';
import Hint from './Hint';

const Projects = () => {

    const tips = [
        'Aqui estão meus projetos, ou como gosto de chamar: "meus experimentos de laboratório", onde a mágica do código acontece!',
        'Cada projeto mostra um passo na minha jornada como desenvolvedor, mostrando o que posso criar.',
        'Acredito que os projetos nunca tem um final ao certo. Sempre possuem uma cara nova, uma nova história..',
        'Uso projetos pessoais como estudo prático para alcançar novos objetivos.',
        'Se seu projeto não ficou como queria, relaxe. Projetos mudam sempre que você adiciona, inova ou edita algo.',
        'Quanto você dedicaria aos seus projetos? Eu costumo me dedicar mais aos meus projetos do que a séries como Stranger Things.',
        'Utilizar o repositório do GitHub para salvar projetos é uma boa ideia!',
        'Projetos não precisam de 100 páginas para serem perfeitos. Ninguém gostaria de ler tanto.',
        'Meu repositório é como um laboratório, o experimento pode explodir, bombar, ou nem funcionar.',
        'Estes projetos destacam minha habilidade em trabalhar com diferentes tecnologias e frameworks.',
        'Bônus: Por que fazer um simples "Hello World" enquanto você pode construir um universo inteiro?'
    ];

    const [filter, setFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const carouselRef = useRef(null);

    const importAll = (r) => r.keys().map(r);
    const capas = importAll(require.context('../assets/projetos-capa', false, /\.(gif)$/));

    const projetos = [
        {
            name: 'SW-Info',
            categoria: ['Front-End', 'Back-End'],
            imagemProjeto: capas[0],
            desc: 'Projeto utilizando Angular, Angular Material e aprimorando conhecimento em TypeScript com API.',
            linguagens: [<FaAngular />, <SiTypescript />, <FaCss3Alt />, <FaHtml5 />],
            repoLink: 'https://github.com/CaiooAnderson/SW-Info',
            siteLink: 'https://sw-info-priv.vercel.app/' },
        {
            name: 'Portfólio',
            categoria: 'Front-End',
            imagemProjeto: capas[1],
            desc: 'Portfólio pessoal para aprimorar e compartilhar meu conhecimento.',
            linguagens: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <FaReact />],
            repoLink: 'https://github.com/CaiooAnderson/Portfolio',
            siteLink: 'https://portfolio-caio-zeta.vercel.app/' },
        {
            name: 'MaterialUI-Space',
            categoria: 'Front-End',
            imagemProjeto: capas[2],
            desc: 'Projeto utilizando TypeScript e React. Demonstrando cursos em que participei de uma empresa de e-Astronomia.',
            linguagens: [<SiTypescript />, <FaReact />],
            repoLink: 'https://github.com/CaiooAnderson/MaterialUI-Space',
            siteLink: 'https://material-ui-priv.vercel.app/' },
        { 
            name: 'Cartas Tridimensionais', 
            categoria: 'Front-End', 
            imagemProjeto: capas[3],  
            desc: 'Experiência visual interativa com cartas em 3D e animações dinâmicas.', 
            linguagens: [<FaHtml5 />, <FaCss3Alt />], 
            repoLink: 'https://github.com/CaiooAnderson/Star-Card', 
            siteLink: 'https://star-card.vercel.app/' },
        { 
            name: 'Tabela de Ranking', 
            categoria: 'Front-End', 
            imagemProjeto: capas[4],  
            desc: 'Tabela com a temática de Pokémon para criação e gerenciamento de novos usuários.', 
            linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />], 
            repoLink: 'https://github.com/CaiooAnderson/Tabela-de-Jogos', 
            siteLink: 'https://tabela-de-jogos-lac.vercel.app/' },
        { 
            name: 'Pomodoro (Temporizador)', 
            categoria: 'Outros', 
            imagemProjeto: capas[5],  
            desc: 'Ferramenta de produtividade com ciclos personalizáveis para foco e descanso.', 
            linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />], 
            repoLink: 'https://github.com/CaiooAnderson/timer', 
            siteLink: 'https://timer-tawny-eight.vercel.app/' },
        { 
            name: 'Calculadora de Imposto de Renda', 
            categoria: 'Back-End', 
            imagemProjeto: capas[6],  
            desc: 'Calculadora intuitiva para estimar o imposto de renda com base em rendimentos.', 
            linguagens: [<FaPython />], 
            repoLink: 'https://github.com/CaiooAnderson/CVTI', 
            siteLink: '' },
        { 
            name: 'Gestão de Equipes', 
            categoria: 'Outros', 
            imagemProjeto: capas[7],  
            desc: 'Aplicação para criar e gerenciar times, distribuindo equipes.', 
            linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <FaNodeJs />], 
            repoLink: 'https://github.com/CaiooAnderson/project-team-creator', 
            siteLink: 'https://project-team-creator.vercel.app/' },
    ];

    const projetosFiltrados = projetos.filter(project => filter === 'Todos' || project.categoria.includes(filter));
    
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        if (carouselRef.current) {
            carouselRef.current.goToSlide(0);
        }
    };

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;

        currentTarget.style.setProperty('--x', `${x}%`);
        currentTarget.style.setProperty('--y', `${y}%`);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 900 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 899, min: 0 },
            items: 1
        }
    };

    return (
        <Fade in={true} timeout={1000}>
        <Box className='projects' sx={{ 
                                        background: 'var(--home-background)',
                                        mt: 0,  
                                        p: { xs: 0, sm: 1, md: 2 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: { xs: '100%', sm: '100vh' },
                                        position: 'relative',
                                        minHeight: '100vh',
                                        width: { xs: 'calc(100vw - 80px)', md: '100%' }
                                    }}>
            <Zoom in={true} timeout={1750}>
            <Box className='project-title' sx= {{ 
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'left',
                                                    pl: { xs: 1, sm: 2, md: 3 }, 
                                                    pt: { xs: 1, sm: 2, md: 3 }
                                                }}>
                <Typography variant='h4' sx={{ 
                                                fontWeight: 'bold', 
                                                mb: { xs: 2, sm: 0 },
                                                borderBottom: '4px solid',
                                                borderColor: 'var(--button-bg-color)',
                                                color: 'var(--sidebar-text-hover-color)',
                                                borderBottomLeftRadius: '12px',
                                                borderBottomRightRadius: '4px', 
                                                fontSize: { xs: '1.5rem', sm: '2rem' } 
                                            }}>
                    Projetos
                </Typography>
            </Box>
            </Zoom>
            <Fade in={true} timeout={2000}>
        <Box className='project-container' sx={{ margin: 'auto' }}>
            <Box className='project-carousel-container' onMouseMove={handleMouseMove} 
                sx={{ 
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundSize: 'cover',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    marginBottom: '32px',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    animation: 'waveAnimation 20s infinite ease-in-out',
                    width: { xs: 'calc(100vw - 80px)', sm: '500px', md: 'auto' },
                    borderRadius: { xs: 0, sm: 1 },
                    'button': {
                        padding: { xs: '0px 4px', sm: '5px 15px' }
                    },
                    '.project-carousel-button-container': {
                        mb: { xs: 1, sm: 2 },
                    }
                }}>
                <Box className='project-carousel-button-container' 
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        mt: { xs: 2, sm: 0 },
                        mb: 2,
                        padding: { xs: 1, sm: 2},
                        borderRadius: { xs: 0, sm: 4},
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        gap: 1,
                        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))',
                        backgroundSize: '200% auto',
                        animation: 'shine 5s infinite ease-in-out',
                        '& .project-button': {
                            width: { xs: 'calc(50% - 4px)', sm: 'auto' },
                        },
                        '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #87CEEB 25%, #4682B4 50%, #1E90FF 75%)',
                        opacity: 0.5, 
                        zIndex: -1,
                        },
                        '.desativado': {
                            background: 'var(--button-bg-color)',
                            color: 'var(--sidebar-button-text-color)',
                            border: '1px solid var(--button-active-bg-color)'
                        },
                        '.project-button:hover': {
                            filter: 'brightness(1.2)'
                        },
                        '.project-button.active': {
                            background: 'var(--button-active-bg-color)',
                            color: 'var(--button-active-text-color)',
                            border: '1px solid #fff',
                            boxShadow: '0 0 2px #0000001a'
                        },
                        '.project-button.active:hover': {
                            background: 'var(--button-active-bg-color)'
                        }
                    }}>
                    <Button className={`project-button ${filter === 'Todos' ? 'active' : 'desativado'}`} variant={filter === 'Todos' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Todos')}>
                        Todos
                    </Button>
                    <Button className={`project-button ${filter === 'Front-End' ? 'active' : 'desativado'}`} variant={filter === 'Front-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Front-End')}>
                        Front-End
                    </Button>
                    <Button className={`project-button ${filter === 'Back-End' ? 'active' : 'desativado'}`} variant={filter === 'Back-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Back-End')}>
                        Back-End
                    </Button>
                    <Button className={`project-button ${filter === 'Outros' ? 'active' : 'desativado'}`} variant={filter === 'Outros' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Outros')}>
                        Outros
                    </Button>
                </Box>
                <Fade in={true} timeout={3000}>
                <Box className='project-carousel'>
                    <Box className='carousel' 
                        sx={{ 
                            width: { xs: 'calc(90vw - 80px)', sm: '400px', md: '900px', lg: '1000px' },
                            margin: '0 auto',
                            p: 0,
                            'button': {
                                backgroundColor: 'var(--home-button-color)',
                                border: '2px solid #fff',
                                margin: '0 -25px'
                            },
                            'button:hover': {
                                backgroundColor: 'var(--home-button-hover-color)',
                                filter: 'drop-shadow(0px 0px 2px #fff)'
                            }
                        }}>
                    <Box className='carousel-container' sx={{ 
                                                            width: { xs: '100px', sm: '400px' },
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            margin: '0 auto',
                                                            '.carousel-container': {
                                                                width: { xs: '220px', sm: '300px', md: '600px' }
                                                            },
                                                            '@media (max-width: 1024px)': {
                                                                '.carousel-container .react-multiple-carousel__arrow--right': {
                                                                    margin: '-10px'
                                                                },
                                                                '.carousel-container .react-multiple-carousel__arrow--left': {
                                                                    margin: '-10px'
                                                                }
                                                            }
                                                            }}>
                    <Carousel 
                        ref={carouselRef}
                        responsive={responsive} 
                        infinite={filter === 'Todos'}
                        showDots={false}
                        customTransition="transform 500ms ease-in-out"
                        itemClass="carousel-item-padding-40-px"
                        transitionDuration={500}
                        renderDotsOutside={true}
                        arrow={true}
                        containerClass="carousel-container"
                        >
                        {projetosFiltrados.map((project) => (
                            <Box key={project.name} onClick={() => handleOpenModal(project)} 
                                sx={{ 
                                margin: { xs: '20px auto', sm: '0 40px'},
                                width: { xs: '140px', sm: '220px'},
                                height: { xs: '200px', sm: '250px'},
                                backgroundColor: '#fff', 
                                cursor: 'pointer',
                                textAlign: 'center',
                                position: 'relative',
                                transition: 'transform 0.5s, opacity 0.5s',
                                '&:hover': { 
                                    transform: 'scale(0.95)', 
                                    zIndex: 10,
                                }
                            }}>
                                <img src={project.imagemProjeto} alt={''} 
                                    style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            border: '3px solid #8a2be2', 
                                            minHeight: '220px', 
                                            objectFit: 'cover', 
                                            borderRadius: '0px', 
                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)' 
                                        }}/>
                            </Box>
                        ))}
                    </Carousel>
                    </Box>
                    </Box>
                </Box>
            </Fade>
            </Box>
        </Box>
            </Fade>

            {/* Modal */}
            <Modal open={openModal} onClose={handleCloseModal} closeAfterTransition sx={{ 
                                                                                        display: 'flex',
                                                                                        justifyContent: 'center',
                                                                                        alignItems: 'center',
                                                                                        ml: '1.5rem'
                                                                                    }}>
                <Fade in={openModal}>
                <Card sx={{
                    width: { xs: '220px', sm: '400px'},
                    margin: { xs: '0 auto', sm: 'auto'},
                    padding: { xs: 0.75, sm: 2},
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    position: 'relative',
                    overflow: 'visible',
                }}>
                    <CloseIcon onClick={handleCloseModal} sx={{
                                                                position: 'absolute',
                                                                top: 8, 
                                                                right: 8,
                                                                cursor: 'pointer',
                                                                color: '#000',
                                                                border: '1px solid #eee',
                                                                borderRadius: 2, 
                                                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                                                                '&:hover': { color: '#4a0072' }
                                                                }} />

                    {selectedProject && (
                        <>
                            <CardContent>
                                <Typography variant="h4" sx={{ 
                                                                mb: { xs: 0.5, sm: 2}, 
                                                                textAlign: 'center', 
                                                                fontSize: { xs: '22px', sm: '28px', md: 'auto' }, 
                                                                fontWeight: 'bold' 
                                                            }}>
                                    {selectedProject.name}
                                </Typography>
                                <img src={selectedProject.imagemProjeto} alt={selectedProject.name} 
                                    style={{ width: '100%', borderRadius: '8px' }} 
                                />
                                <Typography variant="body1" sx={{ 
                                                                    mt: { xs: 0.5, sm: 2 }, 
                                                                    textAlign: 'center', 
                                                                    fontSize: { xs: '16px', sm: '24px', md: 'auto' } 
                                                                }}>
                                    {selectedProject.desc}
                                </Typography>
                                <Box className='tech-icons-card' sx={{ 
                                                                    position: 'absolute', 
                                                                    top: '50%', 
                                                                    left: '-24px', 
                                                                    display: 'flex', 
                                                                    flexDirection: 'column', 
                                                                    transform: 'translateY(-50%)',
                                                                }}>
                                    {selectedProject.linguagens.map((Icon, index) => (
                                        <Box key={index} sx={{ 
                                                                fontSize: '2rem', 
                                                                backgroundColor: '#fff', 
                                                                my: 0.5,
                                                                borderTopLeftRadius: '40%', 
                                                                borderBottomLeftRadius: '40%', 
                                                                borderBottomRightRadius: '0%', 
                                                                borderTopRightRadius: '0%', 
                                                                p: 1, 
                                                                transform: 'translateX(-50%)', 
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' 
                                                            }}>
                                            {Icon}
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Button className='card-button' variant="contained" href={selectedProject.repoLink} target='_blank'
                                    sx={{ 
                                        fontSize: { xs: '12px', sm: '16px', md: 'auto' },
                                        background: 'var(--home-button-hover-color)',
                                        filter: 'brightness(1.2)',
                                        color: 'var(--dark-button-active-text-color)',
                                        '&:hover': {
                                            background: 'var(--sidebar-button-text-color)'
                                        }
                                    }}>
                                    Acessar Repositório
                                    </Button>
                                <Button className='card-button' variant="contained" href={selectedProject.siteLink} target='_blank' 
                                    sx={{ 
                                        fontSize: { xs: '12px', sm: '16px', md: 'auto' },
                                        background: 'var(--home-button-hover-color)',
                                        filter: 'brightness(1.2)',
                                        color: 'var(--dark-button-active-text-color)',
                                        '&:hover': {
                                            background: 'var(--sidebar-button-text-color)'
                                        }
                                    }}>
                                    Acessar Site
                                </Button>
                            </CardActions>
                        </>
                    )}
                </Card>
                </Fade>
            </Modal>
            <Fade in={true} timeout={4500}>
                <Box className='hint-box' sx={{ 
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center'                            
                                            }}>
                    <Hint tips={tips} />
                </Box>
            </Fade>
        </Box>
        </Fade>
    );
}

export default Projects;
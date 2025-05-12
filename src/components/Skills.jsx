import { useState, useEffect } from 'react';
import Hint from './Hint';
import SkillDetails from './SkillDetails';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaWordpress, FaPython, FaBootstrap, FaDocker, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiVisualstudiocode, SiMui, SiZod, SiPrisma, SiTailwindcss, SiLeaflet, SiShadcnui } from "react-icons/si";
import { Box, Typography, Fade, Zoom } from '@mui/material';

const Skills = () => {

    const tips = [
        'Em constante evolução. Tenho muito o que aprender.',
        'Muitos desenvolvedores se sentem despreparados, mas quando que estamos preparados?',
        'Se não concorda que o Visual Studio Code é a melhor IDE, fale agora ou cale-se para sempre.',
        'Responsividade no CSS? Amo!',
        'Percebo que gosto de programar quando o resultado é esperado, mas quando é inesperado, é ainda melhor!',
        'Versionamento de código é interessante!',
        'Nem mesmo os Vingadores podem superar a combinação do HTML, CSS e JavaScript.',
        'Estou me dedicando em TypeScript e React atualmente.',
        'Projetos feitos com Python que automatizam tarefas são impressionantes!',
        'Estou aprendendo a utilizar a ferramenta Docker. Acredito que seja uma ótima ferramenta!',
        'Bônus: Erros e Bugs são Bosses ou Aliados no começo de uma jornada?'
    ]

    const skills = {
        frontEnd: [
            { name: 'HTML', icon: FaHtml5, color: '#e44d26', bgColor: '#fff' },
            { name: 'CSS', icon: FaCss3Alt, color: '#1572b6', bgColor: '#fff' },
            { name: 'JavaScript', icon: FaJs, color: '#f7e02d', bgColor: '#000' },
            { name: 'React.js', icon: FaReact, color: '#61dafb', bgColor: '#fff' },
            { name: 'Material UI', icon: SiMui, color: '#3f51b5', bgColor: '#fff' },
            { name: 'Angular', icon: FaAngular, color: '#f00', bgColor: '#fff' },
            { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38BDF8', bgColor: '#0F172A' },
            { name: 'TypeScript', icon: SiTypescript, color: '#007acc', bgColor: '#fff' },
            { name: 'Shadcn/UI', icon: SiShadcnui, color: '#fff', bgColor: '#09090B' },
            { name: 'Leaflet', icon: SiLeaflet, color: '#199900', bgColor: '#F0FAF0' },
            { name: 'BootStrap', icon: FaBootstrap, color: '#563d7c', bgColor: '#fff'},
            { name: 'WordPress', icon: FaWordpress, color: '#0073aa', bgColor: '#fff' },
        ],
        backEnd: [
            { name: 'Node.js', icon: FaNodeJs, color: '#8cc84b', bgColor: '#fff' },
            { name: 'Python', icon: FaPython, color: '#306998', bgColor: '#fff' },
            { name: 'Zod', icon: SiZod, color: '#3068C5', bgColor: '#E8F1FD' },
            { name: 'Prisma ORM', icon: SiPrisma, color: '#fff', bgColor: '#E0F2FE' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#fff', bgColor: '#336791' },
        ],
        ferramentas: [
            { name: 'VS Code', icon: SiVisualstudiocode, color: '#007acc', bgColor: '#fff' },
            { name: 'Docker', icon: FaDocker, color: '#2496ed', bgColor: '#fff' },
            { name: 'GitHub', icon: FaGithub, color: '#181717', bgColor: '#fff' },
            { name: 'Git', icon: FaGitAlt, color: '#f1502f', bgColor: '#fff' },
            { name: 'Figma', icon: FaFigma, color: '#f24e1e', bgColor: '#fff' },
        ]
    };

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 599, min: 0 },
          items: 2,
          slidesToSlide: 1
        }
    };

    const [clickedSkill, setClickedSkill] = useState(null);
    
    const handleClickOutside = (event) => {
        if (!event.target.closest('.selecionado')) {
          setClickedSkill(null);
        }
      };

      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    const handleSkillClick = (skillName) => { setClickedSkill(prevSkill => prevSkill === skillName ? null : skillName) };

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;

        currentTarget.style.setProperty('--x', `${x}%`);
        currentTarget.style.setProperty('--y', `${y}%`);
    };

    return (
        <Fade in={true} timeout={1000}>
        <Box className='skills' onMouseMove={handleMouseMove}
            sx={{ 
                mt: 0,  
                p: { xs: 0, sm: 1, md: 2 },
                display: 'flex',
                flexDirection: 'column',
                height: { xs: '100%', sm: '100vh' },
                position: 'relative',
                minHeight: '100vh',
                width: { xs: 'calc(100vw - 80px)', md: '100%' },
                background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), #4a7bac80 0%, #4a7bac80 10%, #3d9eff 80%)',
                transition: 'background 0.5s ease',
                gap: '0.5rem',
                '.skill-carousel-container ul': {
                    display: 'flex',
                    margin: '0 20px'
                },
                '.skill-carousel-container button': {
                    border: '2px solid #fff',
                    background: 'var(--home-button-color)',
                    opacity: '0.75',
                    margin: '-20px',
                    zIndex: 100
                },
                '.skill-carousel-container button:hover': {
                    background: 'var(--home-button-color)',
                    opacity: 1,
                    filter: 'brightness(1.2)'
                },
                '@media(min-width: 600px) and (max-width: 700px)': {
                    '.skill-carousel-container ul': {
                        margin: '0 10px'
                    },
                    '.skill-carousel-container button': {
                        margin: '-5px'
                    },
                    '.skill-container': {
                        padding: 0
                    }
                },
                '@media (max-width: 560px)': {
                    '.skill-carousel-container ul': {
                        margin: 'auto 0px',
                    },
                },
                '@media (max-width: 430px)': {
                    '.skill-container': {
                        padding: 0,
                    },
                    h4: {
                        marginBottom: 'auto',
                    },
                    '.skill-carousel-container': {
                        height: '100px',
                        width: 'calc(100vw - 80px)',
                        zIndex: 10,
                    },
                    '.skill-item': {
                        width: '80px',
                    },
                    '.skill-item h6': {
                        marginTop: '1rem',
                        fontSize: '0.75rem',
                    },
                    '.skill-carousel-container button': {
                        minWidth: '30px',
                        minHeight: '30px',
                        margin: '-10px'
                    },
                    '.skill-carousel-container ul': {
                        margin: 'auto 0px',
                    },
                    '.skill-carousel-container .skill-item': {
                        height: '80px',
                    },
                }
            }}>
                <Zoom in={true} timeout={1750}>
                <Box sx={{ 
                            width: '100%', 
                            display: 'flex', 
                            justifyContent: 'left',
                            pl: { xs: 1, sm: 2, md: 3 }, 
                            pt: { xs: 1, sm: 2, md: 3 }
                        }}>
                <Typography variant='h4' sx={{ 
                                            mb: { xs: 2, sm: 0 }, 
                                            fontWeight: 'bold', 
                                            borderBottom: '2px solid #000',
                                            fontSize: { xs: '1.5rem', sm: '2rem' },
                                            color: 'var(--sidebar-text-hover-color)',
                                            borderColor: 'var(--button-bg-color)',
                                            borderWidth: '4px',
                                            borderBottomLeftRadius: '12px',
                                            borderBottomRightRadius: '4px',
                                            }}>
                    Habilidades
                </Typography>
                </Box>
                </Zoom>
                <Box className='skill-container' 
                    sx={{ 
                        margin: 'auto 0', 
                        width: { xs: '100%', sm: '100%'}, 
                        px: { xs: 1, sm: 2 } 
                    }}>
                <Box className='skills-carousels' sx={{ 
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: '100%', 
                                                        maxWidth: '100%', 
                                                        margin: '0 auto', 
                                                        overflow: 'hidden',
                                                        '@media (max-width: 430px)': {
                                                            '.front-end-skills': {
                                                                padding: 'auto 0'
                                                            },
                                                            '.back-end-skills': {
                                                                padding: 'auto 0'
                                                            },
                                                            '.tools-skills': {
                                                                padding: 'auto 0'
                                                            }
                                                        }
                                                    }}>
                    <Box className='front-end-skills' sx={{ 
                                                            mt: {md: 0.3, lg: 0.5}, 
                                                            textAlign: 'center', 
                                                            pt: { xs: 1, sm: 0 }, 
                                                            width: { xs: '100%', sm: '600px' },
                                                            padding: '16px 0',
                                                            paddingTop: 0, 
                                                        }}>
                        <Typography variant='h5' sx={{ 
                                                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                                    display: 'inline',
                                                    background: 'linear-gradient(270deg, #dd00ff, #00d4ff, #4b0082, #dd00ff)',
                                                    backgroundSize: '400% 400%',
                                                    padding: '5px 20px 3.5px',
                                                    borderTopLeftRadius: '20px',
                                                    borderTopRightRadius: '4px',
                                                    position: 'relative',
                                                    animation: 'nebulosa 15s ease infinite'
                                                    }}>
                            Front-End
                        </Typography>
                            <Box className='skill-carousel-container' sx={{
                                'button': {
                                    margin: { xs: '0px', sm: '-20px', md: '-10px' },
                                    lineHeight: { xs: 'normal' }
                                },
                                '.react-multiple-carousel__arrow--right': {
                                    margin: { xs: '-8px', md: '-20px' }
                                },
                                '.react-multiple-carousel__arrow--left': {
                                    margin: { xs: '-8px', sm: '-20px' },
                                },
                                '.skill-item': {
                                    margin: { xs: 'auto', sm: 'auto 21px' }
                                },
                                overflow: 'hidden',
                                padding: '10px',
                                background: 'linear-gradient(270deg, #dd00ff, #00d4ff, #4b0082, #dd00ff)',
                                backgroundSize: '400% 400%',
                                animation: 'nebulosa 15s ease infinite',
                                borderRadius: { xs: '0', sm: '12px' },
                                width: { xs: '100%', sm: '100%', md: '100%' }
                            }}>
                                <Carousel responsive={responsive}>
                                    {skills.frontEnd.map(skill => (
                                <Box 
                                    key={skill.name} 
                                    className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : 'nao-selecionado'}`} 
                                    onClick={() => handleSkillClick(skill.name)}
                                    sx={{    
                                        background: 'rgba(255, 255, 255, 0.3)',
                                        backdropFilter: 'blur(10px)',
                                        width: '100px',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '8px',
                                        margin: '0 20px',
                                        border: `2px solid ${skill.color}`,
                                        transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                                        cursor: 'pointer',
                                        '&.selecionado .skill-icon': {
                                            animation: 'float 2.5s ease-in-out infinite',
                                            filter: 'drop-shadow(0px 12px 4px rgba(0, 0, 0, 0.2))',
                                            marginTop: '8px',
                                        },
                                        '&.nao-selecionado .skill-icon': {
                                            animation: 'rotate 1s ease-in-out forwards',
                                        },
                                    }}>
                                    <SkillDetails key={skill.name} icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} isSelected={clickedSkill === skill.name} />
                                </Box>
                            ))}
                                </Carousel>
                            </Box>
                        </Box>
                    <Box className='back-end-skills' sx={{ 
                                                            mt: {md: 0.3, lg: 0.5}, 
                                                            textAlign: 'center', 
                                                            pt: { xs: 0.5, sm: 0 }, 
                                                            width: { xs: '100%', sm: '600px' },
                                                            padding: '16px 0',
                                                            paddingTop: 0
                                                        }}>
                        <Typography variant='h5' sx={{ 
                                                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                                    display: 'inline',
                                                    background: 'linear-gradient(270deg, #dd00ff, #00d4ff, #4b0082, #dd00ff)',
                                                    backgroundSize: '400% 400%',
                                                    padding: '5px 20px 3.5px',
                                                    borderTopLeftRadius: '20px',
                                                    borderTopRightRadius: '4px',
                                                    position: 'relative',
                                                    animation: 'nebulosa 15s ease infinite' 
                                                    }}>
                            Back-End
                        </Typography>
                            <Box className='skill-carousel-container' sx={{
                                'button': {
                                    margin: { xs: '0px', sm: '-20px', md: '-10px' },
                                    lineHeight: { xs: 'normal' }
                                },
                                '.react-multiple-carousel__arrow--right': {
                                    margin: { xs: '-8px', md: '-20px' }
                                },
                                '.react-multiple-carousel__arrow--left': {
                                    margin: { xs: '-8px', sm: '-20px' },
                                },
                                '.skill-item': {
                                    margin: { xs: 'auto', sm: 'auto 21px' }
                                },
                                overflow: 'hidden',
                                padding: '10px',
                                background: 'linear-gradient(270deg, #dd00ff, #00d4ff, #4b0082, #dd00ff)',
                                backgroundSize: '400% 400%',
                                animation: 'nebulosa 15s ease infinite',
                                borderRadius: { xs: '0', sm: '12px' },
                                width: { xs: '100%', sm: '100%', md: '100%' }
                            }}>
                                <Carousel responsive={responsive}>
                                {skills.backEnd.map(skill => (
                                <Box 
                                    key={skill.name} 
                                    className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : 'nao-selecionado'}`} 
                                    onClick={() => handleSkillClick(skill.name)}
                                    sx={{   
                                        background: 'rgba(255, 255, 255, 0.3)',
                                        backdropFilter: 'blur(10px)',
                                        width: '100px',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '8px',
                                        margin: '0 20px',
                                        border: `2px solid ${skill.color}`,
                                        transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                                        cursor: 'pointer',
                                        '&.selecionado .skill-icon': {
                                            animation: 'float 2.5s ease-in-out infinite',
                                            filter: 'drop-shadow(0px 12px 4px rgba(0, 0, 0, 0.2))',
                                            marginTop: '8px',
                                        },
                                        '&.nao-selecionado .skill-icon': {
                                            animation: 'rotate 1s ease-in-out forwards',
                                        },
                                    }}>
                                    <SkillDetails key={skill.name} icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} isSelected={clickedSkill === skill.name} />
                                </Box>
                            ))}
                                </Carousel>
                            </Box>
                        </Box>
                    <Box className='tools-skills' sx={{ 
                                                        mt: {md: 0.3, lg: 0.5}, 
                                                        textAlign: 'center', 
                                                        pt: { xs: 0.5, sm: 0 }, 
                                                        width: { xs: '100%', sm: '600px' },
                                                        padding: '16px 0',
                                                        paddingTop: 0,
                                                    }}>
                        <Typography variant='h5' sx={{ 
                                                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                                    display: 'inline',
                                                    background: 'linear-gradient(270deg, #dd00ff, #00d4ff, #4b0082, #dd00ff)',
                                                    backgroundSize: '400% 400%',
                                                    padding: '5px 20px 3.5px',
                                                    borderTopLeftRadius: '20px',
                                                    borderTopRightRadius: '4px',
                                                    position: 'relative',
                                                    animation: 'nebulosa 15s ease infinite' 
                                                    }}>
                            Ferramentas
                        </Typography>
                            <Box className='skill-carousel-container' sx={{
                                'button': {
                                    margin: { xs: '0px', sm: '-20px', md: '-10px' },
                                    lineHeight: { xs: 'normal' }
                                },
                                '.react-multiple-carousel__arrow--right': {
                                    margin: { xs: '-8px', md: '-20px' }
                                },
                                '.react-multiple-carousel__arrow--left': {
                                    margin: { xs: '-8px', sm: '-20px' },
                                },
                                '.skill-item': {
                                    margin: { xs: 'auto', sm: 'auto 21px' }
                                },
                                overflow: 'hidden',
                                padding: '10px',
                                background: 'linear-gradient(270deg, #dd00ff, #00d4ff, #4b0082, #dd00ff)',
                                backgroundSize: '400% 400%',
                                animation: 'nebulosa 15s ease infinite',
                                borderRadius: { xs: '0', sm: '12px' },
                                width: { xs: '100%', sm: '100%', md: '100%' }
                            }}>
                                <Carousel responsive={responsive}>
                                {skills.ferramentas.map(skill => (
                                <Box 
                                    key={skill.name} 
                                    className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : 'nao-selecionado'}`} 
                                    onClick={() => handleSkillClick(skill.name)}
                                    sx={{   
                                        background: 'rgba(255, 255, 255, 0.3)',
                                        backdropFilter: 'blur(10px)',
                                        width: '100px',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '8px',
                                        margin: '0 20px',
                                        border: `2px solid ${skill.color}`,
                                        transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                                        cursor: 'pointer',
                                        '&.selecionado .skill-icon': {
                                            animation: 'float 2.5s ease-in-out infinite',
                                            filter: 'drop-shadow(0px 12px 4px rgba(0, 0, 0, 0.2))',
                                            marginTop: '8px',
                                        },
                                        '&.nao-selecionado .skill-icon': {
                                            animation: 'rotate 1s ease-in-out forwards',
                                        },
                                    }}>
                                    <SkillDetails key={skill.name} icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} isSelected={clickedSkill === skill.name} />
                                </Box>
                            ))}
                                </Carousel>
                            </Box>
                    </Box>
                </Box>
            </Box>
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

export default Skills;
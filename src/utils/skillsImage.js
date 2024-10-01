import docker from '../assets/svg/skills/docker.svg'
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import java from '../assets/svg/skills/java.svg'
import python from '../assets/svg/skills/python.svg'
import git from '../assets/svg/skills/git.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import pytorch from '../assets/svg/skills/pytorch.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
import powerbi from '../assets/svg/skills/powerbi.svg'
import figma from '../assets/svg/skills/figma.svg'
import scikitlearn from '../assets/svg/skills/scikitlearn.svg'
import node from '../assets/svg/skills/node.svg'
import pandas from '../assets/svg/skills/pandas.svg'
import postman from '../assets/svg/skills/postman.svg'
import streamlit from '../assets/svg/skills/streamlit.svg'
import matplotlib from '../assets/svg/skills/matplotlib.svg'
import seaborn from '../assets/svg/skills/seaborn-icon.svg'
import blender from '../assets/svg/skills/blender.svg'
import express from '../assets/svg/skills/expressjs.svg'
import flask from '../assets/svg/skills/flask.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'html':
            return html;
        case 'javascript':
            return javascript;
        case 'react js':
            return react;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'pytorch':
            return pytorch;
        case 'tensorflow':
            return tensorflow;
        case 'blender':
            return blender;
        case 'figma':
            return figma;
        case 'node js':
            return node;
        case 'pandas':
            return pandas;
        case 'scikit-learn':
            return scikitlearn;
        case 'powerbi':
            return powerbi;
        case 'postman':
            return postman;
        case 'streamlit':
            return streamlit;
        case 'matplotlib':
            return matplotlib;
        case 'seaborn':
            return seaborn;
        case 'express js':
            return express;
        case 'flask':
            return flask;
        default:
            break;
    }
}

import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FaLinkedinIn,
    FaMediumM,
    FaKaggle,
    FaGithub,
    FaAt,
    FaMapMarkerAlt 
} from 'react-icons/fa';
import { FaDiscord } from "react-icons/fa6"
import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '20%',
            borderTopLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        }
    }));

    const classes = useStyles();

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FaAt color='#fff' />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`mailto:${contactsData.mail}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FaAt color='#fff' />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.mail}
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <FaMapMarkerAlt size={28} color='#fff' />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                    id='social-gi'
                                >
                                    <FaGithub size={28} color='#fff' aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                    id='social-li'
                                >
                                    <FaLinkedinIn size={28} color='#fff' aria-label='LinkedIn' />
                                </a>
                            )}
                            {socialsData.kaggle && (
                                <a
                                    href={socialsData.kaggle}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                    id='social-ka'
                                >
                                    <FaKaggle size={28} color='#fff' aria-label='Kaggle' />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                    id='social-me'
                                >
                                    <FaMediumM size={28} color='#fff' aria-label='Medium' />
                                </a>
                            )}
                            {socialsData.discord && (
                                <a
                                    href={socialsData.discord}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                    id='social-di'
                                >
                                    <FaDiscord size={28} color='#fff' aria-label='discord' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;

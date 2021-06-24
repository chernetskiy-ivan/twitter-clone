import React from 'react'
import {Button, FormControl, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import {ModalBlock} from "../components/ModalBlock";


export const useStylesSingIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide:{
        backgroundColor: '#71C9F8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%'
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%'
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20
    },
    loginSideField: {
        marginBottom: 18
    },
    registerField: {
        marginBottom: theme.spacing(5)
    },
    registerFormControl: {
        marginBottom: theme.spacing(2)
    },
    loginFormControl: {
        marginBottom: theme.spacing(2)
    }
}))

function SignIn() {
    const classes = useStylesSingIn()

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>()

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined)
    }


    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem} >
                        <Typography variant="h6"><SearchIcon className={classes.blueSideListInfoIcon} />Чиатйте о том что, вам интересно</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem} >
                        <Typography variant="h6"><PeopleIcon className={classes.blueSideListInfoIcon} />Узнайте, о чем говорят в мире</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem} >
                        <Typography variant="h6"><MessageIcon className={classes.blueSideListInfoIcon} />Присоединяйтесь к общению</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant="h4" gutterBottom>Узнай, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Войти</Button>

                    <ModalBlock visible={visibleModal === 'signIn' } onClose={handleCloseModal} classes={classes} title="Войти в аккаунт">
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />

                                <TextField
                                    className={classes.loginSideField}

                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>

                    <ModalBlock visible={visibleModal === 'signUp' } onClose={handleCloseModal} classes={classes} title="Создайте учетную запись">
                        <FormControl className={classes.registerFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="name"
                                    label="Имя"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                />

                                <TextField
                                    className={classes.registerField}
                                    id="email"
                                    label="E-mail"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />

                                <TextField
                                    className={classes.registerField}

                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                    Далее
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>

                </div>
            </section>
        </div>
    )
}

export default SignIn

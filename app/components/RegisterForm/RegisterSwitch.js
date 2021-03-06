import React, { Component } from 'react';
import { Grid, Col, Row, Input, Button  } from 'react-bootstrap'
import { Link } from 'react-router'
import styles from './registerSwitch.scss'

const RegisterSwitch = (props) => (
    <Grid>
        <Row className={styles.form}>
            <Col xs={10} xsOffset={1} className={styles.buttonWrapper}>
                <form className="form-horizontal">
                    <Col sm={6} smOffset={0} xs={10} xsOffset={1}>
                        <Button className={styles.userButton}
                                onClick={props.onSelection.bind(null, "user")} block>Register as Volunteer</Button>
                    </Col>
                    <Col sm={6} smOffset={0} xs={10} xsOffset={1}>
                        <Button className={styles.orgButton}
                               onClick={props.onSelection.bind(null, "org")} block>Register as Organization</Button>
                    </Col>
                </form>
            </Col>
        </Row>
    </Grid>
);

export default RegisterSwitch

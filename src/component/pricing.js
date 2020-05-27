import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Pricing = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const toggler = () => setIsOpen2(!isOpen2)
  const toggler3 = () => setIsOpen3(!isOpen3)

        return (
            <div id="Pricing">
            <div style={{borderTop: '3px solid red'}}>
                <div className="pt-5">
                    <h2>
                        <bold>SYSTEM</bold>
                    </h2>
                    <p>
                        Kami menyediakan 3 jenis system yang dibagi sesuai Tier.
                    </p>
                    <p>
                        Anda dapat memilih jenis sistem sesuai kebutuhan untuk usaha anda.
                    </p>
                </div>
                <div className="row">
                    <div className="col-1 empty"></div>
                    <div className="T1 col-md-3" style={{padding:0}}>
                        <Button color="dark" style={{width:'100%', backgroundColor: 'rgb(18, 209, 209)', color: 'black', fontWeight:'bold' }} onClick={toggle}>TIER 1/ BASIC PACKAGE</Button>
                        <Collapse isOpen={isOpen}>
                            <Card style={{borderColor:'rgb(18, 209, 209)'}}>
                            <CardBody style={{color:'black'}}>
                            <ol style={{borderBottom: '1px dashed rgb(18, 209, 209)'}}>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Barang Masuk
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Barang Keluar
                                </li>
                                <li style={{textAlign: 'left', marginBottom: '30px'}}>
                                    Mencatat Hasil Keuntungan
                                </li>
                            </ol>
                            <h3 style={{color: 'red'}}>Rp. 5.000.000</h3>
                            </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                    <div className="col-md-4" style={{paddingLeft: '40px', paddingRight: '40px'}}> 
                        <Button color="dark" style={{width:'100%', backgroundColor: 'rgb(18, 209, 209)', color: 'black', fontWeight:'bold' }} onClick={toggler} >TIER 2/ BUSINESS PACKAGE</Button>
                        <Collapse isOpen={isOpen2}>
                            <Card style={{borderColor:'rgb(18, 209, 209)'}}>
                            <CardBody style={{color:'black'}}>
                            <ol style={{borderBottom: '1px dashed rgb(18, 209, 209)'}}>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Barang Masuk
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Barang Keluar
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Hasil Keuntungan
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Hasil Analisa Penjual dengan Chart
                                </li>
                                <li style={{textAlign: 'left', marginBottom: '30px'}}>
                                    Support 7x24 jam
                                </li>
                            </ol>
                            <h3 style={{color: 'red'}}>Rp. 10.000.000</h3>
                            </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                    <div className="T3 col-md-3" style={{padding:0}}> 
                        <Button color="dark" style={{width:'100%', backgroundColor: 'rgb(18, 209, 209)', color: 'black', fontWeight:'bold' }} onClick={toggler3}>TIER 3/ ENTERPRENEUR PACKAGE</Button>
                        <Collapse isOpen={isOpen3}>
                            <Card style={{borderColor:'rgb(18, 209, 209)'}}>
                            <CardBody style={{color:'black'}}>
                            <ol style={{borderBottom: '1px dashed rgb(18, 209, 209)'}}>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Barang Masuk
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Barang Keluar
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Mencatat Hasil Keuntungan
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Hasil Analisa Penjual dengan Chart
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Support 7x24 Jam
                                </li>
                                <li style={{textAlign: 'left'}}>
                                    Export Data to Excel
                                </li>
                                <li style={{textAlign: 'left', marginBottom: '30px'}}>
                                    AI Prediksi Pengahasilan
                                </li>
                            </ol>
                            <h3 style={{color: 'red'}}>Rp. 20.000.000</h3>
                            </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </div>
            </div>
            </div>
        )
    }
export default Pricing
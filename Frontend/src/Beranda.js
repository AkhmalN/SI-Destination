import Header from "./components/header";
import testgambar from './images/grand-canyon.png'
import {  Button, Card, Col, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
// import { DATA } from "./tourism_with_id";
import axios from 'axios'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainCity } from "@fortawesome/free-solid-svg-icons";


export default function Beranda() {


   const [destinations, setDestinations] = useState([])

   const city = ["Jakarta", "Bandung", "Semarang", "Jogjakarta", "Surabaya"]
   // const test = DATA.map((item)=>{
   //    return item
   // })
   // console.log(test)

      const getDestinationData = async() => {
         try {
            const data = await axios.get('http://localhost:8081/destination')
            setDestinations(data.data)
         } catch (error) {
            console.log(error)
         }
      }
      useEffect(()=> {
         getDestinationData()
      })

      const uniqueCategories = [...new Set(destinations.map(destination => destination.category))]


   return (
      <>
      <Header />
         <section className="container-md my-5">
            
            <Row xs="auto">
               <div className="w-100 mb-2"> 
                  <Row className="text-dark fs-4" xs='auto'>
                     <Col>
                     <FontAwesomeIcon icon={faMountainCity} style={{color: "#1663e9",}} />
                     </Col>
                     <Col>
                     <p>Temukan Berbagai Wisata Menarik di Jakarta</p>               
                     </Col>
                  </Row>   
               </div> 
               <Row xs="auto">
                  {city.map((place, index)=>{
                     return(
                        <Col key={index}>
                           <Card style={{width : '295px'}} className="my-1">
                              <div className="position-relative">
                                 <Card.Img src={testgambar} style={{width : '300px', height : '180px'}}/>
                                 <Card.Title className="px-2 mt-4 fs-4 position-absolute top-0 start-0 text-light fw-bold">{place}</Card.Title>
                                 <Card.Title className="px-2 mb-2 fs-6 position-absolute bottom-0 start-0 text-light font-weight-normal">121 Accomodation</Card.Title>
                              </div>
                           </Card>
                     </Col>
                     )
                  })}
               </Row>
            </Row>
         </section>
         <section className="container-md my-5">
            
            <Row xs="auto" className="d-flex flex-column">
               <Row>
                  <div className="w-100 mb-2">
                     <h2 className="text-dark fs-4">
                        Temukan beragam budaya disini              
                     </h2> 
                  </div>
               </Row>
               <Row xs="auto">
                  {uniqueCategories.map((category, index)=> {
                     return(
                        <Col  key={index}>
                           <Button className="btn btn-primary rounded-pill my-1">{category}</Button>
                        </Col>
                     )
                  })}
               </Row>
            </Row>
            <Row xs='auto' className="my-4">
               {city.map((place, index)=>{
                  return(
                     <Col key={index}>
                     <Card style={{width : '300px'}} className="mr-1">
                        <div className="position-relative">
                           <Card.Img src={testgambar} style={{width : '300px', height : '180px'}}/>
                           <Card.Title className="px-2 bg bg-primary fs-6 rounded position-absolute top-0 start-0 text-light fw-bold">{place}</Card.Title>
                           
                        </div>
                        <Card.Body>
                           <Card.Title className="fs-6">Monumen Nasional (Monas)</Card.Title>
                           <Row xs="auto" className="d-flex align-items-center">
                     
                                 <Col>
                                    <StarRatings
                                       rating={4}
                                       starDimension="20"
                                       starSpacing="2px"
                                       starRatedColor="orange"
                                       numberOfStars={5}
                                       name="rating"
                                       
                                    />
                                 </Col>
                                 <Col className="bg bg-warning text-light rounded mt-1" >
                                    <Card.Text>4.5/5</Card.Text>
                                 </Col>
                              
                           </Row>
                           <Card.Text>Rp. 20.000</Card.Text>
                        </Card.Body>
                     </Card>
                     </Col>
                  )
               })}
            </Row>
         </section>
      </>
   );
}

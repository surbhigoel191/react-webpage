import React from 'react'
import { Blurhash } from "react-blurhash";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Data} from "./Restdata.js";
import './index.css'

const dataGot = Data.sections[0];console.log(typeof dataGot);
dataGot.restaurants.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
let x;
const responsive = {
						superLargeDesktop: {
							// the naming can be any, depends on you.
							breakpoint: { max: 4000, min: 3000 },
							items: 5,
						},
						desktop: {
							breakpoint: { max: 3000, min: 1024 },
							items: 3,
						},
						tablet: {
							breakpoint: { max: 1024, min: 464 },
							items: 2,
						},
						mobile: {
							breakpoint: { max: 464, min: 0 },
							items: 1,
						}
					};

class PopCarousel extends React.Component{
	render(){
				return(
					<Carousel showDots={false} itemClass="react-carousel-item"
					responsive={responsive} ssr={true} infinite={true}
					autoPlay={this.props.deviceType !== "mobile" ? true : false}
					autoPlaySpeed={500000} containerClass="carousel-container"
					keyBoardControl={true} deviceType={this.props.deviceType}>
						{dataGot.restaurants.map((detail) => {
							if(detail.online===true){
								x="Online";
							}else{
								x="Offline"; 
							}
							return (
									<div className="blurimg">
										<Blurhash hash={detail.blurhash} width={420} height={400} 
										 resolutionX={32} resolutionY={32} punch={1} />
										 <div style={{width:420, height:50}}><h4 className="card-title">{detail.name}</h4><h5 className="card-label">{x}</h5></div>
									</div>
									);})}
				  </Carousel>
				);
			}}
export default PopCarousel;
 import React from 'react';
 import {Alert, Card} from 'react-bootstrap'
 import {Carousel} from 'react-bootstrap'

 export default class Content extends React.Component{
     constructor(props) {
         super(props);
         this.state={show:false, animation:'', animation2:''}
     }
  render(){
   return(
       <div className='first-page'>
           <div className='intro'>
                       <div className='arrglow'>
                        <div>
              <p className='glow'>
                  HOW I MADE IT BIG WITH JUST MY SMARTPHONE<br/>
                  <span className='second-line' style={{fontSize:18}}>....My journey on how I went from being really broke
                      to making it big online, if you want this same financial freedom then this is for you</span>
              </p>
                            </div>
                       </div>
           </div>
           <div>
               <div className='contents'>
                <Card style={{borderRadius:15}}>
                    <div className='contentcont'>
                        Hey there!! My name is AKINSOLA GABRIEL, an Expertnaire Affiliate. I'm here to inform you on how
                        you can make up to 200k-500k monthly with just your smart phone, from the comfort of your home -oh yeah!
                        I know, that sounds like something from a fairy tale but trust me this is as real as it gets.
                        The best part is anyone can do it. that said, there are various ways of making money and affiliate marketing
                        is one of them. To learn more about how to earn kindly click below <br/>
                        <div className='info-container'>
                        <div className={`info-panel animate__animated ${this.state.animation}`}
                             onMouseEnter={()=>this.setState({animation:'animate__heartBeat'})}
                             onMouseLeave={()=>this.setState({animation:''})}
                             onClick={()=>this.setState({show:true})}>
                            <img className='cash-image' src='./image/cash.png' style={{paddingBottom:5}}/>
                            <div><b>How Do I Earn?</b></div>
                        </div>
                        </div>
                    </div>
                    <Alert show={this.state.show} variant='info' style={{position:'absolute', fontSize:16, borderRadius:15}}>
                        As an Expertnaire affiliate, you earn up to 50% commission on every digital product you sell.
                        Expertnaire offers a vast number of digital packages with varying prices. Once you
                        register as an affiliate marketer, you immediately have access to all of these digital products for
                        sales purposes. All you have to do is recommend a particular digital product, convince someone to purchase
                        it via your link and you get 50% commission for the sales of the product. Take for example the 72IG course
                        that's being sold for #62,500, a successful sale of this product will yield a commission of #31,250. Sales
                        of just 10 of this product, thats a whooping #312,500!!! -One second, let me catch my breath! This is basically
                        what Affiliate Marketing is all about. Several companies like the well-known Uber and Taxify (who provide car
                        services despite not owning a car) have been really successful in utilizing Affiliate Marketing by linking
                        people who provide services to their potential customers.
                        <div style={{textAlign:'center',paddingTop:20}}><input className='btn btn-primary' type='button' value='Close'
                                                                 onClick={()=>this.setState({show:false})}/></div>
                    </Alert>
                    <div className={'second-panel'} style={{backgroundColor:'midnightBlue', color:'white'}}>
                        <div style={{paddingTop:40}}>
                        <div style={{textAlign:'center'}}><h1>ALL YOU NEED</h1></div>
                        <div className={''} style={{padding:30}}>
                        <div className={'row'} style={{fontSize:25}}>
                            <div className={'col-xs-2 col-sm-2 col-md-2'}><h2><b style={{color:'green'}}>&#10003;</b></h2></div>
                            <div className={'col-xs-8 col-sm-9 col-md-9'}>Your smart phone</div>
                        </div>
                            <div className={'row'} style={{fontSize:25}}>
                                <div className={'col-xs-1 col-sm-2 col-md-2'}><h2><b style={{color:'green'}}>&#10003;</b></h2></div>
                                <div className={'col-xs-9 col-sm-9 col-md-9'}>Good internet connection</div>
                            </div>
                            <div className={'row'} style={{fontSize:25}}>
                                <div className={'col-xs-1 col-sm-2 col-md-2'}><h2><b style={{color:'green'}}>&#10003;</b></h2></div>
                                <div className={'col-xs-9 col-sm-9 col-md-9'}>Willingness to learn and implement</div>
                            </div>
                        </div>
                        </div>
                        <div style={{paddingTop:40}}>
                            <div style={{textAlign:'center'}}><h1>WHAT THIS IS NOT</h1></div>
                            <div className={''} style={{padding:30}}>
                                <div className={'row'} style={{fontSize:25}}>
                                    <div className={'col-xs-2 col-sm-2 col-md-2'}><h2><b style={{color:'red'}}>&Chi;</b></h2></div>
                                    <div className={'col-xs-9 col-sm-9 col-md-9'}>This is not Multi-Level marketing</div>
                                </div>
                                <div className={'row'} style={{fontSize:25}}>
                                    <div className={'col-xs-2 col-sm-2 col-md-2'}><h2><b style={{color:'red'}}>&Chi;</b></h2></div>
                                    <div className={'col-xs-9 col-sm-9 col-md-9'}>This is not a Ponzi, Pyramid or any Referral Scheme</div>
                                </div>
                                <div className={'row'} style={{fontSize:25}}>
                                    <div className={'col-xs-2 col-sm-2 col-md-2'}><h2><b style={{color:'red'}}>&Chi;</b></h2></div>
                                    <div className={'col-xs-9 col-sm-9 col-md-9'}>You don't need to rent a shop or office</div>
                                </div>
                                <div className={'row'} style={{fontSize:25}}>
                                    <div className={'col-xs-2 col-sm-2 col-md-2'}><h2><b style={{color:'red'}}>&Chi;</b></h2></div>
                                    <div className={'col-xs-9 col-sm-9 col-md-9'}>You dont need to create any product</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={'first-para contentcont'}>
                        Other Affiliates and I make use of this proven system that can even get a newbie to start
                        earning massively in just a few months<br/>
                    </p>
                    <p className={'contentcont'}>Send a whatsapp message to learn how to get started</p>
                    <div style={{textAlign:'center'}}>
                        <img className={'animate__animated animate__shakeY animate__infinite animate__slower arrow'} src={'./image/arrow.png'}/>
                        <div className={'enroll-whatsapp-cont'}>
                            <div className={`enroll-whatsapp row`}
                                 style={{color:'white', cursor:'pointer'}} onClick={(event)=>{event.preventDefault()
                                location.href='http://Wa.me/2348087141250'}}>
                                <div className={'col-sm-3 col-md-3 logo-cont'}>
                                    <img className={'whatsapp-logo-2'} src={'./image/whatsappp.png'} alt={'whatsapp'}/>
                                </div>
                                <div className={'col-sm-8 col-md-8 text-cont'}>
                                    <h4>ENROLL NOW FOR THE MASTERCLASS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={'contentcont'}>
                        Finally, I'll be leaving you with a slideshow of testimonies of Super Affiliates who
                        have been able to really take advantage of this platform. I'll see you next time, till then,
                        Au revoir!!
                    </p>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-4.jpg"
                                    alt="fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-5.jpg"
                                    alt="fifth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-6.jpg"
                                    alt="sixth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-7.jpg"
                                    alt="seventh slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-8.jpg"
                                    alt="eight slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-9.jpg"
                                    alt="ninth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-10.jpg"
                                    alt="tenth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-11.jpg"
                                    alt="eleventh slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-12.jpg"
                                    alt="Twelveth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carousel"
                                    src="./image/IMG-13.jpg"
                                    alt="Thirteenth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Card>
                   </div>
         <div className='imgcont'>
             <span>
                 <img className='img-responsive image' src='./image/Gabriel.jpg' alt='Gabriel'/>
             </span>
             <div className='motivate' style={{fontFamily:'Tangerine'}}>
                 <b>A man is great not because he hasn't failed<br/>
                 He is great because failure hasn't stopped him<br/></b>
                  <span>~Confucius</span>
             </div>
             <div className={`join-whatsapp row animate__animated animate__infinite ${this.state.animation2}`}
                  style={{color:'white', cursor:'pointer'}} onClick={(event)=>{event.preventDefault()
                    location.href='http://Wa.me/2348087141250'}}
                  onMouseEnter={()=>this.setState({animation2:'animate__pulse'})}
                  onMouseLeave={()=>this.setState({animation2:''})}>
                 <div className={'col-xs-3 col-sm-3 col-md-3'}>
                        <img className={'whatsapp-logo'} src={'./image/whatsappp.png'} alt={'whatsapp'}/>
                 </div>
                 <div className={'col-xs-8 col-sm-8 col-md-8'}>
                    <h4 className={'whatsapp-logo-text'}>JOIN THE MASTERCLASS NOW</h4>
                 </div>
             </div>
         </div>
           </div>
           <div>
               <img className='fixed-image style-2' src='./image/whatsappp.png' onClick={(event)=>{event.preventDefault()
                   location.href='http://Wa.me/2348087141250'}}/>
               <img className='fixed-image style-1' src='./image/twitter.png'onClick={(event)=>{event.preventDefault()
                   location.href='https://t.co/bj1u7xQ7BY'}}/>
               <img className='fixed-image style-3' src='./image/gmail.jpg' onClick={(event)=>{event.preventDefault()
                   location.href='mailto:gabirolls798@gmail.com'}}/>
           </div>
       </div>

   )
  }
 }

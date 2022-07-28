import React from 'react';
import '../SideBar/SideBar.css'
import './content.css'

const Content = () => {
    return (
        <div className='SideBarChild content cardsColor contentBg'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card cardBg">
                        <i className="fa fa-google googleIcon" aria-hidden="true"></i>
                        <div className="card-body">
                            <div>
                                <h5 className="card-title text-danger"><a href="https://www.google.com/" target="_blank">Google</a></h5>
                                <p className="card-text">This is a Social website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card cardBg">
                        <i className="fa fa-envelope googleIcon text-secondary" aria-hidden="true"></i>
                        <div className="card-body">
                            <div>
                                <h5 className="card-title"><a href="https://mail.google.com/Mail" target="_blank">Mail</a></h5>
                                <p className="card-text">This is a Social website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card cardBg">
                        <i className="fa fa-facebook googleIcon" aria-hidden="true"></i>
                        <div className="card-body">
                            <div>
                                <h5 className="card-title"><a href="https://facebook.com/" target="_blank">FaceBook</a></h5>
                                <p className="card-text">This is a Social website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card cardBg">
                        <i className="fa fa-twitter googleIcon" aria-hidden="true"></i>
                        <div className="card-body">
                            <div>
                                <h5 className="card-title"><a href="https://twitter.com/" target="_blank">Twittwer</a></h5>
                                <p className="card-text">This is a Social website</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card cardBg">
                    <i class="fa fa-instagram text-danger googleIcon" aria-hidden="true"></i>
                        <div className="card-body">
                            <div>
                                <h5 className="card-title"><a href="https://https://www.instagram.com/" target="_blank">Instagram</a></h5>
                                <p className="card-text">This is a Social website</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Content;
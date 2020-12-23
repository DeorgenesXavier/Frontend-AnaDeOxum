import React, { Component } from 'react';

class Sobre extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="sobre">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Deorgenes Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Sobre mim</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Detalhes de contato</h2>
                  <p className="address">
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Sobre;

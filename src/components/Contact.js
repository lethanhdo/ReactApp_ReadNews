import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect : false
    }
  }

  isFileChange = (event)=>{
    const fImage = event.target.files[0].name;
    this.setState({
      fImage : fImage
    });
  }
  isChange = (event)=>{
    const ten = event.target.name;
    const giatri = event.target.value;

    this.setState({
      [ten]:giatri
    });
  }
  
  submitForm = (event)=>{
    event.preventDefault();
    this.setState({
      isRedirect : true
    });
  }

  getData = ()=>{
    var noiDung = "";
    noiDung += "Ten: "+this.state.fName;
    noiDung += " / Email: "+this.state.fEmail;
    noiDung += " / Phone "+this.state.fPhone;
    noiDung += " / Message: "+this.state.fMessage;
    noiDung += " / Day: "+this.state.fDay;
    noiDung += " / Image: "+this.state.fImage;
    return noiDung;
  }
  render() {
    if(this.state.isRedirect){
      console.log(this.getData());
      return <Redirect to="/" />;
    }
    return (
      <div>
        {/* begin lienhe */}
        <section className="page-section" id="contact" style={{ background: '#424242' }}>
          <div className="container">
            {/* Contact Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
            {/* Contact Section Form*/}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label><input onChange={(event)=>this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label><input onChange={(event)=>this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label><input onChange={(event)=>this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label><textarea onChange={(event)=>this.isChange(event)} name="fMessage" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Day</label>
                        <select className="form-control" onChange={(event)=>this.isChange(event)}  name="fDay">
                          <option value="thu2">Thứ 2</option>
                          <option value="thu3">Thứ 3</option>
                          <option value="thu4">Thứ 4</option>
                          <option value="thu5">Thứ 5</option>
                          <option value="thu6">Thứ 6</option>
                          <option value="thu7">Thứ 7</option>
                          <option value="chunhat">Chủ nhật</option>
                        </select>
                    </div>
                    <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Upload image</label>
                        <input type="file" className="form-control-file" onChange={(event)=>this.isFileChange(event)} name="fImage"/>
                    </div>
                  </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group"><button onClick={(event)=> this.submitForm(event)}className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end lienhe */}

      </div>
    );
  }
}

export default Contact;

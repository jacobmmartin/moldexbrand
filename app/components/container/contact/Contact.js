import React, {Component} from 'react';
//Load CSS and images
require("../../../js/form/sky-forms.css");
(function($) {
 "use strict";

	$(function()
	{
		// Validation
		$("#sky-form").validate(
		{
			// Rules for form validation
			rules:
			{
				name:
				{
					required: true
				},
				email:
				{
					required: true,
					email: true
				},
				message:
				{
					required: true,
					minlength: 10
				}
			},

			// Messages for form validation
      // FRENCH
			// messages:
			// {
			// 	name:
			// 	{
			// 		required: 'Veuillez inscrire votre nom',
			// 	},
			// 	email:
			// 	{
			// 		required: 'Veuillez inscrire une adresse courriel valable',
			// 		email: 'Veuillez inscrire une adresse courriel valable'
			// 	},
			// 	message:
			// 	{
			// 		required: 'Veuillez inclure un message'
			// 	}
			// },

			messages:
			{
				name:
				{
					required: 'Please enter your name',
				},
				email:
				{
					required: 'Please enter your email address',
					email: 'Please enter a VALID email address'
				},
				message:
				{
					required: 'Please enter your message'
				}
			},

			// Ajax form submition
			submitHandler: function(form)
			{
				$(form).ajaxSubmit(
				{
					success: function()
					{
						$("#sky-form").addClass('submited');
					}
				});
			},

			// Do not change code below
			errorPlacement: function(error, element)
			{
				error.insertAfter(element.parent());
			}
		});
	});

})(jQuery);

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="one_full" >
                    <iframe className="google-map2" style={{ width: 100 + '%', height: 450 + 'px' }}  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.8594830034!2d-90.46092968413848!3d38.53700717571039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d1daa3e5a7a5%3A0xc130521c59ecbd26!2s866+Horan+Dr%2C+Fenton%2C+MO+63026!5e0!3m2!1sen!2sus!4v1471023997472&amp;wmode=transparent"></iframe><br/>
                </div>


                <div className="container">

                    <div className="content_fullwidth">

                        <div className="two_third">
                            <p dangerouslySetInnerHTML={{ __html: __("0ce81919")}}></p>
                            <br/>
                            <p dangerouslySetInnerHTML={{ __html: __("54a477f6")}}></p>
                            <br/><br/>

                            <div className="cforms">

                                <form action="demo-contacts.php" method="post" id="sky-form" className="sky-form" noValidate="novalidate">
                                    <header dangerouslySetInnerHTML={{ __html: __("9aa1b7f8")}} ></header>
                                    <fieldset>
                                        <div className="row">
                                          <section className="col col-6">
                                              <label className="label" dangerouslySetInnerHTML={{ __html: __("49ee3087")}} ></label>
                                              <label className="input"> <i className="icon-append icon-user"></i>
                                                  <input type="text" name="name" id="name"/>
                                              </label>
                                          </section>
                                          <section className="col col-6">
                                              <label className="label" dangerouslySetInnerHTML={{ __html: __("1e884e30")}} ></label>
                                              <label className="input"> <i className="icon-append icon-envelope-alt"></i>
                                                  <input type="email" name="email" id="email"/>
                                              </label>
                                          </section>
                                        </div>
                                        <section>
                                            <label className="label" dangerouslySetInnerHTML={{ __html: __("c7892ebb")}}></label>
                                            <label className="input"> <i className="icon-append icon-tag"></i>
                                                <input type="text" name="subject" id="subject"/>
                                            </label>
                                        </section>
                                        <section>
                                            <label className="label" dangerouslySetInnerHTML={{ __html: __("4c2a8fe7")}} ></label>
                                            <label className="textarea"> <i className="icon-append icon-comment"></i>
                                                <textarea rows="4" name="message" id="message"></textarea>
                                            </label>
                                        </section>
                                        <section>
                                            <label className="checkbox" dangerouslySetInnerHTML={{ __html: __("8d171474")}}>
                                            </label>
                                        </section>
                                    </fieldset>
                                    <footer>
                                        <button type="submit" className="button" dangerouslySetInnerHTML={{ __html: __("747c6a35")}}></button>
                                    </footer>
                                    <div className="message"> <i className="icon-ok"></i>
                                        <p dangerouslySetInnerHTML={{ __html: __("7a8dfbf8")}}></p>
                                    </div>
                                </form>

                            </div>

                        </div>

                        <div className="one_third last">

                            <div className="address_info two">

                                <h4 dangerouslySetInnerHTML={{ __html: __("9daf5f79")}}></h4>
                                <ul>
                                    <li dangerouslySetInnerHTML={{ __html: __("d535f379")}} ></li>
                                </ul>

                            </div>


                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default Contact;

package lab.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import entity.MyMessage;
import repository.MessageRepository;


@RestController
@CrossOrigin
public class SmsController{
	@Autowired
	MessageRepository messageRepository;

	public static final String ACCOUNT_SID = "xxxxxxxxxxxxxxxxxxx";
    public static final String AUTH_TOKEN = "xxxxxxxxxxxx";
    public static final String TWILIO_NUMBER = "xxxxxx";
    
    //
    @RequestMapping(value = "/sendsms", method = RequestMethod.POST)
	public ResponseEntity<List<MyMessage>> sendSms(@RequestBody MyMessage sms ) {
    	
    	messageRepository.save(sms);
    	
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

	    Message message = Message.creator(new PhoneNumber(sms.getSmsTo()),
	        new PhoneNumber(sms.getSmsFrom()), 
	        sms.getBody()).create();

    System.out.println(message.getSid());
	  
		
		//userService.saveUser(user);
    	List<MyMessage> smslist = messageRepository.findAll();
    	return new ResponseEntity<>(smslist,HttpStatus.CREATED);
		
	}
    
    @RequestMapping(value = "/findAllsms", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<MyMessage>> findAllsms() {
		List<MyMessage> smslist = messageRepository.findAll();
		return new ResponseEntity<>(smslist,HttpStatus.OK);
	}
    
    
    //receive sms
    @RequestMapping(value = "/replysms", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> replySms( @RequestParam("Body") String body,@RequestParam("From") String from ) {
    	 //res.type("application/xml");
    	//tripMessage,from,to,author
    	boolean author=false;
    	String to=TWILIO_NUMBER;
    	MyMessage incomingsms=new MyMessage(body,from,to,author);
    	messageRepository.save(incomingsms);
    	
    	return new ResponseEntity<>(HttpStatus.OK);
    }
  
    
}
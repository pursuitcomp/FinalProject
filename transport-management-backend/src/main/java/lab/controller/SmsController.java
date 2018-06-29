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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import entity.MyMessage;
import entity.Paystubs;
import entity.Trips;
import repository.MessageRepository;


@RestController
@CrossOrigin
public class SmsController {
	@Autowired
	MessageRepository messageRepository;

	public static final String ACCOUNT_SID = "AC361718af85b715e42e7c45f83226d8d6";
    public static final String AUTH_TOKEN = "75a768d7dee0f69d5bd41c1e1a73276b";
    public static final String TWILIO_NUMBER = "+13145820488";
    
    //
    @RequestMapping(value = "/sendsms", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> sendSms(@RequestBody MyMessage sms ) {
    	
    	messageRepository.save(sms);
    	
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

	    Message message = Message.creator(new PhoneNumber(sms.getSmsTo()),
	        new PhoneNumber(sms.getSmsFrom()), 
	        sms.getBody()).create();

	    System.out.println(message.getSid());
	  
		
		//userService.saveUser(user);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
    
    @RequestMapping(value = "/findAllsms", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<MyMessage>> findAllsms() {
		List<MyMessage> smslist = messageRepository.findAll();
		return new ResponseEntity<>(smslist,HttpStatus.OK);
	}
    
    @RequestMapping(value = "/replysms", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> replySms(@RequestBody MyMessage sms ) {
    	
    	return new ResponseEntity<>(HttpStatus.OK);
    }
  
    
}
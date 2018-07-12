package lab.controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Access;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
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
import entity.User;
import repository.MessageRepository;
import repository.PaystubsRepository;
import repository.TripsRepository;
import repository.UserRepository;


@RestController
@CrossOrigin
public class UserController {
	public static final String ACCOUNT_SID = "xxxxxxxxxxxxxxxxxxx";
    public static final String AUTH_TOKEN = "xxxxxxxxxxxx";
    public static final String TWILIO_NUMBER = "xxxxxx";
    
    
	
	
	
	@Autowired
	UserRepository userRepository;
//	@Autowired
//	private UserService userService;
	
	@Autowired
	TripsRepository tripsRepository;
	
	@Autowired
	MessageRepository messageRepo;
	
	@Autowired
	PaystubsRepository payStubRepository;
	
	 @RequestMapping("/greetings")
	    public String greetings(){
		
	    	//sendSMS("3144374951");
	    	return "";
	}
	    
 
/*
	@RequestMapping(value = "/submitStudentDetails", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> submitStudent(@RequestBody Student student) {
		studentRepository.save(student);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "/findStudent", method = RequestMethod.GET)
	public ResponseEntity<Student> findStudent(String email) {
		Student student = studentRepository.findOne(email);
		return new ResponseEntity<>(student, HttpStatus.OK);
	}

	

	@RequestMapping(value = "/findAllStudent", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Student>> findAllStudent() {
		List<Student> students = studentRepository.findAll();
		return new ResponseEntity<>(students, HttpStatus.OK);
	}
	*/
	 
	//save user to database
	@RequestMapping(value = "/registerUser", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> registerUser(@RequestBody User user) {
		System.out.println(user);
		userRepository.save(user);
		//userService.saveUser(user);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	//add new trip
	@RequestMapping(value = "/addTrip", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> registerUser(@RequestBody Trips trip) {
		
		
		tripsRepository.save(trip);
		
		//send trip info text
		MyMessage sms=	messageRepo.save(createTripsms(trip));
    	
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

  Message message = Message.creator(new PhoneNumber(sms.getSmsTo()),
        new PhoneNumber(sms.getSmsFrom()), 
       sms.getBody()).create();

   System.out.println(message.getSid());
		
	    
	    
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	//create trip sms
	private MyMessage createTripsms(Trips trip) {
		
		User myuser=findUser(trip.getDriverid());
		String tripMessage=" \n Trip Alert!! \nBol: "+trip.getBol()+"\nPay$ "+trip.getPayamount()+"\n\nFrom: \n"+trip.getPcompany()+"\n"+trip.getPaddress().getStreet()+"\n"+trip.getPaddress().getCity()+" "+trip.getPaddress().getState()+" "+trip.getPaddress().getZip()+"\nDate:"
				+trip.getPdate()+"\nTime: "+trip.getPicktime()+"\n\nTo:\n"+trip.getDcompany()+"\n"+trip.getDaddress().getStreet()+"\n"+trip.getDaddress().getCity()+" "+trip.getDaddress().getState()+" "+trip.getDaddress().getZip()+"\nDate: "
						+trip.getDdate()+"\nTime:"+trip.getDeltime();
		
		//get driver phone number
		String to=myuser.getPhone();
		boolean author=true;
		String from=TWILIO_NUMBER;
		
		//Send me message object
		MyMessage sms=new MyMessage(tripMessage,from,to,author);
		return sms;
		
	}





	//save paystubs
	@RequestMapping(value = "/addPayStub", method = RequestMethod.POST)
	public ResponseEntity<HttpStatus> registerUser(@RequestBody Paystubs paystubs) {
		
		payStubRepository.save(paystubs);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	
	//get all paystubs
	@RequestMapping(value = "/findAllPayStubs", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Paystubs>> findAllpayStubs() {
		List<Paystubs> paystubs = payStubRepository.findAll();
		return new ResponseEntity<>(paystubs, HttpStatus.OK);
	}
	
	
	
	//Look for user in database, if they exist send user to the react response
	@RequestMapping(value="/sign-in", 
			method=RequestMethod.POST)
	public ResponseEntity<User> signIn(@RequestBody User user){ 
		
		//User userFromDatabase = this.userRepository.
				//findByEmailAndPassword(user.getEmail(), user.getPassword()) ;
		
		//if(userFromDatabase == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		//}
		//return new ResponseEntity<>(userFromDatabase,HttpStatus.OK);
	}
	
	//find all users
	@RequestMapping(value = "/findAllUser", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<User>> findAllUser() {
		List<User> users = userRepository.findAll();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/findUser", method = RequestMethod.GET)
	public User findUser(String email) {
		User user = userRepository.findOne(email);
		return user;
	}
	
	//Find all trips
	@RequestMapping(value = "/findAllTrips", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Trips>> findAllTrips() {
		List<Trips> trips = tripsRepository.findAll();
		return new ResponseEntity<>(trips,HttpStatus.OK);
	}
	
	
	

}
